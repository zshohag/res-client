import { useContext, useEffect,  } from "react";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful ",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  //const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  // const handleValidateCaptcha = (e) => {
  //   const user_captcha_value = e.target.value;
  //   //console.log(user_captcha_value);
  //   if (validateCaptcha(user_captcha_value) === true) {
  //     Swal.fire("Captcha Matched");
  //     setDisabled(false);
  //   } else {
  //     Swal.fire("Captcha Does Not Match");
  //     setDisabled(true);
  //   }
  // };

  return (
    <>
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  {/* <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a> */}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  //onBlur={handleValidateCaptcha}
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  required
                />
                {/* <button className="btn btn-outline btn-xs mt-4  ">
                  Validate
                </button> */}
              </div>

              <div className="form-control mt-1">
                <input
                  disabled={false}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              
              {/* <p>Already registered? Go to log in</p> */}
              
            </form>
            <div className="text-center " >
            <Link to="/signup">
                <small>New here? Create a New Account</small>
              </Link>
            </div>
              <SocialLogin/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
