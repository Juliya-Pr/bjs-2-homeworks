class AlarmClock {
  constructor(alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, action, id) {
		if(!id) {
			throw new Error('Параметр id не передан');
		}

		if(this.alarmCollection.some(alarm => alarm.id === id)) {
			console.error('Будильник уже существует');
			return;
		}

		this.alarmCollection.push({id: id, time: time, callback: action});
  }

  removeClock(id) {
    let arrBeforeRemove = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
    let arrAfterRemove = this.alarmCollection.length;

    return arrBeforeRemove > arrAfterRemove;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    function checkClock(alarm) {
      if(alarm.time === this.getCurrentFormattedTime()) {
        alarm.callback();
      }
    }
    let checkClockBind = checkClock.bind(this);

    if(!this.timerId) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(alarm => checkClockBind(alarm));
      }, 1000);
    }
  }

  stop() {
    if(this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(alarm => {
      console.log(`Будильник ${alarm.id} заведен на ${alarm.time}`);
    })
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
