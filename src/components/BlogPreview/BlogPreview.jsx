import { React, useState, useEffect } from "react";
import axios from "axios";
import "./blogPreview.scss";
import { useNavigate } from "react-router-dom";


const BlogPreview = () => {
    
    const navigate = useNavigate();

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
        //==Get the date from API and extract what you need==//
        const dateString = post.date.split("T")[0];
        
        let blogDate = new Date(`${dateString}`).toDateString();
        
        return (
            <div className="blog__preview__card" key={index} title={post.title.rendered}>
                <div className="card__number">0{index + 1}</div>
                <span className="card__date">{blogDate}</span>
                <div className="card__image">
                    <img src={imageURL} alt={`post ${index + 1}`} />
                </div>
                <div className="card__content">
                    <h4>{post.title.rendered}</h4>
                    <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                </div>
                <div className="card__button">
                    <button className="button-30" onClick={() => navigate(`/blog/${post.slug}`)}>Read More</button>
                </div>
            </div>
         )
      })}
    </div>
  )
}

export default BlogPreview