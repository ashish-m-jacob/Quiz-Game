let questions;

questions = {
  questions: [
    {
      question: "What is the name for the Jewish New Year??",
      answer: "Rosh Hashanah",
      option1: "Hannukah",
      option2: "Yom Kippur",
      option3: "Kwanza",
      option4: "Rosh Hashanah",
    },
    {
      question: "How many blue stripes are there on the U.S. flag?",
      answer: "0",
      option1: "6",
      option2: "7",
      option3: "13",
      option4: "0",
    },
    {
      question:
        "Which one of these characters is not friends with Harry Potter?",
      answer: "Draco Malfoy",
      option1: "Ron Weasley",
      option2: "Neville Longbottom",
      option3: "Draco Malfoy",
      option4: "Hermione Granger",
    },
    {
      question: "What is the color of Donald Duck’s bowtie?",
      answer: "Red",
      option1: "Red",
      option2: "Yellow",
      option3: "Blue",
      option4: "White",
    },
    {
      question: "What was the name of the band Lionel Richie was a part of?",
      answer: "Commodores",
      option1: "King Harvest",
      option2: "Spectrums",
      option3: "Commodores",
      option4: "The Marshall Tucker Band",
    },
    {
      question: "Which animal does not appear in the Chinese zodiac?",
      answer: "Hummingbird",
      option1: "Dragon",
      option2: "Rabbit",
      option3: "Dog",
      option4: "Hummingbird",
    },
    {
      question: "Which country held the 2016 Summer Olympics?",
      answer: "Brazil",
      option1: "China",
      option2: "Ireland",
      option3: "Brazil",
      option4: "Italy",
    },
    {
      question: "Which planet is the hottest?",
      answer: "Venus",
      option1: "Venus",
      option2: "Saturn",
      option3: "Mercury",
      option4: "Mars",
    },
    {
      question: "Who was the only U.S. President to resign?",
      answer: "Richard Nixon",
      option1: "Herbert Hoover",
      option2: "Richard Nixon",
      option3: "George W. Bush",
      option4: "Barack Obama",
    },
    {
      question: "What does the D in D-Day stand for?",
      answer: "Day",
      option1: "Dooms",
      option2: "Dark",
      option3: "Day",
      option4: "Dunkirk",
    },
    {
      question: "In which city can you find the Liberty Bell?",
      answer: "Philadelphia",
      option1: "Washington, D.C.",
      option2: "Boston",
      option3: "Philadelphia",
      option4: "Manhattan",
    },
    {
      question:
        "In Pirates of the Caribbean, what was Captain Jack Sparrow’s ship’s name?",
      answer: "The Black Pearl",
      option1: "The Marauder",
      option2: "The Black Pearl",
      option3: "The Black Python",
      option4: "The Slytherin",
    },
    {
      question: "According to Forrest Gump, life was like…",
      answer: "A box of chocolates",
      option1: "A bag of lemons",
      option2: "A handful of roses",
      option3: "A lollipop",
      option4: "A box of chocolates",
    },
    {
      question:
        "Linda and Bob from Bob’s Burgers have 3 kids. Which one of these characters is not one of them?",
      answer: "Jimmy",
      option1: "Louise",
      option2: "Gene",
      option3: "Jimmy",
      option4: "Tina",
    },
    {
      question:
        "The British band One Direction (rip) was made up of Harry, Louis, Niall, Zayn, and…",
      answer: "Liam",
      option1: "Paul",
      option2: "Callum",
      option3: "Kevin",
      option4: "Liam",
    },
  ],
};

let totalScore = 0;
let completed = [];
let qCounter = 0;
let optChecked = false;

//items to modify
const question = document.getElementById("question");
const rightWrong = document.getElementById("display-result");
const score = document.getElementById("score");

const opt1 = document.getElementById("option-1");
const opt2 = document.getElementById("option-2");
const opt3 = document.getElementById("option-3");
const opt4 = document.getElementById("option-4");

const nextMessage = "Click Next to Proceed";

//Initial hiding

document.getElementById("question-container").style.display = "none";
document.getElementById("result-container").style.display = "none";
document.getElementById("options-container").style.display = "none";
document.getElementById("next-container").style.display = "none";
score.innerHTML = "Score: " + totalScore + "/10";

function resetter() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result-container").style.display = "none";
  document.getElementById("options-container").style.display = "none";
  document.getElementById("next-container").style.display = "none";

  document.getElementById("start-button").style.display = "";
  totalScore = 0;
}

function generateQuestion(number) {
  optChecked = false;

  question.innerHTML = questions.questions[number].question;

  opt1.innerHTML = questions.questions[number].option1;
  opt2.innerHTML = questions.questions[number].option2;
  opt3.innerHTML = questions.questions[number].option3;
  opt4.innerHTML = questions.questions[number].option4;

  answer = questions.questions[number].answer;

  console.log(questions.questions[number].question);
}

function start() {
  document.getElementById("describe").innerHTML =
    "Choose the correct answer among the four options to score a point!. Wrong answer gets you 0 points!";
  document.getElementById("start-button").style.display = "none";

  document.getElementById("question-container").style.display = "";
  document.getElementById("result-container").style.display = "";
  document.getElementById("options-container").style.display = "";
  document.getElementById("next-container").style.display = "";

  goNext();
}

function verify(resultId) {
  if (optChecked == false) {
    if (resultId == answer) {
      totalScore++;
      score.innerHTML = "Score: " + totalScore + "/10";
      rightWrong.innerHTML = "Correct Answer!" + " " + nextMessage;
    } else {
      rightWrong.innerHTML =
        "Wrong Answer! Correct answer was " + answer + ". " + nextMessage;
    }
    optChecked = true;
  } else {
    alert(
      "You cannot choose again for this question! Please click Next to go to the next Question."
    );
  }
}

function goNext() {
  rightWrong.innerHTML = "";
  let number = Math.floor(Math.random() * 15);

  if (qCounter == 10) {
    alert("Your score is " + totalScore + "/10");
    resetter();
  }

  if (completed.indexOf(number) == -1) {
    generateQuestion(number);
    completed.push(number);
    qCounter++;
  } else {
    goNext();
  }
}
