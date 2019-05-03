import React from 'react';
import {uid} from "react-uid";

export default class NewsSelector extends React.Component{

    constructor() {
        super();

        this.state = {
            selectedNewsSource: "",
            sources: this.getNewsSources()
        };


    }

    getNewsSources = () => {
        let dummyNewsSources = [
            "Paper1",
            "Paper2",
            "Paper3"
        ];

        return dummyNewsSources;
    }

    render = () => (
        <select value={this.state.selectedNewsSource}>
            <option value="" ></option>
            {this.state.sources.map((source) =>(
                <option key={uid(source)} value={source}>{source}</option>
            ))}
        </select>
    )

};