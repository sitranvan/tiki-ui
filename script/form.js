const formQuanlity = document.querySelector(".detail-content__quanlity input") || document.head
const formDecrease = document.querySelector(".detail-content__quanlity__decrease") || document.head
const formIncrease = document.querySelector(".detail-content__quanlity__increase") || document.head
let formQuanlityValue = formQuanlity.value

formQuanlity.addEventListener("input", (e) => {
    formQuanlityValue = e.target.value
})

formIncrease.addEventListener("click", () => {
    formDecrease.classList.remove("disable")
    formQuanlityValue++
    formQuanlity.value = formQuanlityValue
})

formDecrease.addEventListener("click", () => {
    formQuanlityValue--
    if (formQuanlityValue <= 1) {
        formDecrease.classList.add("disable")
    }
    formQuanlity.value = formQuanlityValue

})



function checkFormEmpty(input) {
    input.addEventListener("input", (e) => {
        const value = e.target.value
        if (value.trim() !== "") {
            input.parentElement.classList.add("active")
        } else {
            input.parentElement.classList.remove("active")

        }
    })
}

const formInputLogin = document.querySelector(".form-input")
const formEmailFlag = document.querySelector(".form-email__email ")
const formPhonePcLogin = document.querySelector(".form-input input")
const formEmailInputLogin = document.querySelector(".form-email__email input")
const formPasswordInputLogin = document.querySelector(".form-email__password input")
const formPasswordLogin = document.querySelector(".form-email__password")
const formPhoneEmailMobileTabletInput = document.querySelector(".form-mobile-tablet__input input")
const formPhoneEmailMobileTablet = document.querySelector(".form-mobile-tablet__input")
const formPhoneRegister = document.querySelector(".form-input--register")
const formPhoneRegisterInput = document.querySelector(".form-input--register input")
const formSubmit = document.querySelector(".form-submit")
console.log(formEmailFlag)
checkFormEmpty(formPhonePcLogin)
checkFormEmpty(formEmailInputLogin)
checkFormEmpty(formPasswordInputLogin)
checkFormEmpty(formPhoneEmailMobileTabletInput)
checkFormEmpty(formPhoneRegisterInput)


formEmailInputLogin.addEventListener('input', (e) => {
    const value = e.target.value
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (value === '') {
        formEmailFlag.classList.add("error")
    }
    else if (!regex.test(value)) {
        formEmailFlag.classList.add("error")

    } else {
        formEmailFlag.classList.remove("error")
    }
})

formPhonePcLogin.addEventListener("input", (e) => {
    const value = e.target.value
    const regex = /^\d{10}$/
    if (value === '') {
        formInputLogin.classList.add("error")
    } else if (!regex.test(value)) {
        formInputLogin.classList.add("error")
    } else {
        formInputLogin.classList.remove("error")
    }
})

formPasswordInputLogin.addEventListener('input', (e) => {
    const value = e.target.value
    // Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    if (value === '') {
        formPasswordLogin.classList.add("error")
    } else if (!regex.test(value)) {
        formPasswordLogin.classList.add("error")
    } else {
        formPasswordLogin.classList.remove("error")
    }
})

// register form
formPhoneRegisterInput.addEventListener("input", (e) => {
    const value = e.target.value
    const regex = /^\d{10}$/
    if (value === '') {
        formPhoneRegister.classList.add("error")
    } else if (!regex.test(value)) {
        formPhoneRegister.classList.add("error")
    } else {
        formPhoneRegister.classList.remove("error")
    }
})


// phone mobile
formPhoneEmailMobileTabletInput.addEventListener("input", (e) => {
    const value = e.target.value
    const regexPhone = /^\d{10}$/
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (formPhoneEmailMobileTabletInput.type === 'text') {
        if (value === '') {
            formPhoneEmailMobileTablet.classList.add("error")
        } else if (!regexPhone.test(value)) {
            formPhoneEmailMobileTablet.classList.add("error")
        } else {
            formPhoneEmailMobileTablet.classList.remove("error")
        }
    } else if (formPhoneEmailMobileTabletInput.type === 'email') {
        if (value === '') {
            formPhoneEmailMobileTablet.classList.add("error")
        } else if (!regexEmail.test(value)) {
            formPhoneEmailMobileTablet.classList.add("error")
        } else {
            formPhoneEmailMobileTablet.classList.remove("error")
        }
    }


})


formSubmit.addEventListener("click", (e) => {
    e.preventDefault()
})