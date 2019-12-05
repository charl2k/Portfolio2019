function article_read(url){
	document.getElementById("articleFrame").src=url;
	document.getElementById("copy_button").href=url;
	document.getElementById("copy_button2").href=url;
	document.getElementById('load').classList.remove('invisible_article');
	document.getElementById('load').classList.add('visible_article');
	document.getElementById('article').classList.remove('invisible_article');
	document.getElementById('article').classList.add('visible_article');
	document.getElementById('article_back').classList.remove('close');
	preventScroll.enable();
	return false;
}

function article_onload(){
	document.getElementById('load').classList.remove('visible_article');
	document.getElementById('load').classList.add('invisible_article');
}

function article_invisible(){
	document.getElementById('article').classList.remove('visible_article');
	document.getElementById('article').classList.add('invisible_article');
	document.getElementById('article_back').classList.add('close');
	document.getElementById("articleFrame").src='none.html';
	preventScroll.disable();
	return false;
}

function close_nav(){
	document.getElementById('nav_window').classList.toggle('close');
	document.getElementById('nav_back').classList.toggle('close');
}

const sweetScroll = new SweetScroll();

var preventScroll={
	x:0,
	y:0,
	setPos(x=window.pageXOffset,y=window.pageYOffset){
		this.x=x;
		this.y=y;
	},
	handleEvent(){
		window.scrollTo(this.x,this.y);
	},
	enable(){
		this.setPos();
		window.addEventListener("scroll",this);
	},
	disable(){
		window.removeEventListener("scroll",this);
	}
};