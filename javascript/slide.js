    var i = 0; 
    var images = [];
    var time = 3000;

// Image list
images [0] = "images/jimmy.webp"; 
images [1] = "../images/redjimmy.webp";
images [2] = "../images/Lance1.webp";

//Change Image
function changeImg(){
    document.slide.src = images[i];
    
    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload=changeImage;
