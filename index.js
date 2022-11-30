// Modified from bootstrap example
document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open');
})

// Typewritter effect delay
setTimeout(() =>
    {
        document.querySelector('#hello1').classList.toggle('type');
    }
, 400)

setTimeout(() =>
    {
        document.querySelector('#hello2').classList.toggle('type');
    }
, 1700)