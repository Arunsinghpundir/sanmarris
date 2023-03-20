import React, { useEffect, useState } from 'react'

 const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        async function fetchData(){
            try{
                setLoading(true);
                const api = await fetch(url);
                const response = await api.json();
                setData(response)
                setLoading(false);

            }catch(err){
                setLoading(false);
                console.log(err);
            }
        }
        fetchData()
    },[url])
  return {data,loading};
}
export default useFetch;