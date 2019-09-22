import React from 'react';

const logout = (props) => {
  const stylePage = {
    height: '100%'
  }
  setTimeout(()=>{props.history.push('/')}, 1000);

  return(
    <div className="logout-container" style={stylePage}>
      <h1 className="logut-header">Log out in process...</h1>
    </div>
  )
}

export default logout;