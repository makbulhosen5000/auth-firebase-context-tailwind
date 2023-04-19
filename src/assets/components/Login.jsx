import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    console.log(signIn);

    const handleLoginForm = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset();
        })
        .then(error=>{
          console.log(error);
        })
    }
    const loginWithGoogle = () => {
      signInWithGoogle()
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error=>{
        console.log(error);
      })
    }
  return (
    <div className="hero min-h-screen bg-base-700">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLoginForm} className="card-body">
            <h1 className="text-2xl text-center">Please Login!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <Link to="/register">
            <button className="btn btn-link mb-5">
              Register In Auth Muster? Please Register
            </button>
          </Link>
          <button onClick={loginWithGoogle} className="btn btn-primary">Sign in With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
