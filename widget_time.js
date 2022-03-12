class Clock {
	constructor(template) {
		this.template = template //Создаем класс с 1 атрибутом (будем переделывать)
	}

	render() { //функция render
		let date = new Date() //создаем экземпляр класса даты

		let hours = date.getHours()  //приводим к нормальному виду
		if (hours < 10) {hours = "0" + hours}

		let min = date.getMinutes()
		if (min < 10) {min = "0" + min}

		let sec = date.getSeconds()
		if (sec < 10) {sec = "0" + sec}

		console.log(`${hours}:${min}:${sec}`)
	}

	start() { //создаем функцию для вывода с интервалом 1 секунда
		this.render
		this.timer = setInterval(() => this.render(), 1000)
	}

	stop() {
		clearInterval(this.timer) //функция для остановки таймера
	}
}

let clock = new Clock(1)
clock.start()

// Домашнее задание:
//нужно понять код