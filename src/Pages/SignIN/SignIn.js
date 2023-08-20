import React from "react";
import "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Pages/SignIN/SignIn.css";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignIn = () => {

  return (
    <div className="form">
      <div
        className="modal modal-signin d-flex bg-secondary py-5"
        tabIndex={-1}
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              {/* <h1 class="modal-title fs-5" >Modal title</h1> */}
              <form>
                <h1 className="sign_cta fw-bold mb-0 fs-2">
                  Sign up its free !
                </h1>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    name="inputEmail"
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    name="inputPassword"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    By signing up, I have read an agree to <br></br> SOS's{" "}
                    <a className="_link" href="url">
                      {" "}
                      Terms{" "}
                    </a>{" "}
                    &{" "}
                    <a className="_link" href="url">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <button type="submit" className="sign_up_btn btn-primary">
                  Sign up
                </button>
                <p className="or">OR</p>
                <div className="buttons">
                  <button
                    className="google_icon_sign w-100 py-2 mb-2 btn btn-outline-dark rounded-3 text-align-center"
                    type="submit"
                  >
                    Sign up with <FaGoogle />
                  </button>
                  <button
                    className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3 text-align-center"
                    type="submit"
                  >
                    Sign up with <FaFacebook />
                  </button>
                  <p className="sign_in_p">
                    Already have an account?{" "}
                    <a className="_link" href="url">
                      Sign in
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
