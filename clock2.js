setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/12;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hours.style.transform = `rotate(${hrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
}, 1000);