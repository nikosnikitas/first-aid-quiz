
/*  //////////////////////////////////////////////////////////////////////////
    // INFO:                                                                //
    // A Quiz Game with HTML, CSS and JS.                                   //
    // Author: Nikos-Nikitas                                                //
    // GitHub: https://github.com/nikosnikitas                              //
    //////////////////////////////////////////////////////////////////////////  */

const questions = [
    { 
        number: 1,
        question: 'First Program of a Programmer is called the: ',
        answers: [
            { txt: "Hello World", correct: true, selected: false },
            { txt: "Goodbye World", correct: false, selected: false },
            { txt: "First Program", correct: false, selected: false },
        ]
    },
    { 
        number: 2,
        question: 'HTML means: ',
        answers: [
            { txt: "Hello Text Markup Language", correct: false, selected: false },
            { txt: "Hyper Text Markup Language", correct: true, selected: false },
            { txt: "Hippo Text Markup Language", correct: false, selected: false },
        ]
    },
    { 
        number: 3,
        question: 'To learn programming we need a',
        answers: [
            { txt: "Robot", correct: false, selected: false },
            { txt: "Computer", correct: true, selected: false },
            { txt: "Cooking Oven", correct: false, selected: false },
        ]
    },
    { 
        number: 4,
        question: 'All websites are described in this file',
        answers: [
            { txt: "CSS", correct: false, selected: false },
            { txt: "Plain Text", correct: false, selected: false },
            { txt: "HTML", correct: true, selected: false },
        ]
    },
    { 
        number: 5,
        question: 'We write the style of a website in',
        answers: [
            { txt: "CSS", correct: true, selected: false },
            { txt: "Plain Text", correct: false, selected: false },
            { txt: "Binary", correct: false, selected: false },
        ]
    }
];

let begin = true;

function startQuiz(selectedQuestion, score, questionNumber) {

    const randomQuestion = questions[selectedQuestion].number + " " + questions[selectedQuestion].question;

    const questionHeader = document.getElementById('question');
    questionHeader.innerText = randomQuestion;

    let selection = "";

    const a1 = document.getElementById('a1');
    a1.innerText = questions[selectedQuestion].answers[0].txt;
    a1.value = questions[selectedQuestion].answers[0].correct;

    const a2 = document.getElementById('a2');
    a2.innerText = questions[selectedQuestion].answers[1].txt;
    a2.value = questions[selectedQuestion].answers[1].correct;

    const a3 = document.getElementById('a3');
    a3.innerText = questions[selectedQuestion].answers[2].txt;
    a3.value = questions[selectedQuestion].answers[2].correct;

    const answers = [a1, a2, a3];
    answers.forEach( (a) => {
        a.addEventListener('click', () => {

            selection = a.value;

                if (a.value !== "true") {
                    a.removeAttribute('class', 'answer-btn correct');
                    a.setAttribute('class', 'answer-btn false');
                    }

                if (a.value === "true") {
                    score++;
                    a.removeAttribute('class', 'answer-btn false');
                    a.setAttribute('class', 'answer-btn correct');
                }
        });
    });

    const lastQuestionNumber = 5;

    const scoreModal = document.getElementById('score-modal');
    const msg = document.getElementById('message');
    const scoreTag = document.getElementById('score-tag');

    const resultBtn = document.getElementById('result');
    resultBtn.style.display = 'none'; 
    if (questions[selectedQuestion].number === lastQuestionNumber) {
            resultBtn.style.display = 'block';
    }
    resultBtn.addEventListener('click', () => { 
        scoreModal.style.display = 'block';
        scoreTag.innerText = 'Correct Answers: ' + score + '/' + lastQuestionNumber;
        if (score > 2) {
            msg.innerText = `Congratulations!`;
        }
        if (score < 3) {
            msg.innerText = `It's ok. You can try again.`;
        }
    });

    const nextBtn = document.getElementById('next');

    if (selectedQuestion === lastQuestionNumber - 1) { nextBtn.style.display = 'none'; }
    
    nextBtn.addEventListener('click', () => {
        selection = "";

        answers.forEach( (a) => { 
            a.removeAttribute('class', 'answer-btn correct');
            a.removeAttribute('class', 'answer-btn false');
            a.setAttribute('class', 'answer-btn');
            });

        begin = false;
        if (questionNumber < lastQuestionNumber) {
            questionNumber++;
            startQuiz(questionNumber, score);
        }
    });

    const retryBtn = document.getElementById('retry');
    retryBtn.addEventListener('click', () => window.location.reload());

}

if (begin) {
    startQuiz(0, 0, 0);
}
