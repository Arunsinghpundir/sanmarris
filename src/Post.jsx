import React from 'react'
import useFetch from './useFetch'

export const Post = ({id}) => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    const {data, loading} = useFetch(url);
    if(loading){
        return (
        <>
        <h2>Loading...</h2>
        <h3>Please wait while we load data for you😊 </h3>
        </>
        )
      }
      console.log(id)
  return (
    <div>{data.map(({title,body})=>{
        return (
        <>
        <li>{body}</li>
        <li>{title}</li>
        </>
        )
    })}</div>
  )
}
