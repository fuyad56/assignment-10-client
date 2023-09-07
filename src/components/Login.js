import React from "react";
import GoogleLogo from "../icons/Group 573.png";
import firebaseConfig from "../firebase.config";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const handleGoogleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error, error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-[30rem]">
      <div className="flex flex-col gap-6 px-10 py-10 rounded-xl shadow-2xl mt-[250px]">
        <h1 className="text-5xl font-bold">Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="text-lg font-semibold px-2 py-[14px] border-2 rounded-xl w-[400px]"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          className="text-lg font-semibold px-2 py-[14px] border-2 rounded-xl w-[400px]"
        />
        <button className="text-lg font-semibold text-white bg-[#6946F4] px-8 py-4 rounded-xl">
          Login
        </button>
      </div>
      <div className="mt-10 shadow-2xl rounded-full">
        <button
          onClick={handleGoogleLogin}
          className="text-lg font-semibold border-2 px-4 py-2 rounded-full flex justify-between items-center w-[100%]"
        >
          <img src={GoogleLogo} alt="" className="w-[10%]" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
