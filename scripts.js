//zoom the window
var body = document.querySelector('body')
var room = document.querySelector('.room')

window.addEventListener('click', zoom)

function zoom() {
	
	if (body.id == 'zoom'){
		body.id = 'tidy'
	} else if (body.id == 'tidy') {
		body.id = ''
	} else {
		body.id = 'zoom'
	}

}