import { useState } from 'react'
import {Link } from "react-router-dom";
import React from 'react'
import useFetch from '../useFetch';

export const Table = () => {
const url = "https://jsonplaceholder.typicode.com/users"
const {data,loading} = useFetch(url)
if(loading){
  return (
  <>
  <h2>Loading...</h2>
  <h3>Please wait while we load data for you😊 </h3>
  </>
  )
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
        <tbody>{data.map(({
          id,
          name,
          email,
          company,
          username,
          address,
          phone,
          website,
          })=>{
        return (
          <tr>
            <td>{id}</td>
            <td>{company.name}</td>
            <td>{name}</td>
            <td>
              <ul style={{
                listStyle: "none"
                
              }}>
                <li>name: {name}</li>
              <li>username: {username}</li>
              <li>email: {email}</li>
              <li>suite: {address.suite}</li>
              <li>city: {address.city}</li>
              <li>zip code: {address.zipcode}</li>
              <li>latitute: {address.geo.lat}</li>
              <li>longitute: {address.geo.lng}</li>
              <li>phone: {phone}</li>
              <li>website: {website}</li>
              <li>catchPhrase: {company.catchPhrase}</li>
              <li>bs: {company.bs}</li>
              </ul>
            </td>
            <td>{id}</td>
            <td>
             
              <li><Link to={"post"}>Post</Link></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </td>
          </tr>
        )
      })}
      </tbody>
      </table>
)
    }