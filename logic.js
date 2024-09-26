const data = {
    fragen: [
        {
            "titel": 'Was beschreibt der Begriff "Albedo"?',
            "antwortmöglichkeiten": [
                "Die Geschwindigkeit, mit der ein Gletscher schmilzt.",
                "Das Maß für die Rückstrahlung von Licht durch eine Oberfläche.",
                "Die Größe der Fläche, die von einer Lawine betroffen ist.",
                "Die Tiefe eines Stausees."
            ],
            "richtige_antwort": "Das Maß für die Rückstrahlung von Licht durch eine Oberfläche."
        },
        {
            "titel": "Welches Ereignis wird als Bergsturz bezeichnet?",
            "antwortmöglichkeiten": [
                "Eine schleichende Erosion eines Berges.",
                "Eine langsame Verschiebung der Erdkruste.",
                "Eine großvolumige, schnelle Fels- und Schuttbewegung aus steilen Bergflanken.",
                "Eine plötzliche Schmelze eines Gletschers."
            ],
            "richtige_antwort": "Eine großvolumige, schnelle Fels- und Schuttbewegung aus steilen Bergflanken."
        },
        {
            "titel": "Was kennzeichnet die extensive Bewirtschaftung?",
            "antwortmöglichkeiten": [
                "Die intensive Nutzung von kleinen Landflächen.",
                "Der Einsatz moderner Technologien zur Steigerung der Erträge.",
                "Die großflächige Nutzung von Landflächen bei traditioneller Landwirtschaft.",
                "Der Anbau von Pflanzen in Gewächshäusern."
            ],
            "richtige_antwort": "Die großflächige Nutzung von Landflächen bei traditioneller Landwirtschaft."
        },
        {
            "titel": "Wie entstehen Faltengebirge?",
            "antwortmöglichkeiten": [
                "Durch Erosion von Flüssen über Millionen Jahre.",
                "Durch das Zusammenpressen und Auffalten von tektonischen Platten.",
                "Durch die Aktivität von Vulkanen.",
                "Durch das Einfrieren und Schmelzen von Gletschern"
            ],
            "richtige_antwort": "Durch das Zusammenpressen und Auffalten von tektonischen Platten."
        },
        {
            "titel": "Was ist ein Gletscher?",
            "antwortmöglichkeiten": [
                "Eine große Ansammlung von Sanddünen.",
                "Eine Eismasse, die sich aufgrund von Temperatur und Schubspannung bewegt.",
                "Ein Bereich mit dichten Wäldern in Gebirgen.",
                "Ein künstlich angelegter See zur Wasserspeicherung."
            ],
            "richtige_antwort": "Eine Eismasse, die sich aufgrund von Temperatur und Schubspannung bewegt."
        },
        {
            "titel": "Wie werden die klimatisch bedingten Vegetationszonen in Gebirgen bezeichnet?",
            "antwortmöglichkeiten": [
                "Vegetationszonen",
                "Höhenstufen",
                "Klimazonen",
                "Vegetationsstufen"
            ],
            "richtige_antwort": "Höhenstufen"
        },
        {
            "titel": "Was ist eine Lawine?",
            "antwortmöglichkeiten": [
                "Eine Massenbewegung von Erde und Steinen.",
                "Eine schnell ablaufende Schnee-, Eis- oder Schlammbewegung von Berghängen.",
                "Ein schleichender Erosionsprozess in Bergregionen.",
                "Eine Form von Gletscherbewegung."
            ],
            "richtige_antwort": "Eine schnell ablaufende Schnee-, Eis- oder Schlammbewegung von Berghängen."
        },
        {
            "titel": "Wie unterscheidet sich eine Mure von einer Lawine?",
            "antwortmöglichkeiten": [
                "Eine Mure ist flüssig, während eine Lawine fest ist.",
                "Eine Mure besteht aus Steinen oder Erde, eine Lawine aus Schnee oder Eis.",
                "Eine Mure ist langsamer als eine Lawine.",
                "Eine Mure ist immer kleiner als eine Lawine."
            ],
            "richtige_antwort": "Eine Mure besteht aus Steinen oder Erde, eine Lawine aus Schnee oder Eis."
        },
        {
            "titel": 'Was beschreibt der Begriff "sanfter Tourismus"?',
            "antwortmöglichkeiten": [
                "Ein Tourismusmodell, das große Touristenzentren bevorzugt.",
                "Ein umweltfreundlicher Tourismus, der die Natur und Kultur schont.",
                "Ein Massentourismus, der sich auf schnelle Reisen konzentriert.",
                "Ein hoher Energieverbrauch bei touristischen Aktivitäten."
            ],
            "richtige_antwort": "Ein umweltfreundlicher Tourismus, der die Natur und Kultur schont."
        },
        {
            "titel": "Welcher Zweck wird durch ein Wasserkraftwerk erfüllt?",
            "antwortmöglichkeiten": [
                "Speicherung von Wasser für die Landwirtschaft.",
                "Umwandlung von Wasserenergie in elektrische Energie.",
                "Kühlung von Gletschern.",
                "Schaffung von Stauseen zur Freizeitnutzung."
            ],
            "richtige_antwort": "Umwandlung von Wasserenergie in elektrische Energie."
        },
    ]
};

let correctAnswers = 0;
let wrongAnswers = 0;
let answerSelected = false;

let i = 0;

const testContainer = document.querySelector(".test-container");

const questionTitleField = document.querySelector(".title-of-question");

const firstAnswer = document.querySelector(".answer1");
const secondAnswer = document.querySelector(".answer2");
const thirdAnswer = document.querySelector(".answer3");
const fourthAnswer = document.querySelector(".answer4");

function askQuestions(startNumber) {
    questionTitleField.textContent = data.fragen[i].titel;
    firstAnswer.querySelector(".answer-text").textContent = data.fragen[i].antwortmöglichkeiten[0];
    secondAnswer.querySelector(".answer-text").textContent = data.fragen[i].antwortmöglichkeiten[1];
    thirdAnswer.querySelector(".answer-text").textContent = data.fragen[i].antwortmöglichkeiten[2];
    fourthAnswer.querySelector(".answer-text").textContent = data.fragen[i].antwortmöglichkeiten[3];
};

firstAnswer.addEventListener("click", () => checkAnswer(firstAnswer, data.fragen[i].richtige_antwort));
secondAnswer.addEventListener("click", () => checkAnswer(secondAnswer, data.fragen[i].richtige_antwort));
thirdAnswer.addEventListener("click", () => checkAnswer(thirdAnswer, data.fragen[i].richtige_antwort));
fourthAnswer.addEventListener("click", () => checkAnswer(fourthAnswer, data.fragen[i].richtige_antwort));

function checkAnswer(element, correctAnswer) {
    answerSelected = true;
    const answerText = element.querySelector(".answer-text");

    if (answerText.textContent === correctAnswer) {
        correctAnswers++;
        answerText.textContent = ""; 

        element.style.backgroundImage = "url('correct.svg')";
        element.style.pointerEvents = "none";

        setTimeout(function() {
            element.style.backgroundImage = "";
            element.style.pointerEvents = "all";
        }, 1500)
    } else {
        wrongAnswers++;
        answerText.textContent = ""; 
        
        element.style.backgroundImage = "url('wrong.svg')";
        element.style.pointerEvents = "none";

        setTimeout(function() {
            element.style.backgroundImage = "";
            element.style.pointerEvents = "all";
        }, 1500)
    };
    setTimeout(nextQuestion, 1500);
};

function nextQuestion() {
    if (answerSelected) {
        if (i < data.fragen.length - 1) {
            i += 1;
            askQuestions(i);
            answerSelected = false;
        } else if (i = data.fragen.length - 1) {
            showResults(wrongAnswers, correctAnswers);
        };
    } else {
        alert("Du musst zuerst eine Antwort auswählen, um zur nächsten Frage zu kommen.")
    };
};

function showResults(wrong, correct) {
    const url = `results.html`;
    const results = window.open(url, "_blank");

    results.addEventListener("load", () => {
        results.document.querySelector(".correct-answers-display").textContent = correct;
        results.document.querySelector(".wrong-answers-display").textContent = wrong;
    });
};

askQuestions(i);