let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', ()=> {
    document.querySelector('body').classList.toggle('toggle-header')
    MenuBtn.classList.toggle('ri-close-line')
})

// TOGGLE SIDEBAR
const menuBar = document.querySelector('.right-side nav .ri-menu-line');
const menuTab = document.getElementById('menu-tab');

menuBar.addEventListener('click', function () {
	menu-tab.classList.toggle('hide');
})

const searchButton = document.querySelector('header .right-side nav form .search button');
const searchButtonIcon = document.querySelector('header .right-side nav form .search button i');
const searchForm = document.querySelector('hearder .right-side nav form');


searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('ri-user-search-line', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'ri-user-search-line');
		}
	}
})