// scrollListener.js
window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var topbar = document.querySelector('.topbar');
  
    if (scrollY > 50 && topbar) {
        topbar.style.top = '';
        topbar.style.right = '';
        topbar.style.left = '';
        topbar.style.borderRadius  = '10px';
        topbar.style.backgroundColor  = "rgba(0, 0, 0, 0.3)";
        topbar.style.boxShadow  = "0 0 10px #b8b8b8";
    } else if (scrollY <= 50 && topbar) {
        topbar.style.top = '0';
        topbar.style.right = '0';
        topbar.style.left = '0';
        topbar.style.backgroundColor  = "rgba(0, 0, 0, 0)";
        topbar.style.boxShadow  = "0 0 0 #b8b8b8";
        topbar.style.borderRadius  = '0px';
    }
  });