const gradient = require('gradient-string');

const questions = [
    {
        question: gradient.fruit('Welche Farbe hat der Himmel an einem klaren Tag? '),
        answer: 'Blau',
    },
    {
        question: gradient.fruit('Wie viele Finger hat ein durchschnittlicher Mensch? '),
        answer: '5',
    },
    {
        question: gradient.fruit('Was ist das Gegenteil von "oben"? '),
        answer: 'Unten',
    },
    {
        question: gradient.fruit('Was ergibt 2 + 2? '),
        answer: '4',
    },
    {
        question: gradient.fruit('Welches Bundesland hat Magdeburg als Hauptstadt? '),
        answer: 'Sachsen-Anhalt',
    },
    {
        question: gradient.fruit('In welchem Bundesland befindet sich die Stadt Düsseldorf? '),
        answer: 'Nordrhein-Westfalen',
    },
    {
        question: gradient.fruit('Wie nennt man das Bundesland mit Wiesbaden als Hauptstadt?'),
        answer: 'Hessen',
    },
    {
        question: gradient.fruit('Welches Bundesland hat Potsdam als Hauptstadt? '),
        answer: 'Brandenburg',
    },
    {
        question: gradient.fruit('In welchem Bundesland liegt die Stadt Kiel? '),
        answer: 'Schleswig-Holstein',
    },
    {
        question: gradient.fruit('Wie heißt die Hauptstadt von Sachsen? '),
        answer: 'Dresden',
    },
    {
        question: gradient.fruit('Welches Bundesland hat Erfurt als Hauptstadt? '),
        answer: 'Thüringen',
    },
    {
        question: gradient.fruit('In welchem Bundesland befindet sich die Stadt Saarbrücken? '),
        answer: 'Saarland',
    },
    {
        question: gradient.fruit('Wie nennt man das Bundesland mit Schwerin als Hauptstadt? '),
        answer: 'Mecklenburg-Vorpommern',
    },
    {
        question: gradient.fruit('Welches Bundesland hat Stuttgart als Hauptstadt? '),
        answer: 'Baden-Württemberg',
    },
    {
        question: gradient.fruit('Wie heißt das flächenmäßig größte Bundesland in Deutschland? '),
        answer: 'Bayern',
    },
    {
        question: gradient.fruit('Welcher Fluss bildet die Grenze zwischen Deutschland und Frankreich? '),
        answer: 'Rhein',
    },
    {
        question: gradient.fruit('Welches Bundesland ist berühmt für seine schöne Küste entlang der Nord- und Ostsee? '),
        answer: 'Schleswig-Holstein',
    },
    {
        question: gradient.fruit('Wie heißt das Gebäude des deutschen Bundestags in Berlin? '),
        answer: 'Reichstag',
    },
    {
        question: gradient.fruit('In welchem Bundesland findet man den Schwarzwald? '),
        answer: 'Baden-Württemberg',
    },
    {
        question: gradient.fruit('Welches Bundesland ist das größte nach Fläche und Bevölkerung? '),
        answer: 'Nordrhein-Westfalen',
    },
    {
        question: gradient.fruit('Wie nennt man das Gebirge, das die Grenze zwischen Deutschland und Österreich bildet? '),
        answer: 'Alpen',
    },
    {
        question: gradient.fruit('In welchem Bundesland findet man die Insel Rügen, die für ihre Kreidefelsen bekannt ist?  '),
        answer: 'Mecklenburg-Vorpommern',
    },
    {
        question: gradient.fruit('Welches deutsche Bundesland wird oft als "das Land der tausend Seen" bezeichnet? '),
        answer: 'Mecklenburg-Vorpommern',
    },
    {
        question: gradient.fruit('In welchem Bundesland befindet sich der Schwarzwald, ein berühmtes Mittelgebirge? '),
        answer: 'Baden-Württemberg',
    },
    {
        question: gradient.fruit('Wie heißt die Hauptstadt von Bayern? '),
        answer: 'München',
    },
    {
        question: gradient.fruit('In welchem Bundesland liegt die Stadt Köln? '),
        answer: 'Nordrhein-Westfalen',
    },
    {
        question: gradient.fruit('Was ist der höchste Berg in Deutschland? '),
        answer: 'Die Zugspitze',
    },
    {
        question: gradient.fruit('Welcher Fluss fließt durch Frankfurt, ein wichtiges Finanzzentrum in Deutschland? '),
        answer: 'Der Main',
    },
    {
        question: gradient.fruit('In welchem Bundesland befindet sich die Stadt Hamburg? '),
        answer: 'Hamburg',
    },
    {
        question: gradient.fruit('Welches deutsche Bundesland grenzt an Dänemark? '),
        answer: 'Schleswig-Holstein',
    },
    {
        question: gradient.fruit('Was ist der Name der berühmten Kirche in München, bekannt für ihr Zwiebelturm-Design? '),
        answer: 'Frauenkirche',
    },
    {
        question: gradient.fruit('In welchem Bundesland liegt die Stadt Frankfurt am Main? '),
        answer: 'Hessen',
    },
    {
        question: gradient.fruit('Was brauchen Pflanzen zum Wachsen? '),
        answer: 'Wasser und Sonnenlicht',
    },
    {
        question: gradient.fruit('Was kommt nach Montag? '),
        answer: 'Dienstag',
    },
    {
        question: gradient.fruit('Welches Tier sagt "Miau"? '),
        answer: 'Katze',
    },
    {
        question: gradient.fruit('Wie viele Räder hat ein Fahrrad? '),
        answer: '2',
    },
    {
        question: gradient.fruit('Was ist die Hauptstadt von Deutschland? '),
        answer: 'Berlin',
    },
    {
        question: gradient.fruit('Wie viele Bundesländer hat Deutschland?'),
        answer: '16',
    },
    {
        question: gradient.fruit('Welches deutsche Bundesland ist für sein Bier und das Oktoberfest bekannt? '),
        answer: 'Bayern',
    },
    {
        question: gradient.fruit('In welchem Bundesland findet man die Stadt Hamburg? '),
        answer: 'Hamburg',
    },
    {
        question: gradient.fruit('Welcher Fluss fließt durch Berlin, der Hauptstadt Deutschlands? '),
        answer: 'Spree',
    },
    {
        question: gradient.fruit('Welches Schloss in Bayern ist das berühmteste Deutschlands? '),
        answer: 'Schloss Neuschwanstein',
    },
    {
        question: gradient.fruit('Welche Farbe hat ein Apfel? '),
        answer: 'Rot oder grün',
    },
    {
        question: gradient.fruit('Womit schreibt man auf Papier? '),
        answer: 'Kugelschreiber oder Bleistift',
    },
    {
        question: gradient.fruit('Welcher Planet ist der Sonne am nächsten? '),
        answer: 'Merkur',
    },
    {
        question: gradient.fruit('Wie viele Seiten hat ein Dreieck? '),
        answer: '3',
    },
    {
        question: gradient.fruit('Welcher Planet ist der größte in unserem Sonnensystem?'),
        answer: 'Jupiter',
    },
    {
        question: gradient.fruit('Was sammeln Bienen aus Blumen? '),
        answer: 'Nektar',
    },
    {
        question: gradient.fruit('Was ist die Hauptstadt von Frankreich? '),
        answer: 'Paris',
    },
    {
        question: gradient.fruit('Was verwendet man, um entfernte Objekte zu sehen? '),
        answer: 'Teleskop',
    },
    {
        question: gradient.fruit('Wie viele Kontinente gibt es auf der Erde? '),
        answer: '7',
    },
    {
        question: gradient.fruit('Wie nennt man das Innere eines Atoms? '),
        answer: 'Kern',
    },
    {
        question: gradient.fruit('Was ist das chemische Symbol für Wasser? '),
        answer: 'H2O',
    },
    {
        question: gradient.fruit('Was ist das größte Säugetier auf der Erde? '),
        answer: 'Blauwal',
    },
    {
        question: gradient.fruit('Was ist das chemische Symbol für Sauerstoff? '),
        answer: 'O',
    },
    {
        question: gradient.fruit('Welcher Planet ist der kleinste in unserem Sonnensystem? '),
        answer: 'Merkur',
    },
    {
        question: gradient.fruit('Welches Gas atmen Menschen aus? '),
        answer: 'Kohlendioxid',
    },
    {
        question: gradient.fruit('Welche Farbe hat eine Orange? '),
        answer: 'Orange',
    },
    {
        question: gradient.fruit('Welche Stadt Deutschlands hat den Spitznamen "Hauptstadt der Spione" aufgrund ihrer Geschichte im Kalten Krieg? '),
        answer: 'Berlin',
    },
    {
        question: gradient.fruit('In welcher deutschen Hafenstadt wurde der berühmte "Fischmarkt" am Sonntagmorgen zum Anziehungspunkt für Einheimische und Touristen? '),
        answer: 'Hamburg',
    },
    {
        question: gradient.fruit('Welche Hansestadt kann ihre Gründung bis ins 8. Jahrhundert zurückverfolgen und wird oft als "Stadt der Bremer Stadtmusikanten" bezeichnet? '),
        answer: 'Bremen',
    },
    {
        question: gradient.fruit('Was ist das chemische Symbol für Gold? '),
        answer: 'Au',
    },
    {
        question: gradient.fruit('Wie viele Beine hat eine Spinne normalerweise? '),
        answer: '8',
    },
    {
        question: gradient.fruit('Was ist das größte Organ im menschlichen Körper? '),
        answer: 'Haut',
    },
    {
        question: gradient.fruit('Wie nennt man einen Hundewelpen? '),
        answer: 'Welpe',
    },
    {
        question: gradient.fruit('Was ist das chemische Symbol für Silber?'),
        answer: 'Ag',
    },
];

module.exports = questions;



