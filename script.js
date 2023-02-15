let btn1 = document.querySelector('.client h1 a')
let btn2 = document.querySelector('.head button a')
let username = document.querySelector('.username')
let main = document.querySelector('.clientright')
let creat = document.querySelector('.clear button:first-of-type')
let quit = document.querySelector('.clear button:last-of-type')
let input = document.querySelector('.clientright input')
let blank = document.querySelector('.clientright h2')
let anchor = document.querySelector('.client h1 a')
let button = document.querySelector('.client h1:last-of-type')
let slide1 = document.querySelector('#wrapper')
let slide2 = document.querySelector('#wrapperhead')
let cess = document.querySelector('.cess h2')


let music = document.querySelector('.center2 .audio a')
let modern = document.querySelector('.center2 .art a')
let coding = document.querySelector('.center2 .code a')
let setbtn = document.querySelector('.open button')

 function checkuser (){
    if(sessionStorage.getItem('username')){
        btn1.style.display = 'none'
        username.innerHTML = sessionStorage.getItem('username')        
    }
 }
    checkuser()


btn2.onclick = (e) => {
    e.preventDefault()
    if (username.innerHTML == '') {
        alert("Please Enter Some Value")

    }
    else {
        sessionStorage.setItem("username",input.value)
        let save = sessionStorage.getItem("username")
        username.innerHTML = save
        slide1.style.display = 'none'
        slide2.style.display = 'block'
        cess.innerHTML = input.value
        checkuser()
    }
}

btn1.onclick = (e) => {
    e.preventDefault()
    main.style.display = 'block'
}

creat.onclick = () => {
    btn1.style.display = 'none'
    creat.style.display = 'none'
    username.style.display = 'block'
    alert('user Created Successful !')
    username.innerHTML = input.value
    button.style.display = "none"
    main.style.display = 'none'
}



