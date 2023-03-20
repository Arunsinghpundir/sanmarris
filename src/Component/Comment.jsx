import React from "react";
import useFetch from "../useFetch";

export const Comment = ({ id }) => {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
  const { data, loading } = useFetch(url);
  if (loading) {
    return (
      <>
        <h2>Loading...</h2>
        
      </>
    );
  }
  return (
    <ol>
      {data.map(({ name, email, body, id }) => {
        return (
          <li key={id}>
            <div>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Body: {body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
};
