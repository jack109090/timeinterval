setInterval(timecalinterval, 1000);

function timecalinterval() {

    const sec = 1000;  
    const min = 60;    
    const hour = 60;
    const day = 24;
    const month = 30.4;
    const year = 12;

    let date_thisyear = new Date('January 1, 2022 00:00:00');
    let date_now = new Date();

    let seconds = Math.floor((date_now - (date_thisyear))/sec);
    let minutes = Math.floor(seconds/min);
    let hours = Math.floor(minutes/hour);
    let days = Math.floor(hours/day);
    let months = Math.floor(days/month);
    let years = Math.floor(months/year);

    months = months-(years*12);
    days = days-(years*12*30)-(months*30);
    hours = hours-(years*12*30*24)-(months*30*24)-(days*24);
    minutes = minutes-(years*12*30*24*60)-(months*30*24*60)-(days*24*60)-(hours*60);
    seconds = seconds-(years*12*30*24*60*60)-(months*30*24*60*60)-(days*24*60*60)-(hours*60*60)-(minutes*60);
    // let intervalyears = (date_now - date_thisyear).getDay();

    document.getElementById("last-years").innerHTML = date_thisyear.getFullYear();
    document.getElementById("last-months").innerHTML = date_thisyear.getMonth();
    document.getElementById("last-days").innerHTML = date_thisyear.getDay();
    document.getElementById("last-hours").innerHTML = date_thisyear.getHours();
    document.getElementById("last-minutes").innerHTML = date_thisyear.getMinutes();    
    document.getElementById("last-seconds").innerHTML = date_thisyear.getSeconds();

    document.getElementById("text-years").innerHTML = years;
    document.getElementById("text-months").innerHTML = months;
    document.getElementById("text-days").innerHTML = days;
    document.getElementById("text-hours").innerHTML = hours;
    document.getElementById("text-minutes").innerHTML = minutes;    
    document.getElementById("text-seconds").innerHTML = seconds;

}

timecalinterval();