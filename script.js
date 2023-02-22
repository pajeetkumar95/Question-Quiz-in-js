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


function checkuser() {
    if (sessionStorage.getItem('quizname')) {
        user.innerHTML = sessionStorage.getItem('quizname')
        creatuser.style.display = 'none'
        user2.innerHTML = sessionStorage.getItem('quizname')
    }
}

checkuser()

creatuser.onclick = () => {
    startinput.style.display = 'flex'
}

creatbtn.onclick = () => {
    sessionStorage.setItem('quizname', input.value)
    user.innerHTML = sessionStorage.getItem('quizname')
    creatuser.style.display = 'none'
    startinput.style.display = 'none'
    alert('User Name successful')
    checkuser()
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
let page3 = document.querySelector('#page3')


start3.onclick = () => {
    const selectoption = document.querySelector('input[name="option"]:checked').value
    if (selectoption === 'music') {
        sessionStorage.setItem('quizstart', 'music')
        loadquestion(Arr1)
        slide2.style.display = 'none'
        page3.style.display = 'block'
    }
    else if (selectoption === 'modernart') {
        sessionStorage.setItem('quizstart', 'modernart')
        loadquestion(Arr2)
        slide2.style.display = 'none'
        page3.style.display = 'block'

    }
    else if (selectoption === 'coding') {
        sessionStorage.setItem('quizstart', 'coding')
        loadquestion(Arr3)
        slide2.style.display = 'none'
        page3.style.display = 'block'
    }

}



// PAGE 3 WORK

let qsbtn = document.querySelector('.question h4')
let option1 = document.querySelector('#option1')
let option2 = document.querySelector('#option2')
let option3 = document.querySelector('#option3')
let option4 = document.querySelector('#option4')
let qssubmit = document.querySelector('.question button')
let answer = document.querySelectorAll('.answer')


let questioncount = 0

let loadquestion = (data) => {
    let questionlist = data[questioncount]
    qsbtn.innerHTML = questionlist.question
    option1.innerHTML = questionlist.a
    option2.innerHTML = questionlist.b
    option3.innerHTML = questionlist.c
    option4.innerHTML = questionlist.d
}


qssubmit.onclick = () => {
    questioncount++
    if(sessionStorage.getItem('quizstart')==='music'){
        loadquestion(Arr1)
    }
    else if(sessionStorage.getItem('quizstart')==='modernart'){
        loadquestion(Arr2)
    }
    else if(sessionStorage.getItem('quizstart')==='coding'){
        loadquestion(Arr3)
    }
}

// function checkanswer(){
//     let answer ;
//     answer.forEach(element => {
        
//     });
// }






let Arr1 = [
    {
        question: "Q. 1 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 2 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 3 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 4 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 5 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 6 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 7 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 8 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 9 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 10 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },
]

let Arr2 = [
    {
        question: "Q. 1 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 2 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 3 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 4 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 5 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 6 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 7 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 8 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 9 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 10 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },
]

let Arr3 = [

    {
        question: "Q. 1 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 2 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 3 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 4 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 5 :Which of the following is not a looping structure in PHP?",
        d: "do-while",
        a: "for",
        b: "for each",
        c: "while",
        ans: "ans2"
    },

    {
        question: "Q. 6 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 7 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 8 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 9 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    },

    {
        question: "Q. 10 :Which of the following is not a looping structure in PHP?",
        a: "for",
        b: "for each",
        c: "while",
        d: "do-while",
        ans: "ans2"
    }
]

