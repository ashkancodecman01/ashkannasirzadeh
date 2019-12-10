var Typer={
	text: null,
	index:0,
	speed:2,
	init: function(){
        Typer.text = 'hello world ...<br>this is ashkan nasirzadeh official website.';
	},
	content:function(){
		return $("#console").html();
	},
	addText:function(){
		var cont=Typer.content();
        Typer.index += Typer.speed;
		var text=Typer.text.substring(0,Typer.index);
		$("#console").html(text);
		window.scrollBy(0,50);
	}
}


Typer.speed=1;
Typer.init();

var timer = setInterval("t();", 80);
function t() {
	Typer.addText();
	if (Typer.index == Typer.text.length) {
		clearInterval(timer);
	}
}
