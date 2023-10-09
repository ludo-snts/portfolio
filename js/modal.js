function openModal(modal) {
  // Note: fixed elements will also need the margin 
  // adjustment (like a fixed header, if you have one).
  var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  document.body.style.margin = '0px ' + scrollBarWidth + 'px 0px 0px';
  document.body.style.overflow = 'hidden';
  modal.style.display = 'block';
};

function closeModal(modal) {
	document.body.style.margin = '';
  document.body.style.overflow = '';
  modal.style.display = 'none';
};

// I prefer to generate and dynamically insert the modal
// but for this demonstration it is already in the markup.
var modal_1 = document.getElementById('modal_1');


// Clicking outside the inner modal content should close it.
modal_1.addEventListener('click', function () {
  closeModal(modal_1);
});
for (var i = 0; i <  modal_1.childNodes.length; i++) {
	modal_1.childNodes[i].addEventListener('click', function (event) {
		event.stopPropagation();
	});
}

// Open the modal when open button is pressed.
document.getElementById('open_1').addEventListener('click', function (event) {
  event.preventDefault();
  openModal(modal_1);
});

// ---------------------------------------------------
var modal_2 = document.getElementById('modal_2');

modal_2.addEventListener('click', function () {
  closeModal(modal_2);
});
for (var i = 0; i <  modal_2.childNodes.length; i++) {
	modal_2.childNodes[i].addEventListener('click', function (event) {
		event.stopPropagation();
	});
}

document.getElementById('open_2').addEventListener('click', function (event) {
  event.preventDefault();
  openModal(modal_2);
});

// ---------------------------------------------------
var modal_3 = document.getElementById('modal_3');

modal_3.addEventListener('click', function () {
  closeModal(modal_3);
});
for (var i = 0; i <  modal_3.childNodes.length; i++) {
	modal_3.childNodes[i].addEventListener('click', function (event) {
		event.stopPropagation();
	});
}

document.getElementById('open_3').addEventListener('click', function (event) {
  event.preventDefault();
  openModal(modal_3);
});

// ---------------------------------------------------
var modal_4 = document.getElementById('modal_4');

modal_4.addEventListener('click', function () {
  closeModal(modal_4);
});
for (var i = 0; i <  modal_4.childNodes.length; i++) {
	modal_4.childNodes[i].addEventListener('click', function (event) {
		event.stopPropagation();
	});
}

document.getElementById('open_4').addEventListener('click', function (event) {
  event.preventDefault();
  openModal(modal_4);
});

// ---------------------------------------------------
var modal_5 = document.getElementById('modal_5');

modal_5.addEventListener('click', function () {
  closeModal(modal_5);
});
for (var i = 0; i <  modal_5.childNodes.length; i++) {
	modal_5.childNodes[i].addEventListener('click', function (event) {
		event.stopPropagation();
	});
}

document.getElementById('open_5').addEventListener('click', function (event) {
  event.preventDefault();
  openModal(modal_5);
});