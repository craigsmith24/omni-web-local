(function(dom, globals){

	"use strict";

	var image = dom.getElementById('section_1_image');
	if (image) {
		image.addEventListener('mousemove', moveImageBackground);
		image.addEventListener('touchmove', moveImageBackground);
	}

	function moveImageBackground(e) {
		console.log('move', e.pageX, e.pageY);
	}

})(document, window);
