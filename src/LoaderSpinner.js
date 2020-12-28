import React from "react";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default function LoaderSpinner(){
    return(
      <Loader
         type="TailSpin"
         color="#12, 109, 96"
         height={200}
         width={200}
         timeout={5000}
 
      />)}