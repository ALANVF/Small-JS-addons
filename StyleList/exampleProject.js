/**
 * In the HTML file:
 * 
 * <!DOCTYPE html>
 * <html>
 *   <head>
 *     <meta charset='utf-8'>
 *     <script src"styleList.js"></script>
 *   </head>
 *   <body>
 *     <!-- we don't want to see the original text btw -->
 *     <div id="text" style="display: none">-/1/-var -/2/-draw -/3/-= -/1/-function-/0/-() {\n</div>
 *     <!-- this puts out: var draw = function() { [new line] -->
 *     <script src="exampleProject.js"></script>
 *   </body>
 * </html>
**/

var code1 = document.getElementById("text");
var code2 = "    -/1/-rect-/0/-(-/2/-100-/0/-, -/2/-100-/0/-, -/2/-50-/0/-, -/2/-50-/0/-);\n};";

styleList(code1, [
		{}, //if left blank, it will default to black text
		{color: "rgb(0, 0, 0)", style: "bold"},
		{color: "rgb(50, 0, 255)", stroke: "1px red"},
		{color: "grey", fill: "rgb(255, 255, 150)"}
	], //group properties
	{font: "Monaco, consolas"} //global properties
);

styleList(code2, [
		{},
		{color: "rgb(0, 0, 255)", style: "italic"},
		{color: "rgb(255, 75, 0)", style: "underline"}
	],
	{font: "Monaco, consolas", fsize: 30}
);
