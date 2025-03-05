const mobilebtn = document.querySelector(".mobile-button");
const nav = document.querySelector('.nav-container');

mobilebtn.addEventListener("click", () => {
    // if(nav.classList.contains("nav-container")) {
    //     nav.classList.add('show');
    //     mobilebtn.classList.add("fa-times")
    // } else {
    //     mobilebtn.classList.remove("fa-times")
    //     nav.classList.add('show');
    // }
    nav.classList.toggle("show");
    mobilebtn.classList.toggle("fa-times");
})
