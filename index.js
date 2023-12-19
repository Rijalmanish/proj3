// const p_btns = document.querySelector(".p-btns");
// const p_btn = document.querySelectorAll(".p-btns");
// const p_img_elem = document.querySelectorAll(".img-overlay");

// p_btns.addEventListener("click",(e) => {
// const p_btn_clicked = e.target;
// console.log(p_btn_clicked);

//     p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

//     p_btn_clicked.classList.add("p-btn-active");

//     const btn_num = p_btn_clicked.dataset.btn_Num;
//     console.log(btn_num);

//     const img_active = document.querySelectorAll(`.p_btn--${btn_num}`);

//     p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

//     img_active.forEach((curElem) =>
//      curElem.classList.remove("p-image-not-active"));
// });



// <!-- ==============================================
// our slider start here 
// ============================================== -->


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// ===============================================
// scroll to top
// ===============================================

const heroSection = document.querySelector(".section-hero");

const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({behavior: "smooth"});
};

scroollElement.addEventListener("click",scrollTop);



// ====================================================
// counter number 
// =====================================================

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => { 

    const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);
        const incrementNumber = Math.trunc(targetNumber / speed);
        // const.log(incrementNumber);

        if (initialNum < targetNumber) {
            curElem.innerText =  `${initialNum + incrementNumber}+`;
            setTimeout(updateNumber, 10);
            
        };

    };

    updateNumber();

});