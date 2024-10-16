
const hoodieSection = document.getElementById('hoodie-section');
const shirtSection = document.getElementById('shirt-section');
const pantsSection = document.getElementById('pants-section');


const hoodieBtn = document.getElementById('hoodie-btn');
const shirtBtn = document.getElementById('shirt-btn');
const pantsBtn = document.getElementById('pants-btn');


hoodieBtn.addEventListener('click', () => {
    hoodieSection.style.display = 'block';
    shirtSection.style.display = 'none';
    pantsSection.style.display = 'none';
});


shirtBtn.addEventListener('click', () => {
    hoodieSection.style.display = 'none';
    shirtSection.style.display = 'block';
    pantsSection.style.display = 'none';
});


pantsBtn.addEventListener('click', () => {
    hoodieSection.style.display = 'none';
    shirtSection.style.display = 'none';
    pantsSection.style.display = 'block';
});
