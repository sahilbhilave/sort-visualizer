
import {selectionSort} from "./Algorithms/Selectionsort";
import {bubbleSort} from "./Algorithms/Bubblesort";
import {insertionSort} from "./Algorithms/Insertionsort";

// const sortingView = document.querySelector("#sorting-view");



var numArray = [];
var arrayMaxValue = 100;
var arraySize = 50;
var sortingContainer = document.getElementById("sorting-view");
var alogoSelect = document.getElementById("algo");
var delayInMs = 50;
var inputSize = document.getElementById("input");
var delayInput = document.getElementById("speed");
// var orderSelect = document.getElementById("order-options");


export function setDelay() {
    var delayMsg = document.getElementById("speed");
    delayMsg.innerHTML = delayInMs;
}

export function start() {
    setDelay();
    var currentAlgo = alogoSelect.options[alogoSelect.selectedIndex].value;
    if(currentAlgo === "bub") {
        bubbleSort();
    } else if(currentAlgo === "ins") {
        insertionSort();
    } else if(currentAlgo === "sel") {
        selectionSort();
    } else if(currentAlgo === "qui") {
        
    }
}





export function changeDelayTime() {
    delayInMs = delayInput.value;
    setDelay();
}


export function createBars(arraySize) {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    numArray = Array.from({length: arraySize}, () => Math.floor(Math.random() * (arrayMaxValue+1)));
    sortingContainer.innerHTML = "";
    //var currentOrder = orderSelect.options[orderSelect.selectedIndex].value;
    var currentOrder = "random";
    if(currentOrder === "reversed") {
        numArray = Array.from(numArray).sort((a, b) => b - a);
    } else if(currentOrder === "sorted") {
        numArray = Array.from(numArray).sort((a, b) => a - b);
    }
    for(var i=0; i<numArray.length; i++) {
        var bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = (windowHeight * numArray[i] * 0.006) + 'px';
        bar.style.width = (((windowWidth * 0.80)/arraySize)-1) + 'px';
        var barTitle = document.createElement("label");
        barTitle.classList.add("bar-title");
        barTitle.innerHTML = numArray[i];
        bar.appendChild(barTitle);
        sortingContainer.appendChild(bar);
    }
    // console.log(bar.style.height);
}

export function reset() {
    createBars(arraySize);
}

export function changeSort() {
    reset();
}

export function changeInputSize() {
    arraySize = inputSize.value;
    reset();
}


export default function Host(){
    
}







