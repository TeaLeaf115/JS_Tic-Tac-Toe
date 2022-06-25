const WIDTH = 400;
const HEIGHT = 400;
setSize(WIDTH, HEIGHT);


function start()
{
	var line1 = new Line(125, 0, 125, 400);
	var line2 = new Line(275, 0, 275, 400);
	var line3 = new Line(0, 125, 400, 125);
	var line4 = new Line(0, 275, 400, 275);

	add(line1);
	add(line2);
	add(line3);
	add(line4);
}
