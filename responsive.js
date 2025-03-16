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




// document.addEventListener("DOMContentLoaded", function () {
//     const mobileButton = document.querySelector(".mobile-button");
//     const navContainer = document.querySelector(".nav-container");

//     mobileButton.addEventListener("click", function () {
//         navContainer.classList.toggle("show");
//     });

//     // Close menu when clicking outside
//     document.addEventListener("click", function (event) {
//         if (!navContainer.contains(event.target) && !mobileButton.contains(event.target)) {
//             navContainer.classList.remove("show");
//         }
//     });
// });

