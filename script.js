var nav=document.querySelector(".green");

function pwpw(){
    if(pageYOffset > 100)
    {
    nav.style.opacity="0.8";
    }
    else{
        nav.style.opacity="1";
    }
}
window.addEventListener("scroll",pwpw);