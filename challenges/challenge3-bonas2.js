// Challenge3 - Bonas 1
const minAvgScore = 100;
const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 101;

const averageScoreDolphins =
  (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;

const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 106;
const averageScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

if (averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
  if (averageScoreDolphins > averageScoreKoalas) {
    console.log(`Dolphins wins!`);
  } else if (averageScoreKoalas > averageScoreDolphins) {
    console.log(`Koalas wins!`);
  } else {
    console.log(`There is a draw!`);
  }
} else {
  console.log(`No team wins the trophy!`);
}
