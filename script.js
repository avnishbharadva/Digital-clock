var date = document.querySelector('#date');
var day = document.querySelector('.day');
var month = document.querySelector('.month');
var year = document.querySelector('.year');
var time = document.querySelector('#time');

setInterval(ddate,1000);

function ddate(){
var d = new Date();

day.innerHTML = d.getDate();
month.innerHTML = d.getMonth()+1;
year.innerHTML = d.getFullYear();
}

setInterval(dtime,1000);

function dtime(){
    t = new Date();
    // time.innerHTML = t.getHours() + " " + t.getMinutes() + " " + t.getSeconds();
    time.innerHTML = t.toLocaleTimeString();
}