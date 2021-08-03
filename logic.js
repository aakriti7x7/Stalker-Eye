
let pupils = document.getElementsByClassName("pupil")
let pupilArr = Array.from(pupils);

let pupilStartPoint = -75;
let PupilRange = 150;

let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPostn = 0;
let fractionX = 0;


let mouseYEndPoint = window.innerHeight;
let currentYPostn = 0;
let fractionY = 0;



let shy = document.getElementsByClassName("shine")
let shyArr = Array.from(shy);

let shyStartPoint = -10;
let shyRange = 50;



let moo = document.getElementsByClassName("mouth")
let mooArr = Array.from(moo);

let mooStartPoint = -10;
let mooRange = 50;


const mouseMove = (event) => {
    //console.log(`x value = ${event.clientX} & y value = ${event.clientY}`);
    currentXPostn = event.clientX;
    fractionX = currentXPostn/mouseXEndPoint;

    currentYPostn = event.clientY;
    fractionY = currentYPostn/mouseYEndPoint;
    
    let pupilXCurrPostn = pupilStartPoint + (fractionX*PupilRange);
    let pupilYCurrPostn = pupilStartPoint + (fractionY*PupilRange);

    pupilArr.forEach((currPupil) => {

        currPupil.style.transform = `translate(${pupilXCurrPostn}px  , ${pupilYCurrPostn}px)`;

    })

    let shyXCurrPostn = shyStartPoint + (fractionX*shyRange);
    let shyYCurrPostn = shyStartPoint + (fractionY*shyRange);

    shyArr.forEach((currshy) => {

        currshy.style.transform = `translate(${shyXCurrPostn}px  , ${shyYCurrPostn}px)`;

    })


    let mooXCurrPostn = mooStartPoint + (fractionX*mooRange);

    mooArr.forEach((currmoo) => {

        currmoo.style.transform = `translateX(${mooXCurrPostn}px)`;
        currmoo.style.width= `translateX(${fractionX*mooRange}px)`

    })

}

const resize = (event) => {

    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;

}

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', resize);