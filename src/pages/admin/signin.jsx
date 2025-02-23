import { useSigninMutation } from "../../redux/api/adminApi";
import { useDispatch } from "react-redux";
import { setAdminDetails } from "../../redux/slices/adminSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signinAdmin, { isLoading: isSigninLoading, isSuccess }] =
    useSigninMutation();
  const [error, setError] = useState(null); // no type annotations
  const [validationError, setValidationError] = useState(null); // no type annotations
  const dispatch = useDispatch();
  const router = useRouter();

  const validateForm = () => {
    if (!email.trim() || !password.trim()) {
      return "Email and password are required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    return null;
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setError(null);
    const validationMessage = validateForm();
    if (validationMessage) {
      setValidationError(validationMessage);
      return;
    }
    setValidationError(null);

    try {
      const response = await signinAdmin({ email, password }).unwrap();
      dispatch(setAdminDetails({ adminInfo: response, token: response.token }));
      if (response.token) {
        router.push("/admin/dashboard");
      }
    } catch (err) {
      setError(err?.data?.message || "An unexpected error occurred.");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Welcome to Tastify Admin Panel!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
      });
    }
  }, [isSuccess]);

  return (
    <>
      <div className="account-page">
        <div className="container-fluid p-0">
          <div className="row align-items-center g-0">
            <div className="col-xl-5">
              <div className="row">
                <div className="col-md-7 mx-auto">
                  <div className="mb-0 border-0 p-md-5 p-lg-0 p-4">
                    <div className="mb-4 p-0">
                      <a href="/" className="auth-logo">
                        <h3>
                          <b>Msm North.</b>
                        </h3>
                      </a>
                    </div>

                    <div className="pt-0">
                      <form onSubmit={handleSignin} className="my-4">
                        <div className="form-group mb-2">
                          <label htmlFor="emailaddress" className="form-label">
                            Email address
                          </label>
                          <input
                            className="form-control"
                            id="emailaddress"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            placeholder="Enter your password"
                          />
                        </div>
                        {validationError && (
                          <p style={{ color: "red" }}>{validationError}</p>
                        )}
                        <div className="form-group mb-0 row">
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                className="btn btn-dark"
                                type="submit"
                                disabled={isSigninLoading}
                              >
                                {isSigninLoading ? (
                                  <div className="loader-container">
                                    <div className="loader"></div>
                                    <span>Please Wait...</span>
                                  </div>
                                ) : (
                                  "Sign In"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="account-page-bg p-md-5 p-4">
                <div className="text-center">
                  <div className="auth-image">
                    <img
                      src="/img/login.png"
                      className="mx-auto img-fluid"
                      alt="images"
                    />
                  </div>
                  <h5 className="text-dark mb-3 mt-4 pera-title">
                    Hi, Welcome to Tastify Admin Panel
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
