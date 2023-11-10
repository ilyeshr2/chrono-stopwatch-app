const h=document.querySelector('#hours')
const m=document.querySelector('#minuts')
const s=document.querySelector('#seconds')
const ms=document.querySelector('#ms')
const start=document.querySelector('#start')
const pause=document.querySelector('#pause')
const reset=document.querySelector('#reset')

start.addEventListener('click',startChrono)

function startChrono(){
    msTimeFunction() 
}

let MsObject={
    count:0,
    rotations:0
}
let sObject={
    count:0,
    rotations:0
}

let mObject={
    count:0,
    rotations:0
}
let hObject={
    count:0,
    rotations:0
}




function msTimeFunction(){
    let msInterval=setInterval(msTimeRotation,10)
    function msTimeRotation(){
    MsObject.count++
    ms.innerText=`.${MsObject.count}`
    //console.log(MsObject.count)
    if(MsObject.count==100){
        MsObject.rotations++
        MsObject.count=0
        sTimeFunction()
        return
        //console.log(MsObject.rotations)
    }}
}

function sTimeFunction(){

    //console.log(sObject.count)
    if(sObject.count==60){
        sObject.rotations++
        sObject.count=0
        mTimeFunction()
        return
    }
    sObject.count++
    s.innerText=`.${sObject.count}`
}
function mTimeFunction(){

    //console.log(sObject.count)
    if(mObject.count==60){
        mObject.rotations++
        mObject.count=0
        hTimeFunction()
    }
    mObject.count++
    m.innerText=`.${mObject.count}`
}
function hTimeFunction(){
    //console.log(sObject.count)
    if(hObject.count==24){
        hObject.rotations++
        hObject.count=0
        //mTimeFunction()
    }
    hObject.count++
    h.innerText=`.${hObject.count}`
}

