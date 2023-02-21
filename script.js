let creatuser = document.querySelector('.top h3')
let startbtn = document.querySelector('.take a')
let startinput = document.querySelector('.input')
let input = document.querySelector('.creatuser')
let creatbtn = document.querySelector('.input button:first-of-type')
let quitbtn = document.querySelector('.input button:last-of-type')
let user = document.querySelector('.top h2')
let slide1 = document.querySelector('#wrapper')
let slide2 = document.querySelector('#slide')
let user2 = document.querySelector('.slideright h2')


function checkuser (){
    if(sessionStorage.getItem('quizname')){
        user.innerHTML = sessionStorage.getItem('quizname')
        creatuser.style.display  = 'none'
        user2.innerHTML = sessionStorage.getItem('quizname')
    }
}
checkuser()

creatuser.onclick = () => {
    startinput.style.display = 'flex'
}

creatbtn.onclick = () => {
    sessionStorage.setItem('quizname',input.value)
    user.innerHTML = sessionStorage.getItem('quizname')
    creatuser.style.display = 'none'
    startinput.style.display = 'none'
    alert('User Name successful')
}

startbtn.onclick = (e) => {
    e.preventDefault()
    if (user.innerHTML.length === 0) {
        alert('creatuser')
    }
    else {
        slide1.style.display = 'none'
        slide2.style.display = 'block'        
        user2.innerHTML = sessionStorage.getItem("quizname")
    }
}


// page 2 work


let start3 = document.querySelector('.startrace button')

start3.onclick = () => {
    const selectoption = document.querySelector('input[name="option"]:checked').value
    if (selectoption === 'music') {
        sessionStorage.setItem('quizname', 'music')
    }
    else if (selectoption === 'modernart') {
        sessionStorage.setItem('quizname', 'modernart')

    }
    else if (selectoption === 'coding') {
        sessionStorage.setItem('quizname', 'coding')
    }

}





let Arr1 = [
    {
        question1: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question2: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question3: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question4: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question5: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question6: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question7: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question8: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question9: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question10: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },
]

let Arr2 = [
    {
        question1: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question2: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question3: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question4: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question5: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question6: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question7: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question8: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question9: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question10: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },
]

let Arr3 = [

    {
        question1: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question2: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question3: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question4: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question5: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question6: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question7: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question8: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question9: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question10: "Q1:Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    }
]

