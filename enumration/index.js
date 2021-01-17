const countings = document.querySelectorAll('.counting');

countings.forEach((counter)=>{
    counter.innerHTML=0;
    const updateCounter =()=>{
        const targetCount = +counter.getAttribute('data-target');
    //   controller= setInterval(() => {
    //       if(total_sum<targetCount)
    //       {

    //         total_sum +=5677;
    //        counter.innerHTML=total_sum
    //       }
    //       else
    //       {
    //         counter.innerHTML=targetCount;
    //       }
    //   }, 1000);
    //  second method 
 
    const staringCount= Number(counter.innerHTML);
    const incr=targetCount/13;
    if(staringCount<targetCount)
    {
        counter.innerHTML=`${Math.round(staringCount +incr)}`;
        setTimeout( updateCounter, 100)
    }
    else
    {
        counter.innerHTML=targetCount;
    }
   
    }
    updateCounter();
   
})