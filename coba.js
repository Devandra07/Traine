function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  
  heart.innerText = '💗';
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
              heart.remove();
              }, 5000);
}

setInterval(createHeart, 300);

function createFlower() {

  const flower = document.createElement('div');

  heart.classList.add('flower');
  
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = Math.random() * 2 + 3 + "s";
  
  flower.innerText = '🌺';
  
  document.body.appendChild(flower);
  
  setTimeout(() => {
              flower.remove();
              }, 5000);
}

setInterval(createFlower, 200);