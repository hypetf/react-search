import React, { useState } from "react";
import lensIco from './assets/images/search24.png';

function Search() {
    const [results, setResults] = useState([]);
    const [method, setMethod] = useState(false);
    const [err, setErr] = useState([]);
    const users = [
        {
            "query": "Username",
            "age": 23
        },
        {
            "query": "Username123",
            "age": 23
        },
        {
            "query": "Hype",
            "age": 20
        },
        {
            "query": "Dude",
            "age": 25
        }
    ];

    const search = (str, arr) => {
        setResults([]);
        var inputBox = document.getElementById('inputBox');
        let temp = [];
        if(!(arr instanceof Array) || arr.length < 1) {
            let curr = err;
            let str = "Please provide a valid array of objects in the code.";
            if(!err.includes(str)) curr.push(str);
            return setErr(curr);
        }
        else
            setErr([]);
        
        if(str.length > 0) {
            arr.forEach(u => {
                if(method === true) {
                    if(u.query.toLowerCase().substring(0, str.toLowerCase().length) === str)
                        temp.push(u);
                }
                else {
                    if(u.query.toLowerCase().includes(str.toLowerCase()))
                    temp.push(u);
                }                    
            });
            if(temp.length > 0) {
                setResults(temp);
                inputBox.style.borderRadius = "1em 1em 0 0";
                inputBox.style.borderBottom = "1px solid rgba(0,0,0,.2)";
            }
            else {
                setResults([]);
                inputBox.style.borderRadius = "1em";
            }
        }
        else {
            inputBox.style.borderRadius = "1em";
        }
    }

    function toggleMethod() {
        let curr = method;
        setMethod(!curr);
        var inputSearch = document.getElementById('inputSearch');
        if(inputSearch)
            inputSearch.value = "";
        search("", users);
    }

    return (
        <div className="home bg-dark flex-col h-center v-center">
            <h1 id="title">Search Bar created with React</h1>
            <div id="arrUsed">                
                const users = [<br/>
                    &#123;<br/>
                    &emsp;"username": "Username",<br/>
                    &emsp;"age": 23<br/>
                    &#125;,<br/>
                    &#123;<br/>
                    &emsp;"username": "Hype",<br/>
                    &emsp;"age": 20<br/>
                    &#125;,<br/>
                    &#123;<br/>
                    &emsp;"username": "Dude",<br/>
                    &emsp;"age": 25<br/>
                    &#125;,<br/>
                ];
            </div>

{/* METHODS SELECTION & EVENTUAL ERRORS*/}
            <div id="methodSelection">
                <h2>Methods</h2>
                <div>
                    <label htmlFor="includesMethod">Includes method</label>
                    <input
                        id="includesMethod"
                        type="checkbox"
                        checked={!method}
                        onChange={toggleMethod}
                    />
                </div>
                <div>
                    <label htmlFor="substrMethod">Substring method</label>
                    <input
                        id="substrMethod"
                        type="checkbox"
                        checked={method}
                        onChange={toggleMethod}
                    />
                </div>
                <div id="errs">
                    {
                        err.length > 0 ?
                        err.map((e, key) => {
                            return <p key={key}>{e}</p>
                        })
                        : null
                    }
                </div>
            </div>

{/* SEARCH BAR */}
            <div className="search__box flex-row" id="inputBox">
                <img id="search-ico" src={lensIco} alt="lens-ico" />
                <input
                    autoComplete="off"
                    id="inputSearch"
                    type="text"
                    maxLength={20}
                    placeholder="Search..."
                    onChange={e => search(e.target.value, users)}
                />

{/* SEARCH RESULT */}
                {
                results.length > 0 ?
                    <div className="search__result" id="outputBox">
                        <p id="indexes">{results.length} Result{results.length > 1 ? 's' : null}</p>
                        {
                            results.map((res, key) => {
                                return(
                                    <div className="res flex-col" key={key}>
                                        <h1>{res.query}</h1>
                                        <p>Age: {res.age}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default Search;