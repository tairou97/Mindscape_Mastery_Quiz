

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

const questions = [
  {
    question: gradient.fruit('Welche Farbe hat der Himmel an einem klaren Tag? (Blau)'),
    answer: 'Blau',
  },
  {
    question: gradient.fruit('Wie viele Finger hat ein durchschnittlicher Mensch? (5)'),
    answer: '5',
  },
  {
    question: gradient.fruit('Was ist das Gegenteil von "oben"? (Unten)'),
    answer: 'Unten',
  },
  {
    question: gradient.fruit('Was ergibt 2 + 2? (4)'),
    answer: '4',
  },
  {
    question: gradient.fruit('Welches Bundesland hat Magdeburg als Hauptstadt? (Sachsen-Anhalt)'),
    answer: 'Sachsen-Anhalt',
  },
  {
    question: gradient.fruit('In welchem Bundesland befindet sich die Stadt Düsseldorf? (Nordrhein-Westfalen)'),
    answer: 'Nordrhein-Westfalen',
  },
  {
    question: gradient.fruit('Wie nennt man das Bundesland mit Wiesbaden als Hauptstadt? (Hessen)'),
    answer: 'Hessen',
  },
  {
    question: gradient.fruit('Welches Bundesland hat Potsdam als Hauptstadt? (Brandenburg)'),
    answer: 'Brandenburg',
  },
  {
    question: gradient.fruit('In welchem Bundesland liegt die Stadt Kiel? (Schleswig-Holstein)'),
    answer: 'Schleswig-Holstein',
  },
  {
    question: gradient.fruit('Wie heißt die Hauptstadt von Sachsen? (Dresden)'),
    answer: 'Dresden',
  },
  {
    question: gradient.fruit('Welches Bundesland hat Erfurt als Hauptstadt? (Thüringen)'),
    answer: 'Thüringen',
  },
  {
    question: gradient.fruit('In welchem Bundesland befindet sich die Stadt Saarbrücken? (Saarland)'),
    answer: 'Saarland',
  },
  {
    question: gradient.fruit('Wie nennt man das Bundesland mit Schwerin als Hauptstadt? (Mecklenburg-Vorpommern)'),
    answer: 'Mecklenburg-Vorpommern',
  },
  {
    question: gradient.fruit('Welches Bundesland hat Stuttgart als Hauptstadt? (Baden-Württemberg)'),
    answer: 'Baden-Württemberg',
  },
  {
    question: gradient.fruit('Wie heißt das flächenmäßig größte Bundesland in Deutschland? (Bayern)'),
    answer: 'Bayern',
  },
  {
    question: gradient.fruit('Welcher Fluss bildet die Grenze zwischen Deutschland und Frankreich? (Rhein)'),
    answer: 'Rhein',
  },
  {
    question: gradient.fruit('Welches Bundesland ist berühmt für seine schöne Küste entlang der Nord- und Ostsee? (Schleswig-Holstein)'),
    answer: 'Schleswig-Holstein',
  },
  {
    question: gradient.fruit('Wie heißt das Gebäude des deutschen Bundestags in Berlin? (Reichstag)'),
    answer: 'Reichstag',
  },
  {
    question: gradient.fruit('In welchem Bundesland findet man den Schwarzwald? (Baden-Württemberg)'),
    answer: 'Baden-Württemberg',
  },
  {
    question: gradient.fruit('Welches Bundesland ist das größte nach Fläche und Bevölkerung? (Nordrhein-Westfalen)'),
    answer: 'Nordrhein-Westfalen',
  },
  {
    question: gradient.fruit('Wie nennt man das Gebirge, das die Grenze zwischen Deutschland und Österreich bildet? (Alpen)'),
    answer: 'Alpen',
  },
  {
    question: gradient.fruit('In welchem Bundesland findet man die Insel Rügen, die für ihre Kreidefelsen bekannt ist? (Mecklenburg-Vorpommern)'),
    answer: 'Mecklenburg-Vorpommern',
  },
  {
    question: gradient.fruit('Welches deutsche Bundesland wird oft als "das Land der tausend Seen" bezeichnet? (Mecklenburg-Vorpommern)'),
    answer: 'Mecklenburg-Vorpommern',
  },
  {
    question: gradient.fruit('In welchem Bundesland befindet sich der Schwarzwald, ein berühmtes Mittelgebirge? (Baden-Württemberg)'),
    answer: 'Baden-Württemberg',
  },
  {
    question: gradient.fruit('Wie heißt die Hauptstadt von Bayern? (München)'),
    answer: 'München',
  },
  {
    question: gradient.fruit('In welchem Bundesland liegt die Stadt Köln? (Nordrhein-Westfalen)'),
    answer: 'Nordrhein-Westfalen',
  },
  {
    question: gradient.fruit('Was ist der höchste Berg in Deutschland? (Die Zugspitze)'),
    answer: 'Die Zugspitze',
  },
  {
    question: gradient.fruit('Welcher Fluss fließt durch Frankfurt, ein wichtiges Finanzzentrum in Deutschland? (Der Main)'),
    answer: 'Der Main',
  },
  {
    question: gradient.fruit('In welchem Bundesland befindet sich die Stadt Hamburg? (Hamburg)'),
    answer: 'Hamburg',
  },
  {
    question: gradient.fruit('Welches deutsche Bundesland grenzt an Dänemark? (Schleswig-Holstein)'),
    answer: 'Schleswig-Holstein',
  },
  {
    question: gradient.fruit('Was ist der Name der berühmten Kirche in München, bekannt für ihr Zwiebelturm-Design? (Frauenkirche)'),
    answer: 'Frauenkirche',
  },
  {
    question: gradient.fruit('In welchem Bundesland liegt die Stadt Frankfurt am Main? (Hessen)'),
    answer: 'Hessen',
  },
  {
    question: gradient.fruit('Was brauchen Pflanzen zum Wachsen? (Wasser und Sonnenlicht)'),
    answer: 'Wasser und Sonnenlicht',
  },
  {
    question: gradient.fruit('Was kommt nach Montag? (Dienstag)'),
    answer: 'Dienstag',
  },
  {
    question: gradient.fruit('Welches Tier sagt "Miau"? (Katze)'),
    answer: 'Katze',
  },
  {
    question: gradient.fruit('Wie viele Räder hat ein Fahrrad? (2)'),
    answer: '2',
  },
  {
    question: gradient.fruit('Was ist die Hauptstadt von Deutschland? (Berlin)'),
    answer: 'Berlin',
  },
  {
    question: gradient.fruit('Wie viele Bundesländer hat Deutschland? (16)'),
    answer: '16',
  },
  {
    question: gradient.fruit('Welches deutsche Bundesland ist für sein Bier und das Oktoberfest bekannt? (Bayern)'),
    answer: 'Bayern',
  },
  {
    question: gradient.fruit('In welchem Bundesland findet man die Stadt Hamburg? (Hamburg)'),
    answer: 'Hamburg',
  },
  {
    question: gradient.fruit('Welcher Fluss fließt durch Berlin, der Hauptstadt Deutschlands? (Spree)'),
    answer: 'Spree',
  },
  {
    question: gradient.fruit('Welches Schloss in Bayern ist das berühmteste Deutschlands? (Schloss Neuschwanstein)'),
    answer: 'Schloss Neuschwanstein',
  },
  {
    question: gradient.fruit('Welche Farbe hat ein Apfel? (Rot oder grün)'),
    answer: 'Rot oder grün',
  },
  {
    question: gradient.fruit('Womit schreibt man auf Papier? (Kugelschreiber oder Bleistift)'),
    answer: 'Kugelschreiber oder Bleistift',
  },
  {
    question: gradient.fruit('Welcher Planet ist der Sonne am nächsten? (Merkur)'),
    answer: 'Merkur',
  },
  {
    question: gradient.fruit('Wie viele Seiten hat ein Dreieck? (3)'),
    answer: '3',
  },
  {
    question: gradient.fruit('Welcher Planet ist der größte in unserem Sonnensystem? (Jupiter)'),
    answer: 'Jupiter',
  },
  {
    question: gradient.fruit('Was sammeln Bienen aus Blumen? (Nektar)'),
    answer: 'Nektar',
  },
  {
    question: gradient.fruit('Was ist die Hauptstadt von Frankreich? (Paris)'),
    answer: 'Paris',
  },
  {
    question: gradient.fruit('Was verwendet man, um entfernte Objekte zu sehen? (Teleskop)'),
    answer: 'Teleskop',
  },
  {
    question: gradient.fruit('Wie viele Kontinente gibt es auf der Erde? (7)'),
    answer: '7',
  },
  {
    question: gradient.fruit('Wie nennt man das Innere eines Atoms? (Kern)'),
    answer: 'Kern',
  },
  {
    question: gradient.fruit('Was ist das chemische Symbol für Wasser? (H2O)'),
    answer: 'H2O',
  },
  {
    question: gradient.fruit('Was ist das größte Säugetier auf der Erde? (Blauwal)'),
    answer: 'Blauwal',
  },
  {
    question: gradient.fruit('Was ist das chemische Symbol für Sauerstoff? (O)'),
    answer: 'O',
  },
  {
    question: gradient.fruit('Welcher Planet ist der kleinste in unserem Sonnensystem? (Merkur)'),
    answer: 'Merkur',
  },
  {
    question: gradient.fruit('Welches Gas atmen Menschen aus? (Kohlendioxid)'),
    answer: 'Kohlendioxid',
  },
  {
    question: gradient.fruit('Welche Farbe hat eine Orange? (Orange)'),
    answer: 'Orange',
  },
  {
    question: gradient.fruit('Welche Stadt Deutschlands hat den Spitznamen "Hauptstadt der Spione" aufgrund ihrer Geschichte im Kalten Krieg? (Berlin)'),
    answer: 'Berlin',
  },
  {
    question: gradient.fruit('In welcher deutschen Hafenstadt wurde der berühmte "Fischmarkt" am Sonntagmorgen zum Anziehungspunkt für Einheimische und Touristen? (Hamburg)'),
    answer: 'Hamburg',
  },
  {
    question: gradient.fruit('Welche Hansestadt kann ihre Gründung bis ins 8. Jahrhundert zurückverfolgen und wird oft als "Stadt der Bremer Stadtmusikanten" bezeichnet? (Bremen)'),
    answer: 'Bremen',
  },
  {
    question: gradient.fruit('Was ist das chemische Symbol für Gold? (Au)'),
    answer: 'Au',
  },
  {
    question: gradient.fruit('Wie viele Beine hat eine Spinne normalerweise? (8)'),
    answer: '8',
  },
  {
    question: gradient.fruit('Was ist das größte Organ im menschlichen Körper? (Haut)'),
    answer: 'Haut',
  },
  {
    question: gradient.fruit('Wie nennt man einen Hundewelpen? (Welpe)'),
    answer: 'Welpe',
  },
  {
    question: gradient.fruit('Was ist das chemische Symbol für Silber? (Ag)'),
    answer: 'Ag',
  },
];



shuffleArray(questions);

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
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];

    const askNextQuestion = () => {
      currentQuestionIndex++;
      printScores();
      askQuestion();
    };

    const checkForWinner = () => {
      const winner = players.find((player) => player.score >= 600);
      if (winner) {
        console.log(gradient.instagram(figlet.textSync(`Game over!`)));
        console.log(gradient.instagram(`${winner.name} gewinnt das Spiel mit ${winner.score}Punkten. Herzlichen Glückwunsch!\n`));
        rl.close();
      } else {
        askNextQuestion();
      }
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

    const currentPlayer = players[currentQuestionIndex % players.length];
    askForAnswer(currentPlayer);
  } else {
    console.log('Keine weiteren Fragen. Vielen Dank fürs Spielen!.\n');
    rl.close();
  }
}
startGame();


