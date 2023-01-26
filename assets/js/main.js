const modalFeatures = document.getElementById('nav__dropdown--features')
const iconArrowF = document.getElementById('ph-f-icon')

function showModalFeatures() {

    for (let index = 0; index < modalFeatures.length; index++) {
        const modalFeatures = modalFeatures[index];
    }


    if(modalFeatures.className === 'nav__dropdown--features') {
        modalFeatures.className = 'nav__dropdown--features show-modal'
        iconArrowF.classList.remove("ph-caret-up")
        iconArrowF.classList.add("ph-caret-down")
    } else {
        modalFeatures.className = 'nav__dropdown--features'
        iconArrowF.classList.remove("ph-caret-down")
        iconArrowF.classList.add("ph-caret-up")
    }
}

const modalCompany = document.getElementById('nav__dropdown--company')
const iconArrowC = document.getElementById('ph-c-icon')

function showmodalCompany() {

    for (let index = 0; index < modalCompany.length; index++) {
        const modalCompany = modalCompany[index];
    }


    if(modalCompany.className === 'nav__dropdown--company') {
        modalCompany.className = 'nav__dropdown--company show-modal'
        iconArrowC.classList.remove("ph-caret-up")
        iconArrowC.classList.add("ph-caret-down")
    } else {
        modalCompany.className = 'nav__dropdown--company'
        iconArrowC.classList.remove("ph-caret-down")
        iconArrowC.classList.add("ph-caret-up")
    }
}

const menuBtn = document.getElementById("menu__hamburguer")
const menuList = document.querySelector(".nav__container--mobile")

// ------------------ MOBILE

menuBtn.addEventListener("click", () => {
    if (menuBtn.classList.contains("ph-list")) {
        menuBtn.classList.remove("ph-list")
        menuBtn.classList.add("ph-x")
        menuList.classList.add("active")
    } else {
        menuBtn.classList.remove("ph-x")
        menuBtn.classList.add("ph-list")
        menuList.classList.remove("active")
    }
})

const modalFeaturesMobile = document.getElementById('nav-mobile--features')
const iconArrowFM = document.getElementById('ph-fm-icon')

console.log(modalFeaturesMobile)

function showModalFeaturesMobile() {

    for (let index = 0; index < modalFeaturesMobile.length; index++) {
        const modalFeaturesMobile = modalFeaturesMobile[index];
    }


    if(modalFeaturesMobile.className === 'nav-mobile--features') {
        modalFeaturesMobile.className = 'nav-mobile--features show-modal--mobile'
        iconArrowFM.classList.remove("ph-caret-up")
        iconArrowFM.classList.add("ph-caret-down")
    } else {
        modalFeaturesMobile.className = 'nav-mobile--features'
        iconArrowFM.classList.remove("ph-caret-down")
        iconArrowFM.classList.add("ph-caret-up")
    }
}


const modalFeaturesCompany = document.getElementById('nav-mobile--company')
const iconArrowFC = document.getElementById('ph-cm-icon')

console.log(modalFeaturesMobile)

function showModalCompanyMobile() {

    for (let index = 0; index < modalFeaturesCompany.length; index++) {
        const modalFeaturesCompany = modalFeaturesCompany[index];
    }


    if(modalFeaturesCompany.className === 'nav-mobile--company') {
        modalFeaturesCompany.className = 'nav-mobile--company show-modal--mobile'
        iconArrowFC.classList.remove("ph-caret-up")
        iconArrowFC.classList.add("ph-caret-down")
    } else {
        modalFeaturesCompany.className = 'nav-mobile--company'
        iconArrowFC.classList.remove("ph-caret-down")
        iconArrowFC.classList.add("ph-caret-up")
    }
}

