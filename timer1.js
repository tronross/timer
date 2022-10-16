// Simple Timer : take input as presented to the CLI as arguments (interpreted as time in seconds) and beep after those times have elapsed.

const times = process.argv.slice(2); // Extract pertinent arguments

// alarmTimes: helper function translates input into timer alarms in ms, excluding negative (and non-)numbers.
const alarmTimes = function(times) {
  const alarms = [];
  for (const time of times) {
    const alarm = (parseInt(time, 10) * 1000);
    if (Number.isInteger(alarm) && alarm > 0) {
      alarms.push(alarm);
    }
  }
  return alarms;
};

//timer: implements timer which emits a beep as input timings elapse.
const timer = function(times) {
  const alarms = alarmTimes(times);
  alarms.forEach(alarm => setTimeout(() => {
    process.stdout.write('\x07');
  }, alarm));
};

timer(times);