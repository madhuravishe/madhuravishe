const stars = document.querySelectorAll('.star');
const emoji = document.getElementById('emoji');

stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    highlightStars(index);
  });
  
  star.addEventListener('click', () => {
    setRating(index);
  });
});

function highlightStars(index) {
  stars.forEach((star, i) => {
    star.classList.toggle('active', i <= index);
  });

  updateEmoji(index + 1);
}

function setRating(index) {
  highlightStars(index);
}

function updateEmoji(rating) {
  let emojis = ["😐", "🙂", "😊", "😄", "🤩"];
  emoji.innerText = emojis[rating - 1];
}
