import Slide from "./boostarp/Corse";
import Navb from "./boostarp/navbar";
import "../frontend/student-portal/css/home.css"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.css'
import React from "react";

function Homepage({title, intro  }) {
    return(
        <>
       <div className="home">
            
  <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text>
          {intro}
          </Card.Text>
        </Card.Body>
      </Card>
</div>

        </>
    )
}

export default Homepage;