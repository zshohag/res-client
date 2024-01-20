import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setclientSecret] = useState("");
  const { user } = useAuth();
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [cart, refetch] = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setclientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      //console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unKnown",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to
          // cartIds: cart.map((item) => item._id),
          // menuItemIds: cart.map((item) => item.menuId),
          cartItems: cart.map((item) => item._id),
          menuItems: cart.map((item) => item.menuItemId),
          itemNames: cart.map((item) => item.name),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        refetch();
        if (res.data?.insertResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for the Payment",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };

  //console.log("paymentIntent", paymentIntent);
  //setProcessing(false);

  //   if (paymentIntent.status === "succeeded") {
  //     setTransactionId(paymentIntent.id);
  //     //SAVE PAYMENT INFORMATION TO THE SERVER
  //     const payment = {
  //       email: user?.email,
  //       transactionId: paymentIntent.id,
  //       price,
  //       date: new Date(),
  //       quantity: cart.length,
  //       cartItems: cart.map((item) => item._id),
  //       menuItems: cart.map((item) => item.menuItemId),
  //       status: "service pending",
  //       itemNames: cart.map((item) => item.name),
  //     };
  //     axiosSecure.post("/payments", payment).then((res) => {
  //       console.log(res.data);
  //       if (res.data.insertedId) {
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: ` PAYMENT DONE`,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     });
  //   }
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="mt-4 btn bg-[#D1A054]  hover:bg-[#D1A054] btn-sm text-white "
        >
          Pay
        </button>
      </form>
      <div className="mt-5">
        {cardError && <p className="text-red-600 font-semibold">{cardError}</p>}
        {transactionId && (
          <p className="text-green-700 font-semibold ">
            Transaction Complete Done
            <br />
            Your TransactionId :{" "}
            <span className="text-green-900 font-bold "> {transactionId} </span>
          </p>
        )}
      </div>
    </>
  );
};

export default CheckoutForm;
