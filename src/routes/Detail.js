import React, {useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
//import { useEffect } from "react";
//import { useEffect } from "react";

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=> {
        if (location.state === undefined) {
            navigate("/");
        } else if (location.state === null) {
            navigate("/");
        }
    });
    //console.log(location.state)

  if (location.state) {
    return <span>{location.state.title}</span>;
  } else {
      return null;
  }
}

export default Detail;