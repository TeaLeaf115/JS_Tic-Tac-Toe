const WIDTH = 300;
const HEIGHT = 300;
setSize(WIDTH, HEIGHT);

var turn = 0;

const POS_TO_PX = new Map([
    [0, 12.5],
    [1,112.5],
    [2,212.5]
    ]);
    
    
var board = new Grid(3, 3);

function start()
{
	drawGame();
    mouseClickMethod(onClick);
}

function drawGame()
{
    var line1 = new Line(100, 0, 100, 400);
	var line2 = new Line(200, 0, 200, 400);
	var line3 = new Line(0, 100, 400, 100);
	var line4 = new Line(0, 200, 400, 200);

	add(line1);
	add(line2);
	add(line3);
	add(line4);
}

function getTurnVal()
{
    return turn % 2;
}

function onClick(m)
{
    var mX = m.getX();
    var mY = m.getY();
    
    const IN_TOP_ROW = mY < 100;
    const IN_MID_ROW = mY >= 100 && mY <= 200;
    const IN_BOT_ROW = mY > 200;
    
    const IN_LEFT_COL mX < 100;
    const IN_MID_COL = mX >= 100 && mY <= 200;
    const IN_RIGHT_COL mX > 200;
    
    
    
}


// This draws an X at a certain location on the screen
function drawX(row, col)
{
    var x = new WebImage("https://github.com/TeaLeaf115/JS_Tic-Tac-Toe/blob/main/JS-TTT_X.png?raw=true");
    
    x.setPosition(POS_TO_PX.get(row), POS_TO_PX.get(col));
    
    x.setSize(75, 75);
    
    add(x);
    
    board.set(row, col, 1);
}

// This draws an O at a certain location on the screen
function drawO(row, col)
{
    var o = new WebImage("https://github.com/TeaLeaf115/JS_Tic-Tac-Toe/blob/main/JS-TTT_O.png?raw=true");
    
    o.setPosition(POS_TO_PX.get(row), POS_TO_PX.get(col));
    
    o.setSize(75, 75);
    
    add(o);
    
    board.set(row, col, 2);
}


function xoPlacement(e)
{
    
}
