const WIDTH = 300;
const HEIGHT = 300;
setSize(WIDTH, HEIGHT);

var turn = 0;

var gameOver = false;

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
    
    if (gameOver)
    { println("GAME OVER!!!"); }
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
    { takeTurn(0, 1); }
    
    else if (IN_TOP_ROW && IN_RIGHT_COL)
    { takeTurn(0, 2); }
    
    
    
    else if (IN_MID_ROW && IN_LEFT_COL)
    { takeTurn(1, 0); }
    
    else if (IN_MID_ROW && IN_MID_COL)
    { takeTurn(1, 1); }
    
    else if (IN_MID_ROW && IN_RIGHT_COL)
    { takeTurn(1, 2); }
    
    
    
    else if (IN_BOT_ROW && IN_LEFT_COL)
    { takeTurn(2, 0); }
    
    else if (IN_BOT_ROW && IN_MID_COL)
    { takeTurn(2, 1); }
    
    else if (IN_BOT_ROW && IN_RIGHT_COL)
    { takeTurn(2, 2); }
    
    gameLogic();
    
    if (gameOver)
    { return; }
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
    var x = new WebImage("https://raw.githubusercontent.com/TeaLeaf115/JS_Tic-Tac-Toe/main/images/JS-TTT_X.png");
    
    x.setPosition(POS_TO_PX.get(col), POS_TO_PX.get(row));
    
    x.setSize(75, 75);
    
    add(x);
    
    board.set(row, col, 1);
    print("\n\n\n" + board);
    
    turn++;
}

// This draws an O at a certain location on the screen
function drawO(row, col)
{
    var o = new WebImage("https://raw.githubusercontent.com/TeaLeaf115/JS_Tic-Tac-Toe/main/images/JS-TTT_O.png");
    
    o.setPosition(POS_TO_PX.get(col), POS_TO_PX.get(row));
    
    o.setSize(75, 75);
    
    add(o);
    
    board.set(row, col, 2);
    print("\n\n\n" + board);
    
    turn++;
}

function gameLogic()
{
    var topLeft = board.get(0, 0);
    var topMid = board.get(0, 1);
    var topRight = board.get(0, 2);
    var midLeft = board.get(1, 0);
    var mid = board.get(1, 1);
    var midRight = board.get(1, 2);
    var botLeft = board.get(2, 0);
    var botMid = board.get(2, 1);
    var botRight = board.get(2, 2);
    
    if (topLeft == midLeft && topLeft == botLeft && topLeft != 0)
    {
        winCheck();
    }
    
    else if (topMid == mid && topMid == botMid && topMid != 0)
    {
        winCheck();
    }
    
    else if (topRight == midRight && topRight == botRight && topRight !=0)
    {
        winCheck();
    }
    
    
    
    else if (topLeft == topMid && topLeft == topRight && topLeft != 0)
    {
        winCheck();
    }
    
    else if (midLeft == mid && midLeft == midRight && midLeft != 0)
    {
        winCheck();
    }
    
    else if (botLeft == botMid && botLeft == botRight && botLeft != 0)
    {
        winCheck();
    }
    
    
    
    else if (topLeft == mid && topLeft == botRight && topLeft != 0)
    {
        winCheck();
    }
    
    else if (topRight == mid && topRight == botLeft && topRight != 0)
    {
        winCheck();
    }
    
    else
    {
        for (let i=0; i<3; i++)
        {
            for (let j=0; j<3; j++)
            {
                if (board.get(i, j) == 0)
                { return; }
            }
        }
        
        var drawTxt = new WebImage("https://raw.githubusercontent.com/TeaLeaf115/JS_Tic-Tac-Toe/main/images/JS-TTT_draw.png");
        drawTxt.setPosition(0, 0);
        
        add(drawTxt);
    }
}

function winCheck()
{
    if (getTurnVal() == 1)
    {
        var xWinTxt = new WebImage("https://raw.githubusercontent.com/TeaLeaf115/JS_Tic-Tac-Toe/main/images/JS-TTT_xWin.png");
        xWinTxt.setPosition(0, 0);
        
        clearBoard();
        
        gameOver = true;
        
        add(xWinTxt);
    }
    
    else
    {
        var oWinTxt = new WebImage("https://raw.githubusercontent.com/TeaLeaf115/JS_Tic-Tac-Toe/main/images/JS-TTT_oWin.png");
        oWinTxt.setPosition(0, 0);
        
        clearBoard();
        
        gameOver = true;
        
        add(oWinTxt);
    }
}

function clearBoard()
{
    for (let i=0; i<3; i++)
    {
        for (let j=0; j<3; j++)
        {
            if (board.get(i, j) == 0)
            { board.set(i, j, -1); }
        }
    }
}
