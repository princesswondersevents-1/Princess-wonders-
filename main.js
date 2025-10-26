document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('mobile-btn');
  const nav = document.getElementById('nav-links');
  if(btn){
    btn.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      // simple inline style toggle for mobile nav
      if(nav.style.display === 'flex' || nav.style.display === ''){
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        nav.style.flexDirection = 'column';
        nav.style.gap = '8px';
        nav.style.background = '#fff';
        nav.style.padding = '12px';
        nav.style.position = 'absolute';
        nav.style.right = '20px';
        nav.style.top = '72px';
        nav.style.borderRadius = '8px';
        nav.style.boxShadow = '0 10px 30px rgba(11,15,29,0.06)';
      } else {
        nav.style.display = 'flex';
      }
    });
  }
});

document.getElementById("mobile-btn").addEventListener("click", function(){
          var navLinks = document.querySelector(".nav");
          navLinks.classList.toggle("active");
          
          var bar1 = document.querySelector(".bar-1");
          var bar2 = document.querySelector(".bar-2");
          var bar3 = document.querySelector(".bar-3");
          if (bar2.style.display === "none") {
            bar2.style.display = "block";
          } else {
            bar2.style.display = "none";
          }
          if (bar1.style.transform === "rotate(45deg)") {
            bar1.style.transform = "rotate(0deg)";
          } else {
            bar1.style.transform = "rotate(45deg)";
          }
          if (bar3.style.transform === "rotate(-45deg)") {
            bar3.style.transform = "rotate(0deg)";
            bar3.style.top = "0px";
          } else {
            bar3.style.transform = "rotate(-45deg)";
            bar3.style.position = "relative";
            bar3.style.top = "-14px";
          }
        });
