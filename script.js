//efecto encabezado menu//


const headerImage = document.querySelector('.iconoheader');
const header = document.querySelector('.myheader');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) { // You can adjust the scroll position where you want to change the image
        headerImage.src = 'logo_color.png'; // Replace with the new image URL
        header.style.backgroundColor = 'white'; // Change the background color
        header.style.color = '#5D5D5D'; // Change the text color to gray with !important
    } else {
        headerImage.src = 'LOGO_BLANCO.svg'; // Replace with the initial image URL
        header.style.backgroundColor = 'transparent'; // Restore the initial background color
        header.style.color = 'white'; // Restore the initial text color with !important
    }
});


window.addEventListener('load', function() {
    const body = document.body;
    body.style.opacity = '1'; // Aumenta gradualmente la opacidad al valor 1 (totalmente visible)
});