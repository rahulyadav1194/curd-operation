import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";


export const Posts=() =>{

    const [data, setData] = useState([]);

    const getPostData= async()=>{
      const res= await getPost();
      console.log(res.data)
      setData(res.data);
    };
    
      useEffect (()=>{
    getPostData()
      },[]);
    
return (
<section className="section-post">
      <ul>
        {
            data.map((curElem)=>{
                const {id, body, title}=curElem;
                return(
                   <li key={id}> 
                   <p>Title: {title}</p>
                   <p> News: {body} </p>
                    <button> Edit </button>
                    <button> Delete </button>

                   </li>
                )

            })
        }
      </ul>
</section>)

};