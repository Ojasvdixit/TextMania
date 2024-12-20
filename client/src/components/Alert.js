import React from 'react'
import '../CSS/Alert.css';

function Alert(props) {
  return (
   
     props.alert  && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
          <strong>{props.alert.type}</strong>: {props.alert.msg}
            <button type="button" classname="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
  
  )
}

export default Alert ;