/*  Typing Text Code  */

var SliderCounter = 0;
var SliderContent = [
    "Data Analyst",
    "Designer",
    "Developer",
    "@ @ @ @",
];

var SliderValue = document.querySelector("#SliderValue");

function slide() {
    if (SliderCounter >= SliderContent.length) {
        SliderCounter = 0;
    }

    SliderValue.innerHTML = "";
    SliderValue.classList.remove("holder-animation")
    void SliderValue.offsetwidth;
    SliderValue.classList.add("holder-animation")

    for (i = 0; i < SliderContent[SliderCounter].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = SliderContent[SliderCounter][i];

        if (letterDiv.innerHTML == "") {
            letterDiv.innerHTML = "&nbsp;";
        }
        letterDiv.classList.add("start")
        letterDiv.classList.add("animation")
        letterDiv.style.animationDelay = i / 10 + "s";
        SliderValue.appendChild(letterDiv);
    }
    SliderCounter++;

}

slide();
setInterval(slide, 2000);

/* toggle menu  */

$('.menu-btn').click(function(){
    $('.menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

/* Scroll Animation */
const sr = ScrollReveal({
    origin: "top",
    disance: "80px",
    duration: 2000,
    reset: true

});

sr.reveal(".featured-text" ,{});
sr.reveal(".home-img", { delay: 200 });

sr.reveal(".heading", {});