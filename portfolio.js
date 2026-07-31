document.addEventListener("scroll",(event)=>{
    console.log(scrollY);
    if(scrollY >= 400){
        document.getElementById("about-div").style.right = "0px";
        document.getElementById("about-div").style.opacity = 1;
        document.getElementById("about-img").style.left = "0px";
        document.getElementById("about-img").style.opacity = 1;
    }


    if(scrollY >= 1000){
        document.getElementById("pro-one-img").style.right = "0px";
        document.getElementById("pro-one-img").style.opacity = 1;
        document.getElementById("pro-one-titel").style.left = "0px";
        document.getElementById("pro-one-titel").style.opacity = 1;
    }

    if(scrollY >= 1600){
        document.getElementById("pro-tow-img").style.left = "0px";
        document.getElementById("pro-tow-img").style.opacity = 1;
        document.getElementById("pro-tow-titel").style.right = "0px";
        document.getElementById("pro-tow-titel").style.opacity = 1;
    }

    if(scrollY >= 2100){
        document.getElementById("pro-three-img").style.right = "0px";
        document.getElementById("pro-three-img").style.opacity = 1;
        document.getElementById("pro-three-titel").style.left = "0px";
        document.getElementById("pro-three-titel").style.opacity = 1;
    }

    if(scrollY >= 2900){
        document.getElementById("ex-h3").style.right = "0px";
        document.getElementById("ex-h3").style.opacity = 1;
        document.getElementById("ex-p1").style.right = "0px";
        document.getElementById("ex-p1").style.opacity = 1;
        document.getElementById("ex-p2").style.right = "0px";
        document.getElementById("ex-p2").style.opacity = 1;
    }

    if(scrollY >= 3000){
        document.getElementById("present-2024").style.right = "0px";
        document.getElementById("present-2024").style.opacity = 1;
        document.getElementById("present-2025").style.right = "0px";
        document.getElementById("present-2025").style.opacity = 1;
        document.getElementById("present-2026").style.right = "0px";
        document.getElementById("present-2026").style.opacity = 1;
    }

})