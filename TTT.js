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
board.init(0);

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
    const IN_MID_ROW = mY > 100 && mY < 200;
    const IN_BOT_ROW = mY > 200;
    
    const IN_LEFT_COL = mX < 100;
    const IN_MID_COL = mX > 100 && mX < 200;
    const IN_RIGHT_COL = mX > 200;
    
    
    
    if (IN_TOP_ROW && IN_LEFT_COL)
    { takeTurn(0, 0); }
    
    else if (IN_TOP_ROW && IN_MID_COL)
    { takeTurn(1, 0); }
    
    else if (IN_TOP_ROW && IN_RIGHT_COL)
    { takeTurn(2, 0); }
    
    
    
    else if (IN_MID_ROW && IN_LEFT_COL)
    { takeTurn(0, 1); }
    
    else if (IN_MID_ROW && IN_MID_COL)
    { takeTurn(1, 1); }
    
    else if (IN_MID_ROW && IN_RIGHT_COL)
    { takeTurn(2, 1); }
    
    
    
    else if (IN_BOT_ROW && IN_LEFT_COL)
    { takeTurn(0, 2); }
    
    else if (IN_BOT_ROW && IN_MID_COL)
    { takeTurn(1, 2); }
    
    else if (IN_BOT_ROW && IN_RIGHT_COL)
    { takeTurn(2, 2); }
    
}

function takeTurn(row, col)
{
    if (board.get(row, col) != 0)
    { return; }
    
    if (getTurnVal() == 0)
    { drawX(row, col); }
    
    else
    { drawO(row, col); }
}

// This draws an X at a certain location on the screen
function drawX(row, col)
{
    var x = new WebImage("https://raw.githubusercontent.com/TeaLeaf115/JS_Tic-Tac-Toe/main/JS-TTT_X.png");
    
    x.setPosition(POS_TO_PX.get(row), POS_TO_PX.get(col));
    
    x.setSize(75, 75);
    
    add(x);
    
    board.set(row, col, 1);
    print(board);
    
    turn++;
}

// This draws an O at a certain location on the screen
function drawO(row, col)
{
    var o = new WebImage("https://raw.githubusercontent.com/TeaLeaf115/JS_Tic-Tac-Toe/main/JS-TTT_O.png");
    
    o.setPosition(POS_TO_PX.get(row), POS_TO_PX.get(col));
    
    o.setSize(75, 75);
    
    add(o);
    
    board.set(row, col, 2);
    print(board);
    
    turn++;
}
