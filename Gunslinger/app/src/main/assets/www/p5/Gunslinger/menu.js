function menu(scale, bgColor) {
	bHeight = windowHeight/10;

	this.showMenuCollapsed = function(){
		// Draw the menu Hamburger.
		push();
		fill('#f1f1f1');
		stroke('#f1f1f1');
		strokeWeight(3.5*scale);
		line(windowWidth-10*scale, windowHeight/10/2-12, windowWidth-35*scale, windowHeight/10/2-12);
		line(windowWidth-10*scale, windowHeight/10/2, windowWidth-35*scale, windowHeight/10/2);
		line(windowWidth-10*scale, windowHeight/10/2+12, windowWidth-35*scale, windowHeight/10/2+12);
		pop();
	}

	this.showFullMenu = function() {
		push();
		push();
		fill('#f1f1f1');
		rect(-1, -1, windowWidth+1, windowHeight+1);
		pop();
		push();
		fill('#a0a0a0');
		stroke('#a0a0a0');
		line(-1,windowHeight/10,windowWidth+1, windowHeight/10)
		pop()
		// Draw the add stack.
		push();
		fill('#f1f1f1');
		stroke('#a0a0a0');
		rect(bHeight/5, bHeight/5, bHeight/5+windowWidth/3, bHeight/5*3, 5);
		ellipse(bHeight/2, bHeight/2, bHeight/5*4, bHeight/5*4);
		strokeWeight(4);
		line(bHeight/2, bHeight/2-bHeight/5*0.75, bHeight/2, bHeight/2+bHeight/5*0.75);
		line(bHeight/2-bHeight/5*0.75, bHeight/2, bHeight/2+bHeight/5*0.75, bHeight/2);
		pop();
		// Draw the Menu hamburger
		push();
		fill('#a0a0a0');
		stroke('#a0a0a0');
		strokeWeight(3.5*scale);
		line(windowWidth-10*scale, windowHeight/10/2-12, windowWidth-35*scale, windowHeight/10/2-12);
		line(windowWidth-10*scale, windowHeight/10/2, windowWidth-35*scale, windowHeight/10/2);
		line(windowWidth-10*scale, windowHeight/10/2+12, windowWidth-35*scale, windowHeight/10/2+12);
		pop();





		pop();
	}
}
