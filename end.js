const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = `Your Score: ${mostRecentScore}`;
