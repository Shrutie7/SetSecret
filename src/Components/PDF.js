import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF =(props)=>{
    return(
        <>
          <div className="Post" ref={ref}>
            <p>username : {props.username}</p>
            <p>email : {props.email}</p>
            <p>password : {props.password}</p>
            <p>phone : {props.phone}</p>
        
          </div>
        
          <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download as PDF</button>}
          </Pdf>
        </>
    )
}
export default PDF;

