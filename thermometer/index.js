let img = document.querySelector('.therm');

const aninmatedtherm =()=>{
    img.innerHTML="&#xf2cb"
    img.style.color="white"

    setTimeout(() => {
        img.innerHTML="&#xf2ca";
        img.style.color="pink"
    }, 1000);

    setTimeout(() => {
        img.innerHTML="&#xf2c9";
        img.style.color="pink";
    }, 2000);

    setTimeout(() => {
        img.innerHTML="&#xf2c7";
        img.style.color="red"
        
    }, 3000);
   
    
}

setInterval(() => {
    aninmatedtherm()
}, 4000);
 



aninmatedtherm();