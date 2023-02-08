import { React, useState, useEffect } from "react";
import axios from "axios";
import "./blogPreview.scss";



const BlogPreview = () => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://allanmoses.ninja/wp-json/wp/v2/unsolicited?_embed`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div className="blog__preview__container ">
    {posts.map((post,index) => {
         const imageURL = post["_embedded"]["wp:featuredmedia"][0]["source_url"];
 
         return (
            <div className="blog__preview__card" key={index}>
                <div className="card__number">0{index + 1}</div>
                <div className="card__image">
                    <img src={imageURL} alt={`post ${index + 1}`} />
                </div>
                <div className="card__content">
                    <h4>{post.title.rendered}</h4>
          <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />

                </div>
            </div>
         )
      })}
    </div>
  )
}

export default BlogPreview