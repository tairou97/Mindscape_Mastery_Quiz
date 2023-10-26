const importedQuestions = require("./data.js");

const figlet = require("figlet");
const gradient = require('gradient-string');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(importedQuestions);

const players = [];
let currentQuestionIndex = 0;

function startGame() {
  console.log(gradient.instagram(figlet.textSync('                Welcome  to ')));
  console.log(gradient.instagram(figlet.textSync('Mindscape  Mastery \n')));
  console.log(gradient.instagram(figlet.textSync('                            Quiz !\n')));

  rl.question(gradient.fruit('Geben Sie die Anzahl der Spieler ein: '), (numPlayers) => {
    createPlayers(parseInt(numPlayers, 10));
  });
}

function createPlayers(numPlayers) {
  if (numPlayers > 0) {
    rl.question(gradient.pastel(`Geben Sie den Namen des Spielers ein: ${players.length + 1}: `), (playerName) => {
      players.push({ name: playerName, score: 0 });
      createPlayers(numPlayers - 1);
    });
  } else {
    console.log(gradient.passion('\nSpiel gestartet!\n'));
    askQuestion();
  }
}

function printScores() {
  console.log(gradient.cristal('Aktuelle Punktestände'));
  players.forEach((player) => {
    console.log(gradient.cristal(`${player.name}: ${player.score} Punkte`));
  });
}

function askQuestion() {
  if (currentQuestionIndex < importedQuestions.length) {
    const currentQuestion = importedQuestions[currentQuestionIndex];

    const askNextQuestion = () => {
      currentQuestionIndex++;
      printScores();
      askQuestion();
    };

    const askForAnswer = (player) => {
      rl.question(`${player.name}, ${currentQuestion.question}\n>`, (userAnswer) => {
        if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
          console.log(gradient.mind('Richtig! 100 Punkte für ' + player.name + '\n'));
          player.score += 100;
          checkForWinner();
        } else {
          console.log(gradient.passion(`Falsch. Die richtige Antwort ist: ${currentQuestion.answer}\n`));
          player.score -= 50;
          checkForWinner();
        }
      });
    };

    const checkForWinner = () => {
      const winner = players.find((player) => player.score >= 600);
      if (winner) {
        console.log(gradient.instagram(figlet.textSync(`  wir haben unsere gewinner `)));
        console.log(gradient.instagram(`🎉${winner.name} gewinnt das Spiel mit ${winner.score}Punkten. Herzlichen Glückwunsch!\n🎉`));
        rl.close();
      } else {
        askNextQuestion();
      }
    };

    const currentPlayer = players[currentQuestionIndex % players.length];
    askForAnswer(currentPlayer);
  } else {
    console.log('Keine weiteren Fragen. Vielen Dank fürs Spielen!.\n');
    rl.close();
  }
}
startGame();


