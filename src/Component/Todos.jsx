import React from "react";
import useFetch from "../useFetch";

export const Todos = ({ id }) => {
  const url = `https://jsonplaceholder.typicode.com/todos?userId=${id}`;
  const { data, loading } = useFetch(url);
  if (loading) {
    return (
      <>
        <h2>Loading...</h2>
        <h3>Please wait while we load data for you😊 </h3>
      </>
    );
  }
  return (
    <ol>
      { data.map(({ title, id }) => {
        return (
          <li key={id}>
            <div>
              <p>{title}</p>
            </div>
          </li>
        )
      })}
    </ol>
  );
};
