  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const cards = document.querySelectorAll('.timeline .card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.textContent;

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'All' || cardCategory === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      // Add active styling (optional)
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
