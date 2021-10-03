var blue = document.getElementById('blue1');
var pink = document.getElementById('pink1');
var purple = document.getElementById('purple1');
var red = document.getElementById('red1');

function change(){
    pic.src = './Images/black.png';
}

var pic = document.getElementById('pic')

blue.addEventListener('click' , function(){
    pic.src = './Images/blue.png';
})

purple.addEventListener('click' , function(){
    pic.src = './Images/purple.png';
})

red.addEventListener('click' , function(){
    pic.src = './Images/red.png';
})

pink.addEventListener('click' , function(){
    pic.src = './Images/pink.png';
})


function displayTime(){
    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if(h<10){
        h = '0' + h;
    }
    if(m<10){
        m = '0' + m;
    }
    if(s<10){
        s = '0' + s;
    }

    var time = h + ":" + m + ":" + s;

    document.getElementById('clock').innerHTML = time;
}


var time1 = document.getElementById('time-btn');

time1.addEventListener('click' , function(){
    setInterval(displayTime , 500)
});

var hrt1 = document.getElementById('hrt');

hrt1.addEventListener('click' , function(){
    document.getElementById('clock').innerHTML = '78';
})

