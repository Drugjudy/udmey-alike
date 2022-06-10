import Accordion from "react-bootstrap/Accordion"

import React from "react";
import PropTypes from "prop-types";

export default function C1( {topic1, topic2, embedId} ) {
    return(
        <>

         <div>
<img src="https://pbs.twimg.com/media/FQaaA_-VkAAYnPD.jpg" alt="" />
         </div>

        <div>
            <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
       {topic1}
   {topic2}
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
 
        </div>
        </>
    )
}

C1.propTypes = {
  embedId: PropTypes.string.isRequired
};

