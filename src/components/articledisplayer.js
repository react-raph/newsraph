import React from 'react';
import SingleArticleReader from "./singlearticlereader";

export default class ArticleDisplayer extends React.Component{

    constructor() {
        super();
    }

    render = () => (
        <div>
            article displayer
            <SingleArticleReader/>
        </div>
    )
};

// https://newsapi.org/
// cdb3f17570d14116aeb1cfd9e53171b1
// https://newsapi.org/docs/get-started

// Olicpg