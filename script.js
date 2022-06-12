let dolphinsScoreAverage = (96 + 108 + 89) / 3;
let koalasScoreAverage = (88 + 191 + 110) / 3;

console.log(`
Dolphin's Score is: ${dolphinsScoreAverage}
Koalas' Score is: ${koalasScoreAverage}
`)

if (dolphinsScoreAverage > koalasScoreAverage && dolphinsScoreAverage >= 100) {
  console.log(`The Winner is: Dolphins Team`)
} else if (dolphinsScoreAverage < koalasScoreAverage && koalasScoreAverage >= 100) {
  console.log(`The Winner is: Koalas Team`)
} else if (dolphinsScoreAverage >= 100 && koalasScoreAverage >= 100) {
  console.log(`The Winner is: Draw!`)
} else {
  console.log(`No one wins the trophy`)
}