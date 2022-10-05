const sortingView = document.querySelector("#sorting-view");

var delayInMs = 50;

function bubbleSwap(num1, num2) {
    sortingView.insertBefore(num2, num1);
}

export async function bubbleSort() {
    var delayInput = document.getElementById("speed");
    delayInMs = delayInput.value;
    delayInMs = 100 - delayInMs;
    var bar = document.querySelectorAll(".bar");
    for (var i = 0; i < bar.length - 1; i += 1) {
        for (var j = 0; j < bar.length - i - 1; j++) {
            bar[j].style.backgroundColor = "blue";
            bar[j+1].style.backgroundColor = "blue";
            bar[j].style.transform = "translate(0, -5px)";
            bar[j+1].style.transform = "translate(0, -5px)";
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, delayInMs)
            );

            const num1 = Number(bar[j].childNodes[0].innerHTML);
            const num2= Number(bar[j + 1].childNodes[0].innerHTML);

            if (num1 > num2) {
                bubbleSwap(bar[j], bar[j + 1]);
                bar = document.querySelectorAll(".bar");
            }
            bar[j].style.transform = "translate(0,0)";
            bar[j+1].style.transform = "translate(0,0)";
            bar[j].style.backgroundColor = "#9999ff";
            bar[j + 1].style.backgroundColor = "#9999ff";
        }

        bar[bar.length - i - 1].style.backgroundColor = "green";
    }
    bar[0].style.backgroundColor = "green";
}