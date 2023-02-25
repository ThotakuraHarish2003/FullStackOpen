import React from 'react'

const Notification = ({message,success}) => {
    if(message===''){
        return null
    }
    if(message.success==true){
        return(
            <div className='success'>{message.content}</div>
        )
    }
    return (
        <div className='error'>{message.content}</div>
      )
}

export default Notification