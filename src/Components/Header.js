import React from "react";
import { LOGO_URL } from "../Utils/constants";
import {signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Header() {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 bg-opacity-80 flex justify-between">
      <img className="w-52" src={LOGO_URL} alt="Logo Url" />
       {user && <div className="flex p-4">
        <img className="w-12 h-12"
          src="https://occ-0-2857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
          alt="SignOut Url"
        />
        <button onClick={handleSignOut} className="font-semibold text-white p-2 cursor-pointer">Sign Out</button>
      </div>}
    </div>
  );
}

export default Header;
