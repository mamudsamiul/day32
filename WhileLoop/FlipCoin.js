let headCount = 0;
let tailCount = 0;
while (headCount < 11 && tailCount < 11) {
  let toss = Math.floor(Math.random() * 10) % 2;
  if (toss == 1) headCount++;
  else tailCount++;
}
if(headCount > tailCount) console.log("Heads wins with count : "+ headCount);
else console.log("tails wins with count : "+ tailCount);
