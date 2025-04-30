document.getElementById('startDiary').addEventListener('click', function() {
  document.getElementById('homepage').style.display = 'none';
  document.getElementById('login-page').style.display = 'block';
});

document.getElementById('goToRegister').addEventListener('click', function() {
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('register-page').style.display = 'block';
});





  // const carouselImages = document.querySelectorAll('.carousel

  // rightBtn.addEventListener('click', () => {
  //   currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  //   showImage(currentImageIndex);
  // });

  // leftBtn.addEventListener('click', () => {
  //   currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
  //   showImage(currentImageIndex);
  // });

  // // Initialize the carousel by showing the first image
  // showImage(currentImageIndex);


