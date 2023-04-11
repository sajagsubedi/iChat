import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { auth } from "../firebase";
import firebase from "firebase/app";

export default function Login() {
  return (
    <section id="login-page">
      <div id="login-card">
        <h2>Welcome to iChat</h2>
        <div id="login-btn-group">
          <button
            className="googlebtn"
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
          >
            <AiOutlineGoogle /> Sign In With Google
          </button>
          <button className="facebookbtn" onClick={() =>
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
            }>
            <FaFacebookF />
            Sign In With Facebook
          </button>
        </div>
      </div>
    </section>
  );
}
