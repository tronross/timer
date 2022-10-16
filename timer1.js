const times = process.argv.slice(2);

const alarmTimes = function(times) {
  let alarms = [];
  for (time of times) {
    let alarm = (parseInt(time, 10) * 1000);
    alarms.push(alarm);
  }
  return alarms;
};

const timer = function(times) {
  
  const alarms = alarmTimes(times);

  alarms.forEach(alarm => setTimeout(() => {
    process.stdout.write('\x07');
  }, alarm));
};


timer(times);