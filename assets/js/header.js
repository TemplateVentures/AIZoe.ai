function searchBar(){
    let search = document.getElementById('searchbar');
    let iconBG = document.getElementById('searchBtn');
    search.classList.toggle('show-searchBar');
    iconBG.classList.toggle('searchBtn-bg');
}

var prevScrollpos = window.scrollY;
window.onscroll = function() {
let headerbg = document.getElementById('header');

var currentScrollPos = window.scrollY;
  if (prevScrollpos > 80) {
    headerbg.classList.add('header-bg');
  } else {
    headerbg.classList.remove('header-bg');
  }
  prevScrollpos = currentScrollPos;
}

//menu bar function
  let menuOverlay = document.getElementById('mobile-navlinks-cont');
  let menuNavlink = document.getElementById('mobile-navlink');

function showMenu(){
  menuOverlay.classList.add('toggle-mobile-overlay');
  menuNavlink.classList.add('toggle-mobile-navlinks');
  document.getElementById('body').style.overflow = 'hidden';

}

function closeMenu(){
  menuOverlay.classList.remove('toggle-mobile-overlay');
  menuNavlink.classList.remove('toggle-mobile-navlinks');
  document.getElementById('body').style.overflow = 'visible';

}



