// const wordsJson = require('../verbs.json');
// const Word = require('../controllers/word-schema');

// function addWords() {
//     const arraysWords = Object.entries(wordsJson);
//     const words = [];

//     for (let i = 0; i < arraysWords.length; i++) {
//       const arrWord = Object.entries(arraysWords[i][1]);
//       words.push(new Word({
//         infinitive: arrWord[0][1],
//         past: arrWord[1][1],
//         participle: arrWord[2][1],
//         translation: arrWord[3][1]
//       }));
//     }

//     return words;
//   }

// const words = addWords();
// words.forEach(word => word.save(function(err) {
//   console.log(err);
// }));
