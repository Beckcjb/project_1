		// JavaScript code goes here
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");

		var x = 400/2;
		var y = 400-30;
		var dx = 2;
		var dy = -2;
		var carHeight = 10;
		var carWidth = 75;
		var carY = (400-carWidth)/2;
		var upPressed = false;
		var downPressed = false;

		document.addEventListener("keydown", keyDownHandler, false);
		document.addEventListener("keyup", keyUpHandler, false);

		function keyDownHandler(e) {
			if(e.keyCode == 38) {
				upPressed = true;
			}
			else if(e.keyCode == 40) {
				downPressed = true;
			}
		}
		function keyUpHandler(e) {
			if(e.keyCode == 38) {
				upPressed = false;
			}
			else if(e.keyCode == 40) {
				downPressed = false;
			}
		}

		function drawCar() {
			ctx.beginPath();
			ctx.rect(carY, 400-carHeight, carWidth, carHeight);
			ctx.fillStyle = "#EE0000";
			ctx.fill();
			ctx.closePath();
		}

		function draw() {				// Draw the car
			ctx.clearRect(0, 0, 400, 400);
			drawCar();
			
			if(upPressed && carY < 400-carHeight) {
				carY += 7;
			}
			else if(downPressed && carY > 0) {
				carY -= 7;
			}
			
			x += dx;
			y += dy;
		}
							  // Redraw car 
		setInterval(draw, 10); // Speed of car