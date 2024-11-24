// scrollListener.js
window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var topbar = document.querySelector('.topbar');
    var lefticon = document.querySelector('.left-ul');
    var titleh1 = document.querySelector('.titleh1');
  
    if (scrollY > 50 && topbar) {
        topbar.style.top = '30px';
        topbar.style.right = '100px';
        topbar.style.left = '100px';
        topbar.style.borderRadius  = '10px';
        topbar.style.backgroundColor  = "rgba(0, 0, 0, 0.3)";
        topbar.style.boxShadow  = "0 0 10px #b8b8b8";
        titleh1.style.color = '#fff'

        lefticon.style.left="-70px";
    } else if (scrollY <= 50 && topbar) {
        topbar.style.top = '0';
        topbar.style.right = '0';
        topbar.style.left = '0';
        topbar.style.backgroundColor  = "rgba(0, 0, 0, 0)";
        topbar.style.boxShadow  = "0 0 0 #b8b8b8";
        topbar.style.borderRadius  = '0px';
        titleh1.style.color = '#000000'

        lefticon.style.left="-180px";
    }
  });