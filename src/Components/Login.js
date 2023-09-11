import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [SignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!SignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=" bg-opacity-80 bg-gradient-to-b from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="BgImg"
        />
      </div>
      <form className=" text-white md:w-3/12 bg-black p-12 absolute my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className=" text-3xl py-4 px-1 font-bold">
          {SignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!SignInForm && <input
          type="text"
          placeholder=" Full Name"
          className="p-4 my-4 w-full  rounded-md bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full  rounded-md bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4  my-4 w-full rounded-md bg-gray-700"
        />
        <button className=" cursor-pointer p-4 my-6  bg-red-600 w-full rounded-md">
          {SignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p  className="cursor-pointer" onClick={toggleSignInForm}>
          {SignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
}

export default Login;
