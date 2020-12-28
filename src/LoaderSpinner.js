import React from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default function LoaderSpinner(){
return(
      <LoaderSpinner
         type="TailSpin"
         color="#ffa62b"
         height={100}
         width={100}
         timeout={5000}
 
      />
     );
}