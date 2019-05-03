import React from 'react';
import NewsSelector from './newsselector'
import logo from '../logo.svg';
import "./newsheader.css";


const NewsHeader = () => {
    const imgSize = "200 em";

    return (
        <header className="NewsHeader-Header">
            <table>
                <tr>
                    <td>
                        <img src={logo} alt="logo" width={imgSize} height={imgSize}/>
                    </td>
                    <td>
                        <h1 className="NewsHeader-Title">Beta News</h1>
                        <NewsSelector />
                    </td>
                    <td>
                        
                    </td>
                </tr>
            </table>
        </header>
    );

};

export default NewsHeader;