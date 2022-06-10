import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../src/firebase";
import { useNavigate } from "react-router-dom";
import "../frontend/student-portal/css/teacher.css"

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [price, setPrice] = useState("");

  const postsCollectionRef = collection(db, "info");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      price,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

 

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
   <>
<div className="test">
    <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Course details</h3>
                        <p>Fill in the data below.</p>
                        <div className="requires-validation" novalidate>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="name" placeholder="Title" required onChange={(event) => {
               setTitle(event.target.value);
            }} />
                               <div className="valid-feedback"></div>
                               <div className="invalid-feedback"></div>
                            </div>

                            <div className="col-md-12">
                                <textarea onChange={(event) => {
              setPostText(event.target.value);
            }} className="text" type="email" name="email" placeholder="Short intro" required />
                                 <div className="valid-feedback"></div>
                                 <div className="invalid-feedback"></div>
                            </div>

                           <div className="col-md-12">
                              <input  className="form-control" type="text" name="password" placeholder="Price" required /> 
                               <div className="valid-feedback"></div>
                               <div className="invalid-feedback"></div>
                           </div>
                  

                            <div className="form-button mt-3">
                                <button onClick={createPost} id="submit" type="submit" className="btn btn-primary">save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</>
  );
}

export default CreatePost;