import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userslice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSigninForm, SetisSigninForm] = useState(true); //by defualt the value would be singin

  const [errorMessge, SetErrorMessge] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null); // lets give initial value null
  const password = useRef(null);
  const fullname = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value); //from validate.jsx
    SetErrorMessge(message);

    if (message) return;

    if (!isSigninForm) {
      //sign  up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser; //auth is main ...and auth.currentuser have updtaed value

              dispatch(addUser({ uid, email, displayName }));

              navigate("/browse");
            })
            .catch((error) => {
              SetErrorMessge(error.message);
              // ...
            });
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessge(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessge(errorCode + "-" + errorMessage);
        });
    }
  };

  const ToggleSignInForm = () => {
    SetisSigninForm(!isSigninForm);
  };
  return (
    <div>
      <div className="absolute">
        <img src={BG_URL} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSigninForm ? "SIgn In" : "SIgn UP"}
        </h1>
        {!isSigninForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessge}</p>
        <button
          className="p-4 my-6 cursor-pointer bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSigninForm ? "SIgn In" : "SIgn UP"}
        </button>
        <p className="py-4 cursor-pointer" onClick={ToggleSignInForm}>
          {isSigninForm
            ? " New to Netflix? Sign UP Now"
            : "Already Registered Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
