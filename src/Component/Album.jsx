import React from "react";
import useFetch from "../useFetch";

export const Album = ({ id }) => {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
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
      {data.map(({ title, id }) => {
        return (
          <li key={id}>
            <p>{title}</p>
          </li>
        );
      })}
    </ol>
  );
};
