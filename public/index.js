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


  window.addEventListener("load", (event) => {
    document.querySelector('#show-menu').addEventListener('click', () =>{
        alert('still-working')
        // document.querySelector('.menu').classList.add('show-menu');
  })
  });