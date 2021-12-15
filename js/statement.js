(function (document) {
    const markers = [...document.querySelectorAll('mark')];
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.8
    });
    
    markers.forEach(mark => {
      observer.observe(mark);
    });
  })(document);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

var i = 0;
var txt = 'Artist\'s Statement'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = (event) => {
  typeWriter();
};