import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import useFetch from "../useFetch";

export const Table = ({ Post, Album, Comment, Completed, Pending, Todos }) => {
  const url = "https://jsonplaceholder.typicode.com/users";
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
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Company Name</th>
          <th>Person Name</th>
          <th>Details</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({ id, name, email, company, username, address, phone, website }) => {
            return (
              <tr>
                <td>{id}</td>
                <td>{company.name}</td>
                <td>{name}</td>
                <td>
                  <ul
                    style={{
                      listStyle: "none",
                    }}
                  >
                    <li>name: {name}</li>
                    <li>username: {username}</li>
                    <li>email: <a href={email}>{email}</a></li>
                    <li>suite: {address.suite}</li>
                    <li>city: {address.city}</li>
                    <li>zip code: {address.zipcode}</li>
                    <li>latitute: {address.geo.lat}</li>
                    <li>longitute: {address.geo.lng}</li>
                    <li>phone: {phone}</li>
                    <li>website: <a href={website}>{website}</a></li>
                    <li>catchPhrase: {company.catchPhrase}</li>
                    <li>bs: {company.bs}</li>
                  </ul>
                </td>
                <td>
                  <ul
                    style={{
                      listStyle: "none",
                    }}
                  >
                    <li>
                      <Link to={"post"} onClick={() => Post(id)}>
                        Post
                      </Link>
                    </li>
                    <li>
                      <Link to={"comment"} onClick={() => Comment(id)}>
                        Comment
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{
                          color: "blue",
                        }}
                        to={"todos"}
                        onClick={() => Todos(id)}
                      >
                        Todos
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{
                          color: "orange",
                        }}
                        to={"pending"}
                        onClick={() => Pending(id)}
                      >
                        Pending
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{
                          color: "green",
                        }}
                        to={"completed"}
                        onClick={() => Completed(id)}
                      >
                        Completed
                      </Link>
                    </li>

                    <li>
                      <Link to={"album"} onClick={() => Album(id)}>
                        Album
                      </Link>
                    </li>
                  </ul>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};
