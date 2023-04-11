import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { BiLogIn } from "react-icons/bi";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function Chats() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const handleLogOut = async () => {
    await auth.signOut();
    navigate("/");
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    console.log(user.displayName);
    console.log(user.email);
    console.log(user.uid);
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": "784bdb9e-8724-4f63-8ab6-3c10d59f74a7",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then((data) => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: {
                "private-key": "6bc32f53-a9e2-4519-87c6-2b12ebc09ec8",
              },
            })
            .then(() => setLoading(false))
            .catch((err) => console.log(err.message));
        });
      });
  }, [user, useLocation().search]);
    // if (!user || loading) return "loading ...";
  return (
    <section id="chats-page">
      <header id="chat-header">
        <div id="logo">iChat</div>
        <div id="logout">
          <button onClick={handleLogOut} id="logoutBtn">
            Logout
            <BiLogIn />
          </button>
        </div>
      </header>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="54c180e6-6522-4f7f-98ab-9f8d5c405480"
        userName={user.email}
        userSecret={user.uid}
      />
    </section>
  );
}
