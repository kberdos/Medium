document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

weakBtn.addEventListener("click", e=>{
  document.body.classList.add("weak-mode");
  document.getElementById("knight").style.color = "black";
  document.getElementById("your").style.color = "#F51720";
  document.getElementById("subHeading").innerHTML = " Nothing beside remains. ";
});

confBtn.addEventListener("click", e=>{
  document.body.classList.remove("weak-mode");
  document.getElementById("your").style.color = "black";
  document.getElementById("knight").style.color = "#F51720";
  document.getElementById("subHeading").innerHTML = " Look on my Works, ye Mighty, and despair! ";
});