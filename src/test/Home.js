
import { collection, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase"; 

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
    {postLists.map((post) => {
      return <div>
        {post.title}
        {post.postText}
        {post.price}
        
      </div>
    })}
  </div>
  </>
);
  }
