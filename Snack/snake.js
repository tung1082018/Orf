class snake{
	constructor(game) {
		this.game = game;
		this.x = 0;
		this.y = 0;
		this.grid = 20;
		this.dx = this.grid;
		this.dy = 0;
		this.cell = [];
		this.maxCells = 2;
	}
	
	update() {
		this.x += this.dx;
		this.y += this.dy;
		
		this.cell.unshift({x: this.x, y: this.y});
		console.log(this.cell);
		
		this.catchHandle();
	}
	draw() {
		this.game.context.fillStyle = 'white';
		this.game.context.fillRect(this.x, this.y. this.grid);
	}
	catchHandle() {
		document.addEventListener('keydown',(e) =>{
			if(e.which == 37){
				this.dx = -this.grid;
				this.dy = 0;
			}
			
			else if(e.which == 38){
				this.dx = 0;
				this.dy = -this.grid;
			}
			
			else if(e.which == 39) {
				this.dx = this.grid;
				this.dy = 0;
			}
			
			else if(e.which == 39) {
				this.dx = 0;
				this.dy = this.grid;
			}
		});
	}