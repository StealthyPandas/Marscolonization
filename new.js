var arr,sc,sz;
var player1turn;
var gameover;
var count;
var winner;
var button;
var playerinfo;
var playercount=1;
var input;
var greeting;
var imageclicked;
var color;
var playerno;
function setup() 
{
	sz =windowWidth*0.4;
	sc = sz/3;
	createCanvas(windowWidth,windowHeight);
	reset();			
}

function reset()
{
    arr = [1,2,3,4,5,6,7,8,9];
    count = 0;
    player1turn = true;
    gameover = false;
    playercount=1;
    document.getElementById("change1").innerHTML = '';
    document.getElementById("change2").innerHTML = '';
    document.getElementById("change3").innerHTML = '';
}

function draw() {
    background(251);
    for(i = 0;i < 9; i++)
    {
        fill(51);
        strokeWeight(5);
        stroke('white');
        push();
        translate(((i%3)*sc),(floor((i/3))*sc));
        rect(0,0,sc,sc);
        if(arr[i] == 0)
        {                // Draw O
            ellipse(sc/2, sc/2, sc/2, sc/2);
        }
        else if(arr[i] == -1){              // Draw X
            line(sc/4, sc/4, 3 * (sc/4),3 * (sc/4));
            line(3 * (sc/4), (sc/4), (sc/4), 3 * (sc/4));
        }
        pop();
    }
    if(gameover)
    {                           // If game over
        if(count===9){          // Check if draw, then print 'DRAW'
            textAlign(CENTER, CENTER);
            textSize(64);
            fill(255);
            stroke(51);
            strokeWeight(3);
            text("Draw!", width/2, height/2);
            return;
        }
    // Draw line joining the winning streak
        x1 = (winner[0]%3)*sc + sc/2;
        y1 = (floor(winner[0]/3))*sc + sc/2;
        x2 = (winner[1]%3)*sc + sc/2;
        y2 = (floor(winner[1]/3))*sc + sc/2;
        strokeWeight(10);
        line(x1, y1, x2, y2);
    }
}
function mouseReleased(){	// Take user input at a cell
    if(gameover){   return; }	// If game over take no input
    mx = mouseX;
    my = mouseY;
    if(mx>sz || my>sz ){   return; }	// If clicked outside board do nothing
    x = floor(mx/sc);
    y = floor(my/sc);
    ind = (y*3) + x;
    if(arr[ind]<=0){return;}		// If clicked box already has symbol do nothing
    arr[ind] = (player1turn)?-1:0;	// Else, put symbol
    player1turn = !player1turn;
    count++;
    checkwon();
}

function checkwon(){				// Check if in current board state player has won
	if(count === 9) {			// If 9 turns are over, and no one has won, game is draw
		gameover= true;
	}
	for(i = 0;i < 3;i++)			// Check columns
		if(arr[i] == (arr[i+3]) && arr[i] == (arr[i+6])){
			gameover = true;
			winner = [i,i+6];	// Store first and last coordinate of winning boxes
		}
	for(i = 0;i<9;i+=3)			// Check rows
		if(arr[i] == (arr[i+1]) && arr[i] == (arr[i+2])){
			gameover = true;
			winner = [i,i+2];	// Store first and last coordinate of winning boxes
		}
	for(i = 0,b = 4;i < 3;i += 2,b -= 2)	// Check Diagonals
		if(arr[i] === (arr[i+b]) && arr[i] === (arr[i+b+b])){
			gameover = true;
			winner = [i,i+b+b];	// Store first and last coordinate of winning boxes
		}
}
function windowResized() 
{ 
    resizeCanvas(windowWidth, windowHeight); 
    setup();
} 
function myfunction(image)
{var name;
 if(image==3)
    {
    name='AI';
    greet(name);
    playercount++;
    playerinfo='AI';}
 if(playercount<=2)
  {
  name=prompt('Player '+playercount+': Enter Your Name');
  if(name!=null)
   {greet(name);}
  else
   {alert('Please enter your name!');}
  }
  else
  {alert("Only 2 players are allowed !");}
}

function image1()
{imageclicked=1;myfunction(1);}
function image2()
{imageclicked=2;myfunction(2);}
function image3()
{imageclicked=3;myfunction(3);}



function greet(name) 
{ 
  if(imageclicked==1)
  {document.getElementById("change1").innerHTML = '  Player '+ playercount+': '+ name;} 

  else if(imageclicked==2)
  {document.getElementById("change2").innerHTML = '  Player '+ playercount+': '+ name;} 

  else if(imageclicked==3)
  {document.getElementById("change3").innerHTML = '  Player '+ playercount+': AI';} 
 
 if(playercount==2)
   {alert('PLAY!');}
   playercount++;
   input.value('');
}
//fucntion to changeCHANGE backgroundColor
function changecolor()
{color=document.getElementById('color').value;
document.getElementById('sidebar').style.backgroundColor=color;
}