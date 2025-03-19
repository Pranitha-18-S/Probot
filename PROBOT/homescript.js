document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.querySelector('.product-container');
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    prevBtn.textContent = '❮';
    prevBtn.id = 'prevBtn';
    prevBtn.classList.add('product-nav');
    nextBtn.textContent = '❯';
    nextBtn.id = 'nextBtn';
    nextBtn.classList.add('product-nav');
    document.querySelector('.product-section').appendChild(prevBtn);
    document.querySelector('.product-section').appendChild(nextBtn);
    const scrollAmount = 200;
    prevBtn.addEventListener('click', () => {
        productContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
        productContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});


