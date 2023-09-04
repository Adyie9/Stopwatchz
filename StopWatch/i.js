let [hours,mins,seconds]=[0,0,0];
let displayTime=document.getElementById('displayTime');
let timer=null;

function stopWatch(){
    seconds++;
    if (seconds==60){
        seconds=0;
        mins++;
        if(mins==60){
            mins=0;
            hours++;
        }
    }
    let h= hours<10?"0"+hours:hours;
    let m= mins<10?"0"+mins:mins;
    let s= hours<10?"0"+hours:seconds;
    displayTime.innerHTML = h+ ":" + m+ ":" + seconds;
    console.log(timer)
}

function watchStart(){
  /* if(timer!==null){
        clearInterval(timer);
    } */
    timer=setInterval(stopWatch,1000);
}

function stop(){
    clearInterval(timer);


}


function reset(){
    clearInterval(timer);
    [seconds,mins,hours]=[0,0,0];
    displayTime.innerHTML="00:00:00";
}

