import React from "react";
import useFetch from "../useFetch";

export const Post = ({ id }) => {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
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
      {data.map(({ title, body, id }) => {
        return (
          <li key={id}>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
          </li>
        );
      })}
    </ol>
  );
};
