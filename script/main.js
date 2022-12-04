
const header = document.querySelector(".header")
const hederMobileTablet = document.querySelector(".header-mobile-tablet")
const headerHideOn = document.querySelector(".header-hide-on")
const headerBackMobileTable = document.querySelector(".header-hide-on__back")
const mobileTabletInput = document.querySelector(".header-mobile-tablet__search input")
const headerInput = document.querySelector(".header-search__input")
const headerHideOnInput = document.querySelector(".header-hide-on__input")
const historyPc = document.querySelector(".history--pc")
const historyMobileTablet = document.querySelector(".history--mobile-tablet")
const historyMorePcMobileTablet = historyMobileTablet.querySelector(".history-more")
const historyMorePc = historyPc.querySelector(".history-more")
const showMoreHisoryPc = historyPc.querySelector(".show-more-history")
const showMoreHisoryMobileTablet = historyMobileTablet.querySelector(".show-more-history")
const clear = document.querySelector(".header-hide-on__clear")
const overlayNotHeader = document.querySelector(".overlay-not-header")
const container = document.querySelector(".container")
const categoryList = document.querySelector(".category-head__list")
const categoryNext = document.querySelector(".category-head__next")
const categoryPrev = document.querySelector(".category-head__prev")
const sliderAuto = document.querySelector(".slider-auto")
const sliderMain = document.querySelector(".slider-main")
let sliderItems = document.querySelectorAll(".slider-item")
const nextSlider = document.querySelector(".slider-next")
const prevSlider = document.querySelector(".slider-prev")
const dotItems = document.querySelectorAll(".slider-dot__item")
const sliderItemImg = document.querySelector(".slider-item img")
const nextBrandProduct = document.querySelector(".brand-product__icon--next")
const prevBrandProduct = document.querySelector(".brand-product__icon--prev")
const brandProductMain = document.querySelector(".brand-product__main")
const brandProductList = document.querySelector(".brand-product__list")
const discountList = document.querySelector(".discount-list");
const nextBtnDiscountProduct = document.querySelector(".discount-icon--next")
const prevBtnDiscountProduct = document.querySelector(".discount-icon--prev")
const contentVideo = document.querySelector(".discount-right")
const controlVideo = document.querySelector(".discount-play")
const playVideo = document.querySelector(".discount-play__icon--play")
const pauseVideo = document.querySelector(".discount-play__icon--pause")
const formLogin = document.querySelector(".form--login")
const formEmail = document.querySelector(".form-email")
const formRegister = document.querySelector(".form--register")
const switchEmail = document.querySelector(".form-switch")
const loginBtn = document.querySelector(".header-reglog h5")
const registerBtn = document.querySelector(".header-reglog h6")
const accountBtn = document.querySelector(".header-account")
const cartBtn = document.querySelector(".header-cart")
const backLoginBtn = document.querySelector(".form-email__back")
const cardMobileTablet = document.querySelector(".header-mobile-tablet__cart")
const formClosePc = document.querySelectorAll(".form-close")
const menuCategoryItem = document.querySelector(".menu-item--category")
const menuListCategory = document.querySelector(".list-category-mobile-tablet")
const menuManageAccount = document.querySelector(".test-account")
const menuHomeItem = document.querySelector(".menu-item--home")
const menuAccountItem = document.querySelector(".menu-item--account")
const backFormMobileTablet = document.querySelector(".form-mobile-tablet__back")
const formMobileTablet = document.querySelector(".form-mobile-tablet")
const switchEmailMobileTablet = document.querySelector(".form-mobile-tablet__switch")
const menuHeadMobileTablet = document.querySelector(".menu-head")
const sliderBrandMain = document.querySelector(".brand-slider__main")
let sliderBrandItem = document.querySelectorAll(".brand-slider__item")
const sliderBrandList = document.querySelector(".brand-slider__list")
const nextSliderBrand = document.querySelector(".slider-icon--brand-next")
const prevSliderBrand = document.querySelector(".slider-icon--brand-prev")
const dotBrandItem = document.querySelectorAll(".brand-slider__dot-item")
let sliderBrandItemMT = document.querySelectorAll(".brand-slider-mobile-tablet__item")
const sliderBrandListMT = document.querySelector(".brand-slider-mobile-tablet__list")
const dotBrandItemMT = document.querySelectorAll(".brand-dot-mobile-tablet__item")
const brandTitleMT = document.querySelector(".brand-slider-mobile-tablet__title")
const navigationCate = document.querySelector(".navigation-cate")
const closeNavigationCate = document.querySelector(".navigation-cate__head__close")
const allNavigation = document.querySelectorAll(".navigation-item")
const iconHomeActive = document.querySelector(".home-active")
const iconHomeSolid = document.querySelector(".home-solid")
const iconCategoryActive = document.querySelector(".category-active")
const iconCategorySolid = document.querySelector(".category-solid")
const discountContent = document.querySelector(".discount-content")
const video = document.querySelector("#video")
const overlayFull = document.querySelector(".overlay-full")
const menuBars = document.querySelector(".header-hide-on__bars")
const switchHideShow = document.querySelector(".form-email__password span")
const formInputPassword = document.querySelector(".form-email__password input")
const formTitleEmailMobileTablet = formMobileTablet.querySelector("h5")
const formInputMobileTablet = formMobileTablet.querySelector("input")
const cartMTSearch = document.querySelector(".header-hide-on__cart")
const menuMobileTablet = document.querySelector(".menu-mobile-tablet")
var styleBeforeAffter = document.head.appendChild(document.createElement("style"));
window.addEventListener('DOMContentLoaded', (event) => {
    showSearchMobileTablet()
    showHistoryPc()
    showMoreListHistory(historyMorePc, showMoreHisoryPc)
    showMoreListHistory(historyMorePcMobileTablet, showMoreHisoryMobileTablet)
    clearInputMobileTablet()

});

//* Show search mobile tablet
function showSearchMobileTablet() {
    mobileTabletInput.addEventListener("focus", (e) => {
        container.style.display = "none"
        headerHideOn.classList.add("show-on")
        hederMobileTablet.style.display = "none"
        document.body.style.overflow = "hidden"
        headerHideOnInput.focus()

    })

    headerBackMobileTable.addEventListener("click", (e) => {
        headerHideOn.classList.remove("show-on")
        hederMobileTablet.style.display = "flex"
        document.body.style.overflow = "auto"
        container.style.display = "block"


    })

}
//* Show history pc
function showHistoryPc() {
    headerInput.addEventListener("focus", (e) => {
        historyPc.classList.add("show-on")
        overlayNotHeader.classList.add("show-on")
    })
    overlayNotHeader.addEventListener("click", (e) => {
        historyPc.classList.remove("show-on")
        overlayNotHeader.classList.remove("show-on")
    })

    header.addEventListener("click", (e) => {
        if (!e.target.matches(".header-search__input") && !e.target.matches(".history-more")) {
            historyPc.classList.remove("show-on")
            overlayNotHeader.classList.remove("show-on")
        }
    })

}
//*  Show more list hisotory
function showMoreListHistory(history, showMore) {
    history.addEventListener("click", (e) => {
        showMore.classList.toggle("show-on")
        if (showMore.classList.contains("show-on")) {
            history.firstElementChild.textContent = "Thu gọn"
            history.lastElementChild.classList.add("fa-angle-up")
        } else {
            history.firstElementChild.textContent = "Xem thêm"
            history.lastElementChild.classList.remove("fa-angle-up")
            history.lastElementChild.classList.add("fa-angle-down")
        }
    })
}
//* Clear input search mobile tablet
function clearInputMobileTablet() {
    headerHideOnInput.addEventListener("input", function (e) {
        const value = this.value
        if (value == '') {
            clear.style.display = "none"
        } else {
            clear.style.display = "block"
            clear.onclick = function (e) {
                headerHideOnInput.value = ""
                clear.style.display = "none"
            }
        }
    })
}

//* Next scroll category
const scroll = categoryList.clientWidth
categoryNext.onclick = function (e) {
    categoryList.scrollLeft += scroll;
    categoryPrev.style.opacity = 1
    categoryNext.style.opacity = 0
}
//* Prev scroll category
categoryPrev.onclick = function (e) {
    categoryList.scrollLeft -= scroll;
    categoryPrev.style.opacity = 0
    categoryNext.style.opacity = 1
}
//* Auto slider main
let index = 1
//* Get width slider
const sliderAutoWidth = sliderItems[index].getBoundingClientRect().width
//* Clone 2 node first, last
const firstClone = sliderItems[0].cloneNode(true);
const lastClone = sliderItems[sliderItems.length - 1].cloneNode(true);
firstClone.id = "first-slide";
lastClone.id = "last-slide";
sliderMain.style.transform = `translateX(${-sliderAutoWidth * index}px)`;
sliderMain.append(firstClone);
sliderMain.prepend(lastClone);
//* Set all slider, first clone, last clone
const allSlider = () => (sliderItems = document.querySelectorAll(".slider-item"))
sliderMain.addEventListener("transitionend", (e) => {
    allSlider()
    if (sliderItems[index].id === firstClone.id) {
        index = 1;
        sliderMain.style.transition = "none";
        sliderMain.style.transform = `translateX(${-sliderAutoWidth * index}px)`;
    } else if (sliderItems[index].id === lastClone.id) {
        index = sliderItems.length - 2
        sliderMain.style.transition = "none";
        sliderMain.style.transform = `translateX(${-sliderAutoWidth * index}px)`;
    }
})
//* Next slider
nextSlider.addEventListener("click", (e) => {
    if (index >= sliderItems.length - 1) {
        return;
    }
    index++;
    sliderMain.style.transform = `translateX(${-sliderAutoWidth * index}px)`;
    sliderMain.style.transition = "transform .3s linear";
    document.querySelector(".slider-dot__item.active").classList.remove("active");
    if (index > dotItems.length) {
        dotItems[0].classList.add("active");
    } else {
        dotItems[index - 1].classList.add("active");
    }
})
//* Previous slider
prevSlider.addEventListener("click", (e) => {
    if (index <= 0) {
        return;
    }
    index--;
    sliderMain.style.transform = `translateX(${-sliderAutoWidth * index}px)`;
    sliderMain.style.transition = "transform .3s linear";

    document.querySelector(".slider-dot__item.active").classList.remove("active");

    if (index <= 0) {
        dotItems[dotItems.length - 1].classList.add("active");
    } else {
        dotItems[index - 1].classList.add("active");
    }
})
//* Click dot Item
dotItems.forEach(
    (item) =>
    (item.onclick = (e) => {
        document
            .querySelector(".slider-dot__item.active")
            .classList.remove("active");
        item.classList.add("active");
        let dotIndex = Number(e.target.dataset.index);
        index = dotIndex;
        sliderMain.style.transform = `translateX(${-sliderAutoWidth * index}px)`;
        sliderMain.style.transition = "transform .3s linear";
    })
);
//* Auto next slider
function autoNextSlider() {
    autoNext = setInterval(() => {
        nextSlider.click()
    }, 5000)
}
autoNextSlider()
//* Mouse leave slider
sliderAuto.addEventListener("mouseenter", function (e) {
    nextSlider.style.opacity = 1
    prevSlider.style.opacity = 1
    clearInterval(autoNext)
})
//* Mouse enter slider
sliderAuto.addEventListener("mouseleave", function (e) {
    nextSlider.style.opacity = 0.5
    prevSlider.style.opacity = 0.5
    autoNextSlider()
})
//* Scroll discount product
const widthDiscountList = discountList.clientWidth
nextBtnDiscountProduct.addEventListener("click", handleNextDiscountProduct)
prevBtnDiscountProduct.addEventListener("click", handlePrevDiscountProduct)
//* Next scroll product
function handleNextDiscountProduct() {
    discountList.scrollLeft += widthDiscountList
    nextBtnDiscountProduct.style.opacity = 0
    prevBtnDiscountProduct.style.opacity = 1
}
//* Prev scroll product
function handlePrevDiscountProduct() {
    discountList.scrollLeft -= widthDiscountList
    nextBtnDiscountProduct.style.opacity = 1
    prevBtnDiscountProduct.style.opacity = 0

}

//* Play video
let isPlaying = true
contentVideo.addEventListener("click", (e) => {
    if (isPlaying) {
        video.play()
        isPlaying = false
        playVideo.style.display = "none"
        pauseVideo.style.display = "block"
        controlVideo.style.opacity = 0
    } else {
        video.pause()
        isPlaying = true
        playVideo.style.display = "block"
        pauseVideo.style.display = "none"
        controlVideo.style.opacity = 1
    }
})

video.addEventListener("ended", (e) => {
    controlVideo.style.opacity = 1
    playVideo.style.display = "block"
    pauseVideo.style.display = "none"

})

//* Menu mobile tablet
menuBars.addEventListener("click", (e) => {
    menuMobileTablet.classList.add("show-on")
    overlayFull.classList.add("show-on")
})
//* Click overlay close
overlayFull.addEventListener("click", (e) => {
    menuMobileTablet.classList.remove("show-on")
    overlayFull.classList.remove("show-on")
})


//* Form login 
loginBtn.addEventListener("click", (e) => {
    formLogin.classList.add("show-on")
    overlayFull.classList.add("show-on")
})
switchEmail.addEventListener("click", (e) => {
    formLogin.classList.remove("show-on")
    formEmail.classList.add("show-on")
})
backLoginBtn.addEventListener("click", (e) => {
    formEmail.classList.remove("show-on")
    formLogin.classList.add("show-on")
})
//* Form register
registerBtn.addEventListener("click", (e) => {
    formRegister.classList.add("show-on")
    overlayFull.classList.add("show-on")
})
accountBtn.addEventListener("click", (e) => loginBtn.click())
cartBtn.addEventListener("click", (e) => loginBtn.click())
cartMTSearch.addEventListener("click", (e) => {
    formMobileTablet.classList.add("show-on")
})

cardMobileTablet.addEventListener("click", (e) => menuAccountItem.click())
formClosePc.forEach(item => item.addEventListener("click", () => overlayFull.click()))
//* Check form input

//* Click overlay close
overlayFull.addEventListener("click", (e) => {
    formLogin.classList.remove("show-on")
    formEmail.classList.remove("show-on")
    formRegister.classList.remove("show-on")
})

//* MENU CATEGORY
//* List category
menuCategoryItem.addEventListener("click", (e) => {
    removeMenu()
    menuListCategory.classList.add("show-on")
    headerHideOn.addEventListener("click", (e) => {
    })
})
//* Home
menuHomeItem.addEventListener("click", (e) => {
    removeMenu()
    menuListCategory.classList.remove("show-on")

})
//* Focus input close history
headerHideOnInput.addEventListener("focus", (e) => {
    if (menuListCategory.classList.contains("show-on")) {
        menuListCategory.classList.remove("show-on")
    }
})
//* Menu head
menuHeadMobileTablet.addEventListener("click", (e) => menuAccountItem.click())
//* Swich form phone and email mobile tablet
menuAccountItem.addEventListener("click", function (e) {
    formMobileTablet.classList.add("show-on")
    switchEmailMobileTablet.addEventListener("click", (e) => {
        if (switchEmailMobileTablet.textContent === "Đăng nhập bằng email") {
            formTitleEmailMobileTablet.textContent = "Nhập email của bạn để tiếp tục"
            formInputMobileTablet.type = "email"
            formInputMobileTablet.placeholder = "abc@gmail.com"
            switchEmailMobileTablet.textContent = "Đăng nhập bằng số điện thoại"
        }
        else if (switchEmailMobileTablet.textContent === "Đăng nhập bằng số điện thoại") {
            formTitleEmailMobileTablet.textContent = "Đăng nhập hoặc tạo tài khoản"
            formInputMobileTablet.type = "phone"
            formInputMobileTablet.placeholder = "Số điện thoại"
            switchEmailMobileTablet.textContent = "Đăng nhập bằng email"
        }
    })
})
//* Back form mobile tablet
backFormMobileTablet.addEventListener("click", (e) => {
    formMobileTablet.classList.remove("show-on")
    menuCategoryItem.classList.remove("show-on")
})

//* Remove menu view
function removeMenu() {
    menuMobileTablet.classList.remove("show-on")
    overlayFull.classList.remove("show-on")
}

//* Show, hide on password
switchHideShow.addEventListener("click", (e) => {
    if (formInputPassword.type === "password") {
        formInputPassword.type = "text"
    } else if (formInputPassword.type === "text") {
        formInputPassword.type = "password"
    }
})

let indexBrand = 1
//* Get width slider
const sliderBrandWidth = sliderBrandMain.getBoundingClientRect().width
console.log(sliderBrandWidth)

//* Clone 2 node first, last
const firstCloneBrand = sliderBrandItem[0].cloneNode(true);
const lastCloneBrand = sliderBrandItem[sliderBrandItem.length - 1].cloneNode(true);
firstCloneBrand.id = "first-slide-brand";
lastCloneBrand.id = "last-slide-brand";
sliderBrandList.style.transform = `translateX(${-sliderBrandWidth * indexBrand}px)`;
sliderBrandList.append(firstCloneBrand);
sliderBrandList.prepend(lastCloneBrand);

//* Set all slider, first clone, last clone
const allSliderBrand = () => (sliderBrandItem = document.querySelectorAll(".brand-slider__item"))

sliderBrandList.addEventListener("transitionend", (e) => {
    allSliderBrand()
    if (sliderBrandItem[indexBrand].id === firstCloneBrand.id) {
        indexBrand = 1;
        sliderBrandList.style.transition = "none";
        sliderBrandList.style.transform = `translateX(${-sliderBrandWidth * indexBrand}px)`;
    } else if (sliderBrandItem[indexBrand].id === lastCloneBrand.id) {
        indexBrand = sliderBrandItem.length - 2
        sliderBrandList.style.transition = "none";
        sliderBrandList.style.transform = `translateX(${-sliderBrandWidth * indexBrand}px)`;
    }
})

//* Next slider
nextSliderBrand.onclick = () => {
    if (indexBrand >= sliderBrandItem.length - 1) {
        return;
    }
    indexBrand++;
    sliderBrandList.style.transform = `translateX(${-sliderBrandWidth * indexBrand}px)`;
    sliderBrandList.style.transition = "transform .3s linear";
    document.querySelector(".brand-slider__dot-item.active").classList.remove("active");
    if (indexBrand > dotBrandItem.length) {
        dotBrandItem[0].classList.add("active");
    } else {
        dotBrandItem[indexBrand - 1].classList.add("active");
    }
}

//* Previous slider
prevSliderBrand.onclick = () => {
    if (indexBrand <= 0) {
        return;
    }
    indexBrand--;
    sliderBrandList.style.transform = `translateX(${-sliderBrandWidth * indexBrand}px)`;
    sliderBrandList.style.transition = "transform .3s linear";

    document.querySelector(".brand-slider__dot-item.active").classList.remove("active");

    if (indexBrand <= 0) {
        dotBrandItem[dotBrandItem.length - 1].classList.add("active");
    } else {
        dotBrandItem[indexBrand - 1].classList.add("active");
    }
};

//* Click dot Item
dotBrandItem.forEach(
    (item) =>
    (item.onclick = (e) => {
        document.querySelector(".brand-slider__dot-item.active")
            .classList.remove("active");
        item.classList.add("active");
        let dotindexBrand = Number(e.target.dataset.index);
        indexBrand = dotindexBrand;
        sliderBrandList.style.transform = `translateX(${-sliderBrandWidth * indexBrand}px)`;
        sliderBrandList.style.transition = "transform .3s linear";
    })
);

//* Auto next slider

function autoNextSliderBrand() {
    autoNextBrand = setInterval(() => {
        nextSliderBrand.click()
    }, 5000)
}
autoNextSliderBrand()

// //* Mouse leave, Mouse enter slider

sliderBrandMain.addEventListener("mouseenter", function (e) {
    console.log(1)
    nextSliderBrand.style.opacity = 1
    prevSliderBrand.style.opacity = 1
    clearInterval(autoNextBrand)
})

sliderBrandMain.addEventListener("mouseleave", function (e) {
    nextSliderBrand.style.opacity = 0.5
    prevSliderBrand.style.opacity = 0.5
    autoNextSliderBrand()
})



//* fix max slider 3
let checkScroll = 0
let scrollBrandList = brandProductMain.clientWidth
nextBrandProduct.addEventListener("click", (e) => {
    checkScroll++
    prevBrandProduct.style.opacity = 1
    brandProductList.scrollLeft += scrollBrandList
    if (checkScroll >= 2) {
        nextBrandProduct.style.opacity = 0
    }
})
//* Prev brand slider
prevBrandProduct.addEventListener("click", (e) => {
    checkScroll--
    nextBrandProduct.style.opacity = 1
    brandProductList.scrollLeft -= scrollBrandList
    if (checkScroll == 0) {
        prevBrandProduct.style.opacity = 0

    }
})


let indexBrandMT = 1
//* Get width slider
const sliderBrandWidthMT = sliderBrandItemMT[0].getBoundingClientRect().width
console.log(sliderBrandWidthMT)

//* Clone 2 node first, last
const firstCloneBrandMT = sliderBrandItemMT[0].cloneNode(true);
const lastCloneBrandMT = sliderBrandItemMT[sliderBrandItemMT.length - 1].cloneNode(true);
firstCloneBrandMT.id = "first-slide-brand-mt";
lastCloneBrandMT.id = "last-slide-brand-mt";

sliderBrandListMT.style.transform = `translateX(${-sliderBrandWidthMT * indexBrandMT}px)`;
sliderBrandListMT.append(firstCloneBrandMT);
sliderBrandListMT.prepend(lastCloneBrandMT);

//* Set all slider, first clone, last clone
const allSliderBrandMT = () => (sliderBrandItemMT = document.querySelectorAll(".brand-slider-mobile-tablet__item"))

sliderBrandListMT.addEventListener("transitionend", (e) => {
    allSliderBrandMT()
    if (sliderBrandItemMT[indexBrandMT].id === firstCloneBrandMT.id) {
        indexBrandMT = 1;
        sliderBrandListMT.style.transition = "none";
        sliderBrandListMT.style.transform = `translateX(${-sliderBrandWidthMT * indexBrandMT}px)`;
    } else if (sliderBrandItemMT[indexBrandMT].id === lastCloneBrandMT.id) {
        indexBrandMT = sliderBrandItemMT.length - 2
        sliderBrandListMT.style.transition = "none";
        sliderBrandListMT.style.transform = `translateX(${-sliderBrandWidthMT * indexBrandMT}px)`;
    }
})

//* All title slider brand
const allTitle = [
    "Deal da tóc đẹp xinh - Deal thương hiệu nữa giá",
    "Deal ngon bất ngờ - Đi chợ tại nhà",
    "Deal công nghệ - Hàng hiệu giảm tiền triệu",
    "Deal đồ dùng cho bạn - Deal hời giá sốc",
    "Deal xế xịn - Săn sale hời",
    "Deal xịn cho da - Quà ưu đãi ngập tràn",
    "Deal thương hiệu Vietravel - Ưu đãi cực sâu",
    "Deal thương hiệu Gas24h - Ưu đãi cực lớn"
]
brandTitleMT.textContent = allTitle[0]

//* Handle next brand slider
function nextSliderBrandMT() {
    if (indexBrandMT >= sliderBrandItemMT.length - 1) {
        return;
    }
    brandTitleMT.textContent = allTitle[indexBrandMT]
    indexBrandMT++;
    sliderBrandListMT.style.transform = `translateX(${-sliderBrandWidthMT * indexBrandMT}px)`;
    sliderBrandListMT.style.transition = "transform .3s linear";
    document.querySelector(".brand-dot-mobile-tablet__item.active").classList.remove("active");
    if (indexBrandMT > dotBrandItemMT.length) {
        dotBrandItemMT[0].classList.add("active");
        brandTitleMT.textContent = allTitle[0]

    } else {
        dotBrandItemMT[indexBrandMT - 1].classList.add("active");
    }
}
//* Click dot Item
dotBrandItemMT.forEach(
    (item) =>
    (item.onclick = (e) => {
        document.querySelector(".brand-dot-mobile-tablet__item.active")
            .classList.remove("active");
        item.classList.add("active");
        let dotindexBrandMT = Number(e.target.dataset.index);
        indexBrandMT = dotindexBrandMT;
        sliderBrandListMT.style.transform = `translateX(${-sliderBrandWidthMT * indexBrandMT}px)`;
        sliderBrandListMT.style.transition = "transform .3s linear";
    })
);

//* Auto next slider
function autoNextSliderBrandMT() {
    autoNextBrandMT = setInterval(() => {
        nextSliderBrandMT()
    }, 5000)
}
autoNextSliderBrandMT()

//* Navigation category mobile tablet
//* Active navigation icon Home
function activeHome() {
    iconHomeActive.style.display = "block"
    iconHomeSolid.style.display = "none"
    iconCategoryActive.style.display = "none"
    iconCategorySolid.style.display = "block"
}
//* Active navigation icon category
function activeCate() {
    iconHomeActive.style.display = "none"
    iconHomeSolid.style.display = "block"
    iconCategoryActive.style.display = "block"
    iconCategorySolid.style.display = "none"
}
//* Loop and add all event allNavigation
allNavigation.forEach(item => {
    item.addEventListener("click", (e) => {
        const cls = item.classList

        switch (true) {
            case cls.contains("navigation-home"):
                activeHome()
                overlayFull.click()
                break;
            case cls.contains("navigation-category"):
                activeCate()
                handleNavigationCate()

                break;
            case cls.contains("navigation-news"):
                menuAccountItem.click()
                break;
            case cls.contains("navigation-chat"):
                menuAccountItem.click()
                break;
            case cls.contains("navigation-profile"):
                menuAccountItem.click()
                break;
        }
    })
})

//* Handle navigation categoyry mobile tablet
function handleNavigationCate() {
    navigationCate.classList.add("show-on")
    document.body.style.overflow = "hidden"
    overlayFull.classList.add("show-on")
    if (menuMobileTablet.classList.contains("show-on")) {
        menuMobileTablet.classList.remove("show-on")
    }
}
//* Click overlay close
overlayFull.addEventListener("click", (e) => {
    navigationCate.classList.remove("show-on")
    document.body.style.overflow = "auto"
    activeHome()

})
//* Close Btn Navigation category
closeNavigationCate.addEventListener("click", () => overlayFull.click())

