

function main(n) {
    const rolls = Array(n).fill(0).map(_x => Math.floor(Math.random() * 6) + 1).sort((a,b) => a - b);

	const move = rolls.reduce((a,b) => a + b)

	return [move, ...rolls];
}
// Run the simulation a specified number of times
const iter = 1*10**10;
const t = {};
// amount of turns to take (1 turn = 2 rolls) this statistically covers most possible moves over a period of time
const TURNS = 3;

const gradientArray = ["#3c9ce6", "#3c74e6", "#3f3ce6", "#6f3ce6", "#be3ce6", "#e63c9c", "#c41862", "#a60f28", "#cf2802", "#d16806", "#f2da3d", "#d7f229", "#a8f229", "#65f229", "#0da624", "#0fb86e", "#0fb88d", "#33d4be", "#2af5d0", "#0cf5f1", "#0ccef5", "#1d99c2", "#127799"];
for (let i = 0; i<12*TURNS; i++) {
    t[i+2] = {t:0, p:0, color: gradientArray[i]};
}

for (let i = 0; i<iter; i++) {
	const [move, ...rolls] = main(2*TURNS);
    t[move] ? t[move].t += 1 : t[move] = {t: 1, p: 0, color: "black"};
    t[move].p = t[move].t*100/iter;

    t[move][rolls.join("+")] = t[move][rolls.join("+")] ? t[move][rolls.join("+")] + 1 : 1;
    
}
Deno.writeFileSync("./statsDice.json", new TextEncoder().encode(JSON.stringify(t, null, 2)));
