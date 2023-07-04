import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
