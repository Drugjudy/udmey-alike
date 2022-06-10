import Homepage from "../frontend/homepage";
import { collection, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase"; 
import Navb from "../frontend/boostarp/navbar";
export default function Home() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "info");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id })))

    };

    getPosts();
  });

return (
  <>
  <div>
         <Navb />
    {postLists.map((post) => {
      return <div>
   
        
<Homepage title={post.title} intro={post.postText} /> 
        
      </div>
    })}
  </div>
  </>
);
  }
