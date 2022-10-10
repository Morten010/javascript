let largePic = document.getElementById("large");
let smallPics = document.getElementsByClassName("small");
console.log("hey")

for(let i = 0; i < smallPics.length; i++ ){

    smallPics[i].addEventListener("click", (e) => {
        let img = e.target;
        largePic.src = img.src;

        let removeActive = document.getElementsByClassName("active");
        removeActive[0].classList.remove("active")
        
        smallPics[i].classList.add("active")

    })
};