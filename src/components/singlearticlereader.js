import React from 'react';
import "./singlearticlereader.css";

const SingleArticleReader = ({title, img, text}) =>{
    
    return (
        <div className="SingleArticleReader-Body">
            <h2>{title}</h2>
            <img src={img} alt={title} className="SingleArticleReader-Image"/>
            <section>{text}</section>
        </div>
    )
};

export default SingleArticleReader;

// react.raph@laposte.net
// Raph
// react-raph