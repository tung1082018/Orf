class game{
	constructor(){
		this.canvas = null;
		this.context = null;
		this.init();
		this.loop();
	}
	
	init() {
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.width = 400;
		this.cancvas.height = 400;
		document.body.appendChild(this.canvas);
		this.snake = new snake(this);
	}
	
	loop() {
		this.update();
		this.draw();
		setTimeout(() => this.loop(),60);
	}
	update() {
		this.snake.update();
	}
	draw() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.snake.draw();
	}
}

var g = new game();
