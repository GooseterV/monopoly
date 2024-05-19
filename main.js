// Import necessary modules and data
import * as helper from './helper.js';
import { BOARD, railroads, utilities } from './board.js';
import { CHANCE } from './chance.js';
import { COMMUNITY } from './community.js';

/**
 * Simulates a game of Monopoly for a given number of turns and players.
 * 
 * @param {number} turns - The number of turns to simulate.
 * @param {number} p - The number of players in the game.
 * @returns {Array} An array containing the tally of each tile landed on and the cash of each player.
 */
function main(turns, p) {
	// Randomize the order of the CHANCE and COMMUNITY cards
	helper.randomize(CHANCE, COMMUNITY);

	// Initialize game state variables
	const stats = {}; // Stores the number of times each tile is landed on
	const spot = {}; // Stores the current spot of each player
	let lastRolls = {}; // Stores the last three rolls of each player
	const cash = {}; // Stores the cash of each player

	// Loop over each turn
	for (let j = 0; j < turns; j++) {
		// Loop over each player
		for (let i = 0; i < p; i++) {
			// Roll the dice
			const x = helper.rollDice();

			// Update the last rolls of the current player
			lastRolls = helper.lastRoll(lastRolls, [x[0], x[1]], i);

			// Check if the player rolled doubles three times in a row
			if (
				lastRolls[i].length === 3 &&
				lastRolls[i][0][0] === lastRolls[i][0][1] &&
				lastRolls[i][1][0] === lastRolls[i][1][1] &&
				lastRolls[i][2][0] === lastRolls[i][2][1]
			) {
				// If so, send the player to jail and skip the rest of their turn
				lastRolls = {};
				const tile = helper.getTileByIndex(10);
				spot[i] = 10;
				stats[tile.name+"("+spot[i]+")"] = stats[tile.name+"("+spot[i]+")"] ? stats[tile.name+"("+spot[i]+")"] + 1 : 1;
				continue;
			}

			// Move the player
			const move = x[2]; // start at 0
			spot[i] ? spot[i] += move : spot[i] = move;

			// Check if the player passed or landed on Go
			spot[i] >= (BOARD.length) ? (
				spot[i] = spot[i] - (BOARD.length),
				cash[i] = cash[i] ? cash[i] + 200 : 200
			 ) : null;
			
			// Get the tile the player landed on
			const tile = helper.getTileByIndex(spot[i]);
			
			// Update the stats for the tile
			stats[tile.name+"("+spot[i]+")"] = stats[tile.name+"("+spot[i]+")"] ? stats[tile.name+"("+spot[i]+")"] + 1 : 1;

			// Check if the player landed on a Chance tile
			if (tile.type === 'chance') {
				// Draw the top card from the Chance deck
				const card = CHANCE.shift();
				// Put the drawn card at the bottom of the deck
				CHANCE.push(card);
				// Check the type of the drawn card
				if (card.type === 'advance') {
					// If the card advances the player and they pass Go, they collect $200
					if (spot[i] >= card.amount && card.description.includes("$200") && !card.description.includes("do not")) {
						cash[i] = cash[i] ? cash[i] + 200 : 200;
					}
					// Move the player to the specified tile
					spot[i] = card.amount;
					// Get the tile the player landed on
					const tile = helper.getTileByIndex(spot[i]) ?? (
						spot[i] === "railroad" ? BOARD[helper.nearestExtra(spot[i], railroads)] : (
							spot[i] === "utility" ? BOARD[helper.nearestExtra(spot[i], utilities)] : null
						)
					);
					// Update the player's position and the stats for the tile
					spot[i] = BOARD.indexOf(tile);
					stats[tile.name+"("+spot[i]+")"] = stats[tile.name+"("+spot[i]+")"] ? stats[tile.name+"("+spot[i]+")"] + 1 : 1;
				} else if (card.type === 'jail') {
					// If the card sends the player to jail, move them to the Jail tile
					const tile = helper.getTileByIndex(10);
					spot[i] = 10;
					stats[tile.name+"("+spot[i]+")"] = stats[tile.name+"("+spot[i]+")"] ? stats[tile.name+"("+spot[i]+")"] + 1 : 1;
				} else if (card.type === 'earn') {
					// If the card gives the player money, increase their cash
					cash[i] = cash[i] ? cash[i] + card.amount : card.amount;
				} else if (card.type === 'back') {
					// If the card moves the player back, update their position
					spot[i] < card.amount ? spot[i] = BOARD.length - (card.amount - spot[i]) : spot[i] -= card.amount;
					const tile = helper.getTileByIndex(spot[i]);
					stats[tile.name+"("+spot[i]+")"] = stats[tile.name+"("+spot[i]+")"] ? stats[tile.name+"("+spot[i]+")"] + 1 : 1;
				}
			}
					// Check if the player landed on a Community Chest tile
			if (tile.type === 'community-chest') {
				// Draw the top card from the Community Chest deck
				const card = COMMUNITY.shift();
				// Put the drawn card at the bottom of the deck
				COMMUNITY.push(card);
				// Check the type of the drawn card
				if (card.type === 'advance') {
					// If the card advances the player and they pass Go, they collect $200
					if (spot[i] >= card.amount && card.description.includes("$200") && !card.description.includes("do not")) {
						cash[i] = cash[i] ? cash[i] + 200 : 200;
					}
					// Move the player to the specified tile
					const tile = helper.getTileByIndex(card.amount);
					spot[i] = card.amount;
					spot[i] = BOARD.indexOf(tile);
					stats[tile.name+"("+spot[i]+")"] = stats[tile.name+"("+spot[i]+")"] ? stats[tile.name+"("+spot[i]+")"] + 1 : 1;
				} else if (card.type === 'jail') {
					// If the card sends the player to jail, move them to the Jail tile
					const tile = helper.getTileByIndex(10);
					spot[i] = 10;
					stats[tile.name+"("+spot[i]+")"] = stats[tile.name+"("+spot[i]+")"] ? stats[tile.name+"("+spot[i]+")"] + 1 : 1;
				}  else if (card.type === 'earn') {
					// If the card gives the player money, increase their cash
					cash[i] = cash[i] ? cash[i] + card.amount : card.amount;
				} else if (card.type === 'earn-each-player') {
					// If the card gives the player money from each other player, update everyone's cash
					for (let k = 0; k < p; k++) {
						if (k !== i) {
							cash[i] = cash[i] ? cash[i] + card.amount : card.amount;
							cash[k] = cash[k] ? cash[k] - card.amount : -card.amount;
						}
					}
				} else if (card.type === "spend") {
					// If the card makes the player pay money, decrease their cash
					cash[i] = cash[i] ? cash[i] - card.amount : -card.amount;
				}
			}
		}
	}
	// Sort the stats and tally them
	const sorted = helper.sortObject(stats);
	const tally = helper.tallyObject(sorted);
	// Return the tally and the cash of each player
	return [tally, cash];
}

// Run the simulation a specified number of times
const iter = 50;
let t = [];
const cash = [];
for (let i= 0; i < iter; i++) {
	// Run the simulation with main(x, y) where x is the number of turns and y is the number of players
	const t2 = main( 1000000, 4);
	t = helper.addTalliedValues(t2[0], t)
	cash.push(t2[1])
}

// Log the results
console.log(t);
//console.log(cash)
const zt = t[0].map(x=>({name: x[0], value: x[1], percentage: x[2]}))
const yt = t[0].map(x=> x[2]).sort((a,b) => a - b);
const xp = helper.outliers(yt);
zt.map(x => xp.includes(x.percentage) ? x: null).filter(x=>x).forEach(x=>console.log(x))
// Write the results to a file
Deno.writeFileSync("./stats.json", new TextEncoder().encode(JSON.stringify(t, null, 2)));