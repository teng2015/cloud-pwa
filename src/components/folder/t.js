let time = "2017-03-20 18:11:40";

let oldDate = new Date(time);
let newDate = new Date();

let delta = newDate.getTime() - oldDate.getTime();
console.log(delta/60/60/1000);
