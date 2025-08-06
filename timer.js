
  var time=600;
    var interval1=setInterval(function(){
        time =time-1;
        document.getElementsByClassName("minutes")[0].innerText=parseInt(time/60);
        document.getElementsByClassName("seconds")[0].innerText=(time%60);
      
    },1000)
    var x=0;
   setTimeout(function(){
    if(x==0)
    {
        clearInterval(interval1);
    }
   },600000)



     