var card=document.getElementById('clock');
var message=document.getElementById('message');

card.addEventListener('mouseover',function(){
    card.style.backgroundColor="blue";
    message.innerHTML="You are IN";
});
card.addEventListener('mouseout',function(){
    card.style.backgroundColor="red";
    message.innerHTML="You are Out";
});
card.addEventListener('click',function(){
    card.style.backgroundColor="yellow";
    message.innerHTML="You Clicked";
});



function updateClock(){
    var date=new Date();
    var hours=date.getHours().toString().padStart(2,'0');
    var mins=date.getMinutes().toString().padStart(2,'0');
    var secs=date.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerHTML=hours+":"+mins+":"+secs;
}

window.setInterval(updateClock,1000);
updateClock();