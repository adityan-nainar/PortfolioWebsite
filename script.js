function videoCon(){
    const cont = document.querySelector("video")
    const btn = document.querySelector("#play")

    cont.addEventListener("mouseover", ()=>{
        gsap.to(btn,{
            scale:1,
            opacity:1
        })
    })
    cont.addEventListener("mouseleave", ()=>{
        gsap.to(btn,{
            scale:0,
            opacity:0
        })
    })

    cont.addEventListener('mousemove', (dets)=>{
        gsap.to(btn, {
            top : dets.y-50,
            left : dets.x-50
        })
})
}
videoCon();

function mouseStuff(){
const area = document.querySelector("#hero")
const video = document.querySelector("video")
const cursor = document.querySelector('.cursor')
const cursor2 = document.querySelector('#cursor1')


area.addEventListener('mousemove', (e)=>{
    cursor.style.left = e.x+'px';
    cursor.style.top = e.y+'px';
})

area.addEventListener('mouseenter',()=>{
    cursor2.style.opacity = 1;
})

area.addEventListener('mouseleave',()=>{
    cursor2.style.opacity = 0;
})
video.addEventListener('mouseenter',()=>{
    cursor2.style.opacity = 0;
})

video.addEventListener('mouseleave',()=>{
    cursor2.style.opacity = 1;
})
}
mouseStuff();

gsap.from("#maintitle h1",{
    y:50,
    duration: 0.5,
    delay:1,
    opacity:0,
    stagger:0.2
})
gsap.from("#videoContainer",{
    y:50,
    duration: 0.5,
    delay:1.5,
    opacity:0,
    stagger:0.2
})
gsap.from("hr",{
    width:0,
    duration: 1,
    delay:1.5,
    opacity:0,
    stagger:0.2,
    ease:  "power1.in", 
})
