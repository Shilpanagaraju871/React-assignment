// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Fetchapi() {

    const [posts,setposts]=useState([]);
    const [search,setSearch] = useState()
    const [final,setfinal]=useState([])
    const [wantPost,setWantPost] = useState(true)

  function abc() {
       axios.get(' https://jsonplaceholder.typicode.com/posts').then(res =>{
           console.log(res);
           setposts(res.data)
           setWantPost(true)
       })
       .catch(err=>{
           console.log(err);
       })
    }

    function desc(){
        axios.get(' https://jsonplaceholder.typicode.com/posts').then(res =>{
           console.log(res);
           setposts(res.data.reverse())
           setWantPost(true)
       })
       .catch(err=>{
           console.log(err);
       })
    }

    useEffect(()=>{
        if (search !== undefined ){
        const postsCopy=[...posts]
        const filteredList=postsCopy.filter((obj)=>{
            if (obj.title.includes(search)){
                return obj.title
            } 
        })
        setfinal(filteredList)
        setWantPost(false)
        console.log(search);
    }
    },[search])

    const handleChange = (e)=>{
        setSearch(e.target.value)
        console.log(e);
    }

  return <div>
     
      <button onClick={abc}>ascend</button>
      <button onClick={desc}>desc</button>
      <input name="search" onKeyUp={handleChange} /> 

        { wantPost ? <ul> 
            {
                posts.map((post) =>(<li > {post.id} {post.title}</li>))
            }
        </ul> : 

         <ul>
            {
                final.map((post) =>(<li > {post.id} {post.title}</li>))
            }
        </ul> }

  </div>;
}

export default Fetchapi;