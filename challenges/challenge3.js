// Dolphins and Koalas
const scoreDolphins1 = 96;
const scoreDolphins2 = 108;
const scoreDolphins3 = 89;

const averageScoreDolphins =
  (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;

const scoreKoalas1 = 88;
const scoreKoalas2 = 91;
const scoreKoalas3 = 110;

const averageScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

if (averageScoreDolphins === averageScoreKoalas) {
  console.log(`There is a draw!`);
} else if (averageScoreDolphins > averageScoreKoalas) {
  console.log(`Dolphins wins!`);
} else {
  console.log(`Koalas wins!`);
}
