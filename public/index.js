window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
        document.querySelector('header').classList.add('scrolled');
      } else {
        document.querySelector('header').classList.remove('scrolled');
      }
  };


//  window.onload() document.querySelector('#show-menu').addEventListener('mouseover', () =>{
//         alert('mouse')
//   })


  window.addEventListener("DOMContentLoaded", (event) => {
      function updateMenu(){
        document.querySelector('#show-menu').addEventListener('click', () =>{
               let menu = document.querySelector('.menu');
               menu.classList.toggle('show-menu');
         })
      }
      setTimeout(updateMenu,1000)

  });