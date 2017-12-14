//var code = "-/1/:var -/2/:draw -/3/:= -/1/:function-/0/:(-/5/:value-/0/:) {\n    -/1/:return -/0/:value -/3/:+ -/4/:5-/0/:;<br>};";
var code = document.getElementById("txt");

function styleList(s, l, g) {
	console.log(s, "\n");
	var nl = (s.search("\n") !== -1) ? "\n" : "\\n";
	for(var k in s.split(nl)) {
		s = s.replace(nl, "<br>");
	}
	for(k in s.split(" ")) {
		s = s.replace(" ", "&nbsp;");
	}
	
	var stringList = s.split("-/");
	var elements = [];
	var elementsList = [];
	stringList.splice(0, 1);
	for(var i = 0; i < stringList.length; i++) {
		stringList[i] = stringList[i].replace(" ", "&nbsp;").replace(nl, "<br>");
		elements.push(stringList[i].split("/-"));
		elements[i][0] = parseInt(elements[i][0]);
		elementsList.push({group: parseInt(elements[i][0]), text: elements[i][1], index: i});
		var el = (l[elementsList[i].group].tag !== undefined) ? document.createElement(l[elementsList[i].group].tag) : document.createElement("span");
		el.className = "group" + elementsList[i].group;
		var cg = document.getElementsByClassName("group" + elementsList[i].group);
		elementsList[i].text = elementsList[i].text.replace(nl, "<br>").replace(" ", "&nbsp;");
		el.innerHTML = elementsList[i].text;
		el.style.color = g.color || "black";
		el.style.backgroundColor = g.fill || "white";
		el.style.border = ("solid " + g.stroke) || "transparent";
		if(g.style == "bold") {
			el.style.fontWeight = "bold";
		}else if(g.style == "italic") {
			el.style.fontStyle = "italic";
		}else{
			el.style.textDecoration = g.style || "none";
		}
		el.style.fontFamily = g.font || undefined;
		el.style.fontSize = (g.fsize + "px") || undefined;
		el.style.position = g.postype || "relative";
		el.style.left = (g.x + "px") || (g.pos[0] + "px") || undefined;
		el.style.top = (g.y + "px") || (g.pos[1] + "px") || undefined;
		el.style.width = (g.w + "px") || (g.size[0] + "px") || undefined;
		el.style.height = (g.h + "px") || (g.size[1] + "px") || undefined;
		document.body.appendChild(el);
		for(var k = 0; k < cg.length; k++) {
			var v = cg[k];
			v.style.color = l[elementsList[i].group].color || el.style.color;
			v.style.backgroundColor = l[elementsList[i].group].fill || el.style.backgroundColor;
			v.style.border = ("solid " + l[elementsList[i].group].stroke) || el.style.border;
			if(l[elementsList[i].group].style == "bold") {
				v.style.fontWeight = "bold";
			}else if(l[elementsList[i].group].style == "italic") {
				v.style.fontStyle = "italic";
			}else{
				v.style.textDecoration = l[elementsList[i].group].style || el.style.textDecoration;
			}
			v.style.fontFamily = l[elementsList[i].group].font || el.style.fontFamily;
			v.style.fontSize = (l[elementsList[i].group].fsize + "px") || el.style.fontSize;
			v.style.position = l[elementsList[i].group].postype || el.style.position;
			v.style.left = (l[elementsList[i].group].x + "px") || (l[elementsList[i].group].pos[0] + "px") || (el.style.left + "px");
			v.style.top = (l[elementsList[i].group].y + "px") || (l[elementsList[i].group].pos[1] + "px") || (el.style.top + "px");
			v.style.width = (l[elementsList[i].group].w + "px") || (l[elementsList[i].group].size[0] + "px") || (el.style.width + "px");
			v.style.height = (l[elementsList[i].group].h + "px") || (l[elementsList[i].group].size[1] + "px") || (el.style.height + "px");
		}
	}
	/*console.log("Original text:\n", stringList);
	console.log("\nElements object list:\n", elementsList);
	console.log("\nElements array list:\n", elements);
	console.log("\nElements group properties:\n", l);
	console.log("\n", s.replace(" ", "&nbsp;"));*/
	console.log(s);
}

styleList(code.textContent, [
		{},
		{color: "rgb(50, 50, 255)"},
		{color: "rgb(255, 75, 0)"},
		{color: "rgb(0, 0, 175)"},
		{color: "rgb(100, 150, 255)"},
		{color: "grey"}
	], {
		font: "Monaco, consolas"
	}
);