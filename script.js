const para = document.querySelector('#lorem')
const input1 = document.querySelector('#inputWords')
let sbtn1 = document.querySelector('#btn1')
const timer = document.querySelector('#time')
const speed = document.querySelector('#p2')
const accuracy = document.querySelector('#p3')
const sbtn2 = document.querySelector('#btn2')
let text = document.querySelector(".text")
let result = document.querySelector(".result")


let timesecs = 30;
let speed1 = 0;
let accuracy1 = 0;
timer.innerHTML = timesecs;
input1.disabled = true;
sbtn1.addEventListener("click", () => {
    // const parawords = para.innerText.trim().split(" ");
    // const inputValue=input1.value;
    // const inputword = inputValue.split(" ");
    // console.log(inputword);
    input1.disabled = false;
    const timeInterval = setInterval(() => {
        if (timesecs > 0) {
            timesecs -= 1;
            timer.innerHTML = timesecs;
        }

        else {
            //forcefull iteration kiya h clear interval ka
            clearInterval(timeInterval);
            //previously this things were assigned above or wo yha pr aa nhi pa rhi thi values is liye idhar laye
            const parawords = para.innerText.trim().split(" ");
            const inputValue = input1.value;
            const inputword = inputValue.split(" ");
            input1.disabled = true;
            let correctCount = 0;
            //let i = 0;
            inputword.forEach((word, i) => {
                if (word === parawords[i]) {
                    i++;
                    correctCount++;
                }
            });
            if (input1.value != "") {
                speed1 = Math.floor((inputword.length / 30) * 60)
            }
            accuracy1 = (correctCount / inputword.length) * 100;
            accuracy.textContent = `Accuracy : ${accuracy1.toFixed(2)}%`;
            speed.textContent = `Typing Speed : ${speed1}WPM`;
            // console.log(accuracy1)
            text.style.opacity = 0;
            result.style.opacity = 1;
        }
    }, 1000);
})

sbtn2.addEventListener('click', () => {
    text.style.opacity = 1;
    result.style.opacity = 0;
    input1.value = "";
    sbtn1.disabled = false;
    timesecs = 30;
});