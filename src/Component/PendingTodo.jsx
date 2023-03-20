import React from "react";
import useFetch from "../useFetch";

export const PendingTodo = ({ id }) => {
  const url = `https://jsonplaceholder.typicode.com/todos?userId=${id}`;
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
      { data.map(({ title, id,completed }) => {
        if(!completed){
        return (
          <li key={id}>
            <div>
              <p>{title}</p>
            </div>
          </li>
        )}
      })}
    </ol>
  );
};
