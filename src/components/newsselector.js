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

    handleChanges = (ev) => {
        ev.preventDefault();
        let newValue = ev.target.newValue;
        console.log(this.props);
        this.setState({
            selectedNewsSource: newValue
        },
            this.props.fire(newValue)
        );
    }

    static getDerivedStateFromProps = (props) =>{
        console.log(props);

        return null;
    }

    render = () => (
        <select value={this.state.selectedNewsSource} onChange={(ev) => {this.handleChanges(ev)}} >
            <option value="" ></option>
            {this.state.sources.map((source) =>(
                <option key={uid(source)} value={source}>{source}</option>
            ))}
        </select>
    )

};