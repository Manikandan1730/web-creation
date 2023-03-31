let closevideo = document.getElementById('close');
let openvideo =   document.getElementById('demo');
let myvideo = document.getElementById('video_player');
openvideo.addEventListener('click',() =>{
    myvideo.setAttribute("style","width:30%;height:20vh;transition:all .5s linear");
    closevideo.style.display = "block"
})
closevideo.addEventListener('click',() =>{
    myvideo.setAttribute("style","width:0%;height:0vh;transition:all .5s linear");
    closevideo.style.display = "none"
})



