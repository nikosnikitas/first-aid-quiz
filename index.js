
/*  //////////////////////////////////////////////////////////////////////////
    // INFO:                                                                //
    // A Quiz Game with HTML, CSS and JS.                                   //
    // Author: Nikos-Nikitas                                                //
    // GitHub: https://github.com/nikosnikitas                              //
    // Check the blog for the questions' resources                          //
    // at the link below:                                                   //
    // https://firstaidprotesvoithies.blogspot.com/2022/06/blog-post.html   //
    //////////////////////////////////////////////////////////////////////////  */

const questions = [
    { 
        number: 1,
        question: 'Το άτομο που προσφέρει βοήθεια πρέπει:',
        answers: [
            { txt: "Να εμπνέει εμπιστοσύνη", correct: true, selected: false },
            { txt: "Να έχει ειδικό σήμα", correct: false, selected: false },
            { txt: "Να γνωρίζει οδήγηση", correct: false, selected: false },
        ]
    },
    { 
        number: 2,
        question: 'Όταν καλούμε το ΕΚΑΒ:',
        answers: [
            { txt: "Δίνουμε τον αριθμό αυτοκινήτου μας", correct: false, selected: false },
            { txt: "Διευκρινίζουμε για τυχόν ιδιαίτερες συνθήκες του περιβάλλοντος", correct: true, selected: false },
            { txt: "Αναφέρουμε το θύμα και τίποτα άλλο", correct: false, selected: false },
        ]
    },
    { 
        number: 3,
        question: 'Όταν εισερχόμαστε σε κλειστό χώρο που υποψιαζόμαστε ότι υπάρχει  μονοξείδιο του άνθρακα:',
        answers: [
            { txt: "Δεν ανοίγουμε τα παράθυρα", correct: false, selected: false },
            { txt: "Φοράμε ειδική μάσκα", correct: true, selected: false },
            { txt: "Μένουμε στον χώρο γιατί αν υπάρχει μονοξείδιο του άνθρακα θα το μυρίσουμε", correct: false, selected: false },
        ]
    },
    { 
        number: 4,
        question: 'Όταν σε κλειστό χώρο υπάρχει καπνός ή φωτιά:',
        answers: [
            { txt: "Προχωράμε σκυφτά και ανοίγουμε τα παράθυρα", correct: false, selected: false },
            { txt: "Ανοίγουμε τα παράθυρα", correct: false, selected: false },
            { txt: "Προχωράμε σκυφτά και δεν ανοίγουμε τα παράθυρα", correct: true, selected: false },
        ]
    },
    { 
        number: 5,
        question: 'Το φαρμακείο μας πρέπει να περιέχει:',
        answers: [
            { txt: "Παραμάνες", correct: true, selected: false },
            { txt: "Μεταλλικό νερό", correct: false, selected: false },
            { txt: "Γάντια κουζίνας", correct: false, selected: false },
        ]
    },
    { 
        number: 6,
        question: 'Αν ένα άτομο βρίσκεται στο έδαφος…',
        answers: [
            { txt: "Του κάνουμε κατευθείαν καρδιοαναπνευστική αναζωογόνηση;", correct: false, selected: false },
            { txt: "Το βάζουμε να καθίσει;", correct: false, selected: false },
            { txt: "Το πιάνουμε από τους ώμους και το κουνάμε ελαφρά ρωτώντας το αν είναι καλά;", correct: true, selected: false },
        ]
    },
    { 
        number: 7,
        question: 'Όταν βάζουμε τον πάσχοντα σε θέση ανάνηψης…',
        answers: [
            { txt: "Βάζουμε το κεφάλι του σε ελαφριά έκταση;", correct: true, selected: false },
            { txt: "Προσέχουμε να έχει ίσια τα πόδια του;", correct: false, selected: false },
            { txt: "του δίνουμε το  « φιλί της ζωής»;", correct: false, selected: false },
        ]
    },
    { 
        number: 8,
        question: 'Στην καρδιοαναπνευστική αναζωογόνηση, κάνουμε:',
        answers: [
            { txt: "40 θωρακικές συμπιέσεις και 4 εμφυσήσεις;", correct: false, selected: false },
            { txt: "30 θωρακικές συμπιέσεις και 2 εμφυσήσεις;", correct: true, selected: false },
            { txt: "30 θωρακικές συμπιέσεις και 4 εμφυσήσεις;", correct: false, selected: false },
        ]
    },
    { 
        number: 9,
        question: 'Πότε σταματάμε την καρδιοαναπνευστική αναζωογόνηση, αν το άτομο δεν συνέλθει και δεν έχει έρθει βοήθεια;',
        answers: [
            { txt: "Όταν κουραστούμε;", correct: true, selected: false },
            { txt: "Μετά από 10 λεπτά;", correct: false, selected: false },
            { txt: "Μετά από 30 λεπτά;", correct: false, selected: false },
        ]
    },
    { 
        number: 10,
        question: 'Στην πνιγμονή, όταν το θύμα βήχει δυνατά:',
        answers: [
            { txt: "Το χτυπάμε στην πλάτη;", correct: false, selected: false },
            { txt: "Μένουμε δίπλα του και το ενθαρρύνουμε να συνεχίσει;", correct: true, selected: false },
            { txt: "Του κάνουμε τον χειρισμό Χάιμλιχ;", correct: false, selected: false },
        ]
    },
    { 
        number: 11,
        question: 'Στην πνιγμονή, όταν το θύμα δεν μπορεί να βήξει: ',
        answers: [
            { txt: "Του δίνουμε χτυπήματα στο στέρνο;", correct: false, selected: false },
            { txt: "Το ενθαρρύνουμε να βήξει;", correct: false, selected: false },
            { txt: "Το αναγκάζουμε να σκύψει μπροστά και του δίνουμε χτυπήματα ανάμεσα στις ωμοπλάτες;", correct: true, selected: false },
        ]
    },
    { 
        number: 12,
        question: 'Σε πνιγμό στην θάλασσα,  αν το θύμα δεν αναπνέει:',
        answers: [
            { txt: "Το βγάζουμε έξω και μετά του δίνουμε τις πρώτες βοήθειες;", correct: false, selected: false },
            { txt: "Ξεκινάμε καρδιοαναπνευστική αναζωογόνηση με 5 εμφυσήσεις μέσα στο νερό;", correct: true, selected: false },
            { txt: "Ξεκινάμε καρδιοαναπνευστική αναζωογόνηση με 2 εμφυσήσεις μέσα στο νερό;", correct: false, selected: false },
        ]
    },
    { 
        number: 13,
        question: 'Σε έγκαυμα:',
        answers: [
            { txt: "Βάζουμε πάγο;", correct: false, selected: false },
            { txt: "Ξεπλένουμε με νερό 2-8 βαθμών Κελσίου;", correct: true, selected: false },
            { txt: "Χρησιμοποιούμε πυροσβεστήρα;", correct: false, selected: false },
        ]
    },
    { 
        number: 14,
        question: 'Καλύπτουμε το έγκαυμα με:',
        answers: [
            { txt: "Με χνουδωτή πετσέτα;", correct: false, selected: false },
            { txt: "Κρέμα με ελαιώδη σύσταση;", correct: false, selected: false },
            { txt: "Με  καθαρό πανί;", correct: true, selected: false },
        ]
    },
    { 
        number: 15,
        question: 'Σε χημικό έγκαυμα στο μάτι:',
        answers: [
            { txt: "Ξεπλένουμε με νερό για 20 λεπτά;", correct: true, selected: false },
            { txt: "Ξεπλένουμε με νερό για 10 λεπτά;", correct: false, selected: false },
            { txt: "Ξεπλένουμε με νερό για 5 λεπτά;", correct: false, selected: false },
        ]
    },
    { 
        number: 16,
        question: 'Αν έχουν εισέλθει γυαλιά στο χέρι μας, ποια είναι η πρώτη μας ενέργεια:',
        answers: [
            { txt: "Βάζουμε το χέρι κάτω από τρεχούμενο νερό;", correct: true, selected: false },
            { txt: "Τυλίγουμε με γάζα;", correct: false, selected: false },
            { txt: "Βάζουμε το χέρι πάνω από το ύψος της καρδιάς;", correct: false, selected: false },
        ]
    },
    { 
        number: 17,
        question: 'Αν έχει εισέλθει έντομο στην μύτη:',
        answers: [
            { txt: "Το απομακρύνουμε με ένα τσιμπιδάκι;", correct: false, selected: false },
            { txt: "Κλείνουμε το άλλο ρουθούνι και ρουφάμε την μύτη μας;", correct: false, selected: false },
            { txt: "Κλείνουμε το άλλο ρουθούνι και φυσάμε δυνατά;", correct: true, selected: false },
        ]
    },
    { 
        number: 18,
        question: 'Στην ρινορραγία:',
        answers: [
            { txt: "Βάζουμε το θύμα να γύρει το κεφάλι του προς τα πίσω;", correct: false, selected: false },
            { txt: "Βάζουμε το θύμα να γύρει το κεφάλι του ελαφριά μπροστά;", correct: true, selected: false },
            { txt: "Τον βάζουμε να ξαπλώσει;", correct: false, selected: false },
        ]
    },
    { 
        number: 19,
        question: 'Αν υπάρχει βόμβα στο κτίριο:',
        answers: [
            { txt: "Φεύγουμε αμέσως αφήνοντας  πόρτες και παράθυρα ανοιχτά;", correct: true, selected: false },
            { txt: "Φεύγουμε αμέσως αφήνοντας πόρτες και παράθυρα κλειστά;", correct: false, selected: false },
            { txt: "Φεύγουμε αμέσως αφήνοντας τις πόρτες ανοιχτές;", correct: false, selected: false },
        ]
    },
    { 
        number: 20,
        question: 'Σε δάγκωμα φιδιού:',
        answers: [
            { txt: "Καθαρίζουμε την πληγή με οξυζενέ", correct: true, selected: false },
            { txt: "Ρουφάμε το δηλητήριο", correct: false, selected: false },
            { txt: "Βάζουμε  το θύμα να περπατήσει", correct: false, selected: false },
        ]
    },
    { 
        number: 21,
        question: 'Μετά από τσίμπημα μέδουσας:',
        answers: [
            { txt: "Πλένουμε με νερό και σαπούνι", correct: false, selected: false },
            { txt: "Πλένουμε με θαλασσινό νερό", correct: true, selected: false },
            { txt: "Πλένουμε με φυσιολογικό ορό", correct: false, selected: false },
        ]
    },
    { 
        number: 22,
        question: 'Για να απομακρύνουμε τα υπολείμματα των νηματοκυστών της μέδουσας:',
        answers: [
            { txt: "Τρίβουμε την περιοχή", correct: false, selected: false },
            { txt: "Χρησιμοποιούμε νερό και σαπούνι", correct: false, selected: false },
            { txt: "Χρησιμοποιούμε αφρό ξυρίσματος και μια πιστωτική κάρτα", correct: true, selected: false },
        ]
    },
    { 
        number: 23,
        question: 'Στην στηθάγχη, ο πόνος:',
        answers: [
            { txt: "Έχει διάρκεια 1-2 λεπτά", correct: false, selected: false },
            { txt: "Έχει διάρκεια 10-20 λεπτά", correct: false, selected: false },
            { txt: "Έχει διάρκεια 5-10 λεπτά", correct: true, selected: false },
        ]
    },
    { 
        number: 24,
        question: 'Σε περίπτωση εμφράγματος:',
        answers: [
            { txt: "Δεν επιτρέπουμε καμιά μετακίνηση από τον ασθενή", correct: true, selected: false },
            { txt: "Τον βάζουμε να βαδίσει μέσα στο χώρο", correct: false, selected: false },
            { txt: "Του δίνουμε λίγο νερό", correct: false, selected: false },
        ]
    },
    { 
        number: 25,
        question: 'Σε κρυοπαγήματα ζεσταίνουμε το μέλος:',
        answers: [
            { txt: "Κάνοντας μαλάξεις ή τρίβοντας το", correct: false, selected: false },
            { txt: "Καλύπτοντας το, με στεγνά ρούχα ή με τα χέρια μας", correct: true, selected: false },
            { txt: "Βάζοντας το, δίπλα σε θερμαντικό σώμα ή φωτιά", correct: false, selected: false },
        ]
    },
    { 
        number: 26,
        question: 'Αν μετά από ατύχημα, το θύμα έχει ανισοκορία, υποψιαζόμαστε:',
        answers: [
            { txt: "Έμφραγμα;", correct: false, selected: false },
            { txt: "Στηθάγχη;", correct: false, selected: false },
            { txt: "Κρανιοεγκεφαλική κάκωση;", correct: true, selected: false },
        ]
    },
    { 
        number: 27,
        question: 'Στην θερμοπληξία, σταματά:',
        answers: [
            { txt: "Η διάρροια;", correct: false, selected: false },
            { txt: "Η εφίδρωση;", correct: true, selected: false },
            { txt: "Η ναυτία;", correct: false, selected: false },
        ]
    },
    { 
        number: 28,
        question: 'Η θερμική εξάντληση εκδηλώνεται με:',
        answers: [
            { txt: "Υπερβολική εφίδρωση;", correct: true, selected: false },
            { txt: "Θερμοκρασία  σώματος άνω των 40 βαθμών Κελσίου;", correct: false, selected: false },
            { txt: "Υπέρταση;", correct: false, selected: false },
        ]
    },
    { 
        number: 29,
        question: 'Σε τραύμα στο τριχωτό της κεφαλής:',
        answers: [
            { txt: "Πλένουμε με φυσιολογικό ορό;", correct: false, selected: false },
            { txt: "Πλένουμε με νερό και σαπούνι;", correct: false, selected: false },
            { txt: "Ασκούμε ήπια πίεση με μια αποστειρωμένη γάζα;", correct: true, selected: false },
        ]
    },
    { 
        number: 30,
        question: 'Σε ακρωτηριασμό, το αποκομμένο μέλος το πλένουμε με:',
        answers: [
            { txt: "Αντισηπτικό;", correct: false, selected: false },
            { txt: "Φυσιολογικό ορό;", correct: true, selected: false },
            { txt: "Νερό και σαπούνι;", correct: false, selected: false },
        ]
    },
    { 
        number: 31,
        question: 'Σε τραυματισμό με μαχαίρι, αν το μαχαίρι παραμένει στο τραύμα:',
        answers: [
            { txt: "Το τραβάμε όσο πιο γρήγορα γίνεται;", correct: false, selected: false },
            { txt: "Δεν το μετακινούμε καθόλου", correct: true, selected: false },
            { txt: "Το μετακινούμε ελαφριά;", correct: false, selected: false },
        ]
    },
    { 
        number: 32,
        question: 'Σε πληγή που αιμορραγεί, όταν η γάζα έχει εμποτιστεί με αίμα:',
        answers: [
            { txt: "Προσθέτουμε κι άλλη γάζα πάνω από αυτή;", correct: true, selected: false },
            { txt: "Την αφαιρούμε και βάζουμε άλλη;", correct: false, selected: false },
            { txt: "Την αφαιρούμε εντελώς;", correct: false, selected: false },
        ]
    },
    { 
        number: 33,
        question: 'Σε ποια περίπτωση χορηγούμε ασπιρίνη;',
        answers: [
            { txt: "Αιμορραγία;", correct: false, selected: false },
            { txt: "Έμφραγμα;", correct: true, selected: false },
            { txt: "Αναφυλαξία;", correct: false, selected: false },
        ]
    },
    { 
        number: 34,
        question: 'Πόσες μέλισσες πρέπει να τσιμπήσουν ταυτόχρονα για να προκληθεί τοξική αντίδραση στον οργανισμό;',
        answers: [
            { txt: "Πάνω από 50;", correct: true, selected: false },
            { txt: "Πάνω από 20;", correct: false, selected: false },
            { txt: "Πάνω από 10;", correct: false, selected: false },
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

    const lastQuestionNumber = 34;

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
        scoreTag.innerText = 'Σωστά: ' + score + '/' + lastQuestionNumber;
        if (score > 17) {
            msg.innerText = `Συγχαρητήρια!`;
        }
        if (score < 17) {
            msg.innerText = `Δεν πειράζει. Διαβάστε τα άρθρα μας και προσπαθήστε ξανά.`;
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
