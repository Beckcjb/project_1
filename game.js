var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400,400, {backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

// Build Background

var stage = new PIXI.Container();

var texture = PIXI.Texture.fromImage("background.png");

var sprite = new PIXI.Sprite(texture);

sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

sprite.position.x = 200;
sprite.position.y = 200;

stage.addChild(sprite);

// Build Backdrop

var buildings = new PIXI.Container();

var building_tall = new PIXI.Sprite(PIXI.Texture.fromImage("buildingtall.png"));
var building_tallmed = new PIXI.Sprite(PIXI.Texture.fromImage("buildingtallmed.png"));
var building_tallmed2 = new PIXI.Sprite(PIXI.Texture.fromImage("buildingtallmed.png"));
var building_med = new PIXI.Sprite(PIXI.Texture.fromImage("buildingmed.png"));
var building_med2 = new PIXI.Sprite(PIXI.Texture.fromImage("buildingmed.png"));
var building_small = new PIXI.Sprite(PIXI.Texture.fromImage("buildingsmall.png"));
var building_small2 = new PIXI.Sprite(PIXI.Texture.fromImage("buildingsmall.png"));

// Add to stage
stage.addChild(buildings);

// Add child ojbects
buildings.addChild(building_tall);
buildings.addChild(building_tallmed);
buildings.addChild(building_med);
buildings.addChild(building_small);
buildings.addChild(building_tallmed2);
buildings.addChild(building_med2);
buildings.addChild(building_small2);

// Set x position
building_tall.position.x = 0;
building_med.position.x = 64;
building_tallmed.position.x = 128;
building_small.position.x = 192;
building_tallmed2.position.x = 256;
building_med2.position.x = 320;
building_small2.position.x = 384;



// Set y position
building_tall.position.y = 78;
building_med.position.y = 138;
building_tallmed.position.y = 124;
building_small.position.y = 190;
building_tallmed2.position.y = 124;
building_med2.position.y = 138;
building_small2.position.y = 190;

// add finish

var finish = new PIXI.Sprite(PIXI.Texture.fromImage("finish.png"));

stage.addChild(finish);

finish.position.x = 340;
finish.position.y = 340;


// Add Player

var player = new PIXI.Sprite(PIXI.Texture.fromImage("player.png"));

stage.addChild(player);

player.position.x = 0;
player.position.y = 340;


document.addEventListener("keydown", onKeyDown), false;

function onKeyDown(key) {
	
    if (key.keyCode === 87 ) {
        // If the W key is pressed, move the player up.
        if (player.position.y != 0) {
            player.position.y -= 5;
			
        }
    }
  

    if (key.keyCode === 83 ) {
        // If the S key  is pressed, move the player down.
        if (player.position.y != 368) {
            player.position.y += 5;
        }
		
	}

    if (key.keyCode === 65 ) {
        // If the A key is pressed, move the player to the left.
            player.position.x -= 5;
        
    }
  
    if (key.keyCode === 68 ) {
        // If the D key is pressed, move the player to the right.
        if (player.position.x != 368) {
            player.position.x += 5;
        }
    }
}


 
 var totalBox = 15; 
 
 // create an array to store a reference to the boxes
 var boxArray = []; for (var i = 0; i < totalBox; i++) { 

 // create a new Texture that uses the image name that we just generated as its source 
 var boxTexture = PIXI.Texture.fromImage("box.png"); 
 
 // create a sprite that uses our new sprite texture 
 var box = new PIXI.Sprite(boxTexture); 
 
 // set the anchor point so the boxes texture is centred on the sprite 
 box.anchor.x = box.anchor.y = 0.5; 
 
 // set a random scale for the boxes - no point them all being the same size! 
 box.scale.x = box.scale.y = 0.8 + Math.random() * 0.3; 
 
 // finally let’s set the boxes to be a random position.
 box.position.x = Math.random() * 400; box.position.y = Math.random() * 400;
 
 // time to add
 stage.addChild(box);
 
  // create a random direction 
  box.direction = Math.random() * Math.PI * 2;
  
  // modify the direction of the boxes over time 
  box.turningSpeed = Math.random() - 0.8; 
  
  // create a random speed for the boxes between 0 - 2 
  box.speed = 2 + Math.random() * 2; 
  
  // push the boxes into the Array
  boxArray.push(box); }
  
   // create a bounding box for the little box 
   var boxBoundsPadding = 400; 
   var boxBounds = new PIXI.Rectangle(-boxBoundsPadding, -boxBoundsPadding, 400 + boxBoundsPadding * 2, 400 + boxBoundsPadding * 2);
	var tick = 0; 
	requestAnimationFrame(animate); 
	function animate() {
		 // iterate through the box and update the position for (var i = 0; i < boxArray.length; i++)  
		var box = boxArray[i]; 
		 box.direction += box.turningSpeed * 0.01; box.position.x += Math.sin(box.direction) * box.speed; box.position.y += Math.cos(box.direction) * box.speed; box.rotation = -box.direction - Math.PI/2; 
		 // wrap the box by testing there bounds.. 
		 if(box.position.x < boxBounds.x)box.position.x += boxBounds.width; 
		 else if(box.position.x > boxBounds.x + boxBounds.width)box.position.x -= boxBounds.width 
		 if(box.position.y < boxBounds.y)box.position.y += boxBounds.height; 
		 else if(box.position.y > boxBounds.y + boxBounds.height)box.position.y -= boxBounds.height 

	// time to render the state! 
	renderer.render(stage);
	// request another animation frame 
	requestAnimationFrame( animate ); }

	animate();
function finishBoxSpawn() {
    // Spawns the target at a random position on our stage
  
    // Create two random points on our stage
    var randomX = Math.floor((Math.random() * 10) + 0);
    var randomY = Math.floor((Math.random() * 10) + 0);
  
    // Set the position of our target
    finish.position.x = 64 * randomX;
    finish.position.y = 32 * randomY;
}
		finishBoxSpawn();
		animate();
function checkPosition() {
    // If the player and target are at the same position, spawn the target in another position
    if (finish.position.x === player.position.x && finish.position.y === player.position.y) {
        finishBoxSpawn();
}}
	animate();
	

	
   function animate(){
		requestAnimationFrame(animate);
		checkPosition();
		renderer.render(stage);}
	animate();