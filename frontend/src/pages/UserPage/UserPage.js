import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./UserPage.css";

const UserPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/comments/all/",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setComments(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getComments();
  }, [token]);
  return (
    <div className="container">
      <h1>User Page for {user.username}</h1>
      {comments &&
        comments.map((comment) => (
          <p key={comment.id}></p>
        ))}
    </div>
  );
};

export default UserPage;
