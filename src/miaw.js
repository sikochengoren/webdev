const { own, el } = ownel

gsap.registerPlugin(TextPlugin)

gsap.timeline()
    .fromTo("#App", { y: 50 }, { y: 80, duration: 1.5 })
    .to("#title", {
        duration: 2,
        text: "Halo Imut, ini aku <span class='text-orange-400'>SiKochengOren!</span>",
        ease: "none",
    })
    .to("#subtitle", {
        duration: 4,
        text: "Kamu cinta sama aku gak...? 🥺👉👈",
        ease: "none",
    })
    .to("#okebtn", {
        duration: 3,
        opacity: 1
    })
    .to("#nobtn", {
        duration: 3,
        opacity: 1
    }, "<")


let index = 0
const tryagain = [
    "Beneran nih...? 🥺",
    "Kamu cinta aku...? 🥺",
    "Seriuus...? 🥺",
    "Duariuus...? 🥺",
    "Tigariuus...? 🥺",
    "Utututuu kali ini bener ehehe... 😽"
]
const position = [
    [100, 100],
    [-100, -100],
    [50, 100],
    [-100, -50],
    [-50, 50],
    [0, 0],
]

own("#App", {

    "$ #okebtn": {
        onclick() {
            if (index > 5) {
                el("#okebtn").hide()
                el("#img").attr("src","assets/mencintai.gif")
                gsap.to("#title",{
                    duration:0.5,
                    text:"Kyaaaaaaa >///<"
                })
                gsap.to("#subtitle",{
                    duration:1,
                    text:"Aku juga cinta sama kamu my imut 😻"
                })
            } else {
                el("#nobtn").hide()
                el("#okebtn").txt(tryagain[index])
                gsap.to("#okebtn",{
                    duration:0.5,
                    x: position[index][0],
                    y: position[index][1],
                })
                index++;
            }
        }
    },

    "$ #nobtn": {
        onclick() {
            gsap.timeline()
                .to("#nobtn", {
                    duration: 3,
                    text: "YEE GW PAKSA LUWH >:v"
                })
                .to("#nobtn", {
                    duration: 3,
                    scale: 2
                }, "<")
                .to("#nobtn", {
                    duration: 1,
                    y: 200
                })
                .to("#nobtn", {
                    duration: 1,
                    display: "none"
                }, "<")
        }
    }
})