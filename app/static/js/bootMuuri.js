var grid = new Muuri('.grid',{

	// Item elements
	items: '*',

	// Default show animation
	showDuration: 300,
	showEasing: 'ease',

	// Default hide animation
	hideDuration: 300,
	hideEasing: 'ease',

	// Item's visible/hidden state styles
	visibleStyles: {
		opacity: '1',
		transform: 'scale(1)'
	},
	hiddenStyles: {
		opacity: '0',
		transform: 'scale(0.5)'
	},

	// Layout
	layout: {
		fillGaps: true,
		horizontal: false,
		alignRight: false,
		alignBottom: false,
		rounding: true
	},
	layoutOnResize: 100,
	layoutOnInit: true,
	layoutDuration: 300,
	layoutEasing: 'ease',

	// Sorting
	sortData: {
		date: function (item, element) {
			return parseFloat(element.getAttribute('date'));
		}
	},

	// Drag & Drop
	dragEnabled: false,
	dragContainer: null,
	dragStartPredicate: {
		distance: 0,
		delay: 0,
		handle: false
	},
	dragAxis: null,
	dragSort: true,
	dragSortInterval: 100,
	dragSortPredicate: {
		threshold: 50,
		action: 'move'
	},
	dragReleaseDuration: 300,
	dragReleaseEasing: 'ease',
	dragHammerSettings: {
		touchAction: 'none'
	},

	// Classnames
	containerClass: 'muuri',
	itemClass: 'muuri-item',
	itemVisibleClass: 'muuri-item-shown',
	itemHiddenClass: 'muuri-item-hidden',
	itemPositioningClass: 'muuri-item-positioning',
	itemDraggingClass: 'muuri-item-dragging',
	itemReleasingClass: 'muuri-item-releasing'
});

(function (){
	grid.refreshSortData();
	grid.sort('date',{descending: true});
	grid.filter('.none');
	//window.setTimeout( function() { grid.filter('.item')}, 500 );
	return false;
})();

window.onload = function bodyOnload(){
	grid.filter('.item');
}

function OnLinkClick(tag) {
	grid.filter(tag);
	grid.refreshSortData();
	grid.sort('date',{descending: true});
	return false;
}

function OnSearchClick() {
	var tag = "."+document.forms.form2.sbox2.value;
	grid.filter(tag);
	grid.refreshSortData();
	grid.sort('date',{descending: true});
	return false;
}