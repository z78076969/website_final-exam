  document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - document.querySelector('.sticky-top').offsetHeight, // 考慮第二層導覽列高度
          behavior: 'smooth',
        });
      }
    });
  });