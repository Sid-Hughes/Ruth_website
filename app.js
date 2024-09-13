document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    for (const image of images){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(reponse => reponse.json())
        .then(data => {
            image.src = data.message;
            image.width = 100;
            image.height = 100;
        });
    }


    

});

const interval = 3000;
var currentImg = 0;
function changeSlide(n) {
    var imgs = document.querySelectorAll('.slider img')
    var dots = document.querySelectorAll('.dot')
    
    console.log(imgs.length)
    console.log(dots.length)
    for (var i =0; i<imgs.length; i++){
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '')
    }
    currentImg = (currentImg + 1) % imgs.length;
    if (n != undefined){
        clearInterval(timer);
        timer = setInterval(changeSlide, interval);
        currentImg = n;
    }
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}

var timer = setInterval(changeSlide, interval);
