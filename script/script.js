document.addEventListener('DOMContentLoaded', () => {

let consulting_h1 = document.querySelector(".consulting");
let consulting_types = document.querySelectorAll(".consulting-types");

window.addEventListener("scroll", () => {
    const height = window.innerHeight / 5 * 4;
    const h1Top = consulting_h1.getBoundingClientRect().top;
    if (h1Top < height) {
        consulting_h1.classList.add('anim-consulting-h1');
    }
    else {
        consulting_h1.classList.remove('anim-consulting-h1');
    }
    // consulting_types.forEach(consulting_types => {
    //     const consulting_types_Top = consulting_types.getBoundingClientRect().top;

    //     if (consulting_types_Top < height) {
    //         consulting_h1.classList.add('anim-consulting-types');
    //     }
    //     else {
    //         consulting_h1.classList.remove('anim-consulting-types');
    //     }
    // });

});window.addEventListener("scroll", () => {
    // const heighttype = window.innerHeight / 5 * 4;
    // const h1Top = consulting_h1.getBoundingClientRect().top;
    // if (h1Top < height) {
    //     consulting_h1.classList.add('anim-consulting-h1');
    // }
    // else {
    //     consulting_h1.classList.remove('anim-consulting-h1');
    // }
    consulting_types.forEach(consulting_types => {
        const consulting_types_Top = consulting_types.getBoundingClientRect().top;

        if (consulting_types_Top < height) {
            consulting_h1.classList.add('anim-consulting-types');
        }
        else {
            consulting_h1.classList.remove('anim-consulting-types');
        }
    });

});
});