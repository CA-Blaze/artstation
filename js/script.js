function shwobtnhandle() {
    const loginButton = document.getElementById("login-btn");
    const logoutButton = document.getElementById("logout-btn");

    if (localStorage.getItem("login") === "true") {
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
 
    } else {
        loginButton.style.display = "block";
        logoutButton.style.display = "none";

    }
}


shwobtnhandle();


let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video',).forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});
document.querySelectorAll('.course-2 .box .video video',).forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});
document.querySelectorAll('.course-1-1 .box .video video',).forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});
document.querySelectorAll('.course-1-2 .box .video video',).forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});
document.querySelectorAll('.course-1-3 .box .video video',).forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});
document.querySelectorAll('.course-1-4 .box .video video',).forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});

document.querySelector('#close-vid').onclick = () =>{
    mainVid.classList.remove('active');
}


