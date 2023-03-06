import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import img from "../../assets/images/login/login.svg";
import { AuthContest } from "../../Contexts/AuthContexts/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const {userLogin} = useContext(AuthContest);
  const hendelUserLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    userLogin(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate('/');
    })
    .then(error => console.error(error))
    // navigate('/');
}

  return (
    <div className="w-[70%] mx-auto py-12">
      <div className="flex gap-12 justify-between">
        <div className="text-center lg:text-left">
          <img src={img} alt="img" />
        </div>
        <div className="w-1/2 shadow-2xl border rounded-2xl bg-base-100">
          <form onSubmit={hendelUserLogin} className="card-body px-20 py-5">
            <h1 className="text-5xl font-bold p-8 text-center">LogIn Now</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="" href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-red-600 hover:bg-slate-900">
                Login Now
              </button>
            </div>
            <h2>
              Have an account? <Link className="font-bold text-red-600" to="/singup"> SignUp Now</Link>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
