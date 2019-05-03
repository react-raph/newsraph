import React from 'react';
import SingleArticleReader from "./singlearticlereader";
import {uid} from "react-uid";
import "./articledisplayer.css";
import empireImg from '../img/empire.svg';
import rebelImg from '../img/rebel.svg';
//import scumImg from '../img/scum.svg';

export default class ArticleDisplayer extends React.Component{

    constructor() {
        super();

        this.state = {
            news: this.getNews(this.props) ,
            selected: ""
        };
        //console.log(this.props);
        //this.props.register(this.handleSelectionChange);
    }

    static getDerivedStateFromProps = (props) =>{
        console.log(props);
        //this.props.register(this.handleSelectionChange);

        return null;
    }

    getNews = (props) => {
        let data = [
            {
                id: "article1",
                name: "Premier article",
                description: "Ceci est le premier article",
                image: empireImg
            },
            {
                id: "article2",
                name: "Second article",
                description: "Ceci est le second article",
                image: rebelImg
            }
        ];

        return data;
    }

    handleSelectionChange = (newValue) => {
        this.setState({
            selected: newValue
        })
    }

    render = () => (
        <div className="ArticleDisplayer-Body">
            <h2 className="ArticleDisplayer-Title">News</h2>
            {this.state.news.map((news) => (
                <SingleArticleReader key={uid(news)} title={news.name} img={news.image} text={news.description}/>
            ))}
        </div>
    )
};

// https://newsapi.org/
// cdb3f17570d14116aeb1cfd9e53171b1
// https://newsapi.org/docs/get-started

// Olicpg