document.addEventListener('DOMContentLoaded', () => {
    const ratings = document.querySelectorAll('.rating');
    const ratingsContainer = document.querySelector('.ratings-container');
    const sendBtn = document.querySelector('#send');
    const panel = document.querySelector('#panel');
    let selectedRating = 'Satisfied';
  
    ratingsContainer.addEventListener('click', (e) => {
      const target = e.target.closest('.rating');
      if (target) {
        removeActive();
        target.classList.add('active');
        selectedRating = target.getAttribute('data-rating');
      }
    });
  
    sendBtn.addEventListener('click', () => {
      panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
      `;
    });
  
    function removeActive() {
      ratings.forEach(rating => rating.classList.remove('active'));
    }
  });
  