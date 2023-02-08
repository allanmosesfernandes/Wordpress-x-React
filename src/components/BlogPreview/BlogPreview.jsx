import React from "react";
import axios from "axios";
import "./blogPreview.scss";

axios.get(`http://allanmoses.ninja/wp-json/wp/v2/unsolicited`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  }); 

  
const BlogPreview = () => {
  return (
    <div>
        <h2>Blog</h2>
    </div>
  )
}

export default BlogPreview