import React from "react";
import {start,reset,changeInputSize,changeDelayTime,createBars,changeSort} from './Host';

export default function Header() {
    sessionStorage.setItem("delayInMs", 50);
    return (
        <>
            <div className = "header">
                <h1>Sorting Visualizer</h1>
                <div className = "options">

                    <div className="selector">
                    <label for="algo">Algorithm : </label>
                    <select name="algo" id="algo" onchange={changeSort}>
                        <option value="sel">Selection Sort</option>
                        <option value="ins">Insertion Sort</option>
                        <option value="bub">Bubble Sort</option>
                    </select>
                    </div>

                    <div className="slider">
                    <p>Input Size</p>
                    <input type="range" id="input" onChange={changeInputSize}  min="1" max="100" ></input>
                    </div>

                    <div className="slider">
                    <p>Execution Speed</p>
                    <input type="range" id="speed"  onChange={changeDelayTime}   min="1" max="100" ></input>
                    </div>
                </div>

                <div className = "buttons">
                    <button id = "start"  onClick={start} >Start</button>
                    <button id = "reset"  onClick={reset} >Reset</button>
                </div>
            </div>
            
            <div id="sorting-view" class="section"></div>
            </>
            )
}



createBars(50);