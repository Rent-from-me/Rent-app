import React from 'react'
import "./BecomeHost.css"
import Button from "@mui/material/Button";

const BecomeHost = () => {
  return (
    <div className="become__host">
      <div>
        <h1>Questions about hosting?</h1>
        <Button className="button">Ask a Superhost</Button>
      </div>
    </div>
  );
}

export default BecomeHost