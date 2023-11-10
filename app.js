const h = document.querySelector('#hours');
const m = document.querySelector('#minutes');
const s = document.querySelector('#seconds');
const ms = document.querySelector('#milliseconds');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

let msInterval;
let flag =false;
let MsObject = { count: 0};
let sObject = { count: 0};
let mObject = { count: 0};
let hObject = { count: 0};

start.addEventListener('click', startChrono);
pause.addEventListener('click', pauseChrono);
reset.addEventListener('click', resetChrono);

function startChrono() {
    if(flag==false){
        msInterval = setInterval(msTimeRotation, 10);
        flag=true
    }
}

function msTimeRotation() {
    MsObject.count++;
    if (MsObject.count === 100) {
        MsObject.count = 0;
        sTimeFunction();
    }
    ms.innerText = `${String(MsObject.count).padStart(2, '0')}`;
}

function sTimeFunction() {
    sObject.count++;
    
    if (sObject.count === 60) {
        sObject.count = 0;
        mTimeFunction();
    }
    s.innerText = `${String(sObject.count).padStart(2, '0')}`;
}

function mTimeFunction() {
    mObject.count++;
    
    if (mObject.count === 60) {
        mObject.count = 0;
        hTimeFunction();
    }
    m.innerText = `${String(mObject.count).padStart(2, '0')}`;
}

function hTimeFunction() {
    hObject.count++;
    
    if (hObject.count === 24) {
        hObject.count = 0;
    }
    h.innerText = `${String(hObject.count).padStart(2, '0')}`;
}

function pauseChrono() {
    if(flag==true){
        clearInterval(msInterval);
        flag=false
    }
}

function resetChrono() {
    clearInterval(msInterval);
    MsObject = { count: 0};
    sObject = { count: 0};
    mObject = { count: 0};
    hObject = { count: 0};
    ms.innerText = '00';
    s.innerText = '00';
    m.innerText = '00';
    h.innerText = '00';
    flag=false
}