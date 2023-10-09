import React from "react";
import { IMG, LOGO_URL } from "../Utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AddUser, removeUser } from "../Utils/userSlice";
import { toggleGptSearchView } from "../Utils/gptSlice";
import {Supported_Langauages} from "../Utils/constants";
import {changeLanguage} from "../Utils/configSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          AddUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unSubscribe is called when component unMounts
    return () => unSubscribe();
  }, []);

  const handleGPTSerach = () => {
    dispatch(toggleGptSearchView());
  };

  const handleChange =(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen md:px-8 md:py-2 bg-gradient-to-b from-black z-10 bg-opacity-80  flex flex-col md:flex-row justify-between">
      <img className="w-52 mx-auto md:mx-0" src={LOGO_URL} alt="Logo Url" />
      
      {user && (
        <div className="flex p-4 justify-between ">
        {showGptSearch && ( <select  className ="md:p-2 md:mx-4 h-14 p-2 bg-gray-900 text-white rounded-lg" onChange={handleChange}>
          {Supported_Langauages.map((lang)=>(
          <option key={lang.Identifier} value = {lang.Identifier}>{lang.name}</option>
          ))}
        </select>)}
        <h1 className="hidden font-semibold text-lg text-white md:p-2 md:mx-4 py-8 mx-4">Hello {user.displayName}!!!</h1>
          <button
            onClick={handleGPTSerach}
            className="font-semibold text-white md:p-2 md:mx-4  p-2 mx-4 rounded-lg bg-blue-500 cursor-pointer">
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="hidden md:block w-14 h-14 rounded-lg" src={IMG} alt="SignOut Url" />
          <button
            onClick={handleSignOut}
            className="font-semibold text-white p-2 cursor-pointer rounded-lg ">
            Sign Out 
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
