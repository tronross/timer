// 'use strict';

const times = process.argv.slice(2);
let alarms = [];


const alarmTimes = function(times) {
  for (time of times) {
    let alarm = (parseInt(time, 10) * 1000);
    alarms.push(alarm);
  }
};

const timer = function(times) {
  alarmTimes(times);

  alarms.forEach(alarm => setTimeout(() => {
    process.stdout.write('\x07');
  }, alarm));
}


timer(times);

// console.log(alarms);








// alarms.forEach(alarm => setTimeout(() => {
//   console.log(alarm);
// }, alarm));


// process.stdout.write('\x07');

// for (let j = 0; j < process.argv.length; j++) {
//     console.log(j + ' -> ' + (process.argv[j]));
// }