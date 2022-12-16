window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
        document.querySelector('header').classList.add('scrolled');
      } else {
        document.querySelector('header').classList.remove('scrolled');
      }
  };