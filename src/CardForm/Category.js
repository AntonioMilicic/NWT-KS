import React from 'react';

const category = (props) => {
  return (
      <option className="category" categoryname={props.categoryname}>{props.categoryname}</option>
  );
}

export default category;