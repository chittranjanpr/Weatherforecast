import React from "react";
import { Card } from "react-bootstrap";

const Toaster = (props) => {
  return (
    props.show ?
        <div style={{ zIndex: 10, float: "right", position:"fixed", top:"10px", right: "10px" }}>
            <Card style={{ width: '16rem' }}>
                <Card.Body>
                {props.title ?
                    <Card.Title>
                    <strong className="mr-auto">{props.title}</strong>
                    </Card.Title>
                :null}
                {props.message ?
                    <Card.Text>
                        {props.message}
                    </Card.Text>
                : null}    
                </Card.Body>
            </Card>
        </div> 
    : null
  );
};

export default Toaster;
