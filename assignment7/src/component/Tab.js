import React,{useEffect,useState} from 'react'

function Tab() {
    const [posts,setposts]=useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users ').then((res => res.json()))
            .then(data => {
                setposts(data)
                console.log(data);
            }).catch(e=>{
                console.log(e)
               
            })
    }, [])
    return (
        <div>
            <h4>Table</h4>
            posts:{posts.length}
            <table>
                <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
                </tr>
                </thead>
                <tbody>
                    {posts.map((p,index)=>{
                return <Tr key={index} posts={p} />

                    })}
                </tbody>
            </table>
        </div>
    )
}


const Tr=({posts})=>{
    return(
        <tr>
        <td>{posts.id}</td>
        <td>{posts.name}</td>
        <td>{posts.username}</td>
        <td>{posts.email}</td>
        <td>{posts.address.street}</td>
        <td>{posts.phone}</td>
        <td>{posts.website}</td>
        <td>{posts.company.name}</td>


        </tr>
    )
}
export default Tab