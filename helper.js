import { BOARD } from './board.js';

/**
 * Generates a random dice roll.
 * @returns {number[]} An array containing the values of two dice and their sum.
 */
export function rollDice() {
	const die1 = Math.floor(Math.random() * 6) + 1;
	const die2 = Math.floor(Math.random() * 6) + 1;
	return [die1, die2, die1+die2];
}

/**
 * Retrieves the tile object from the BOARD array based on the given index.
 *
 * @param {number} index - The index of the tile in the BOARD array.
 * @returns {object} The tile object at the specified index.
 */
export function getTileByIndex(index) {
	return BOARD[index];
}

/**
 * Sorts an object based on the values in descending order.
 * 
 * @param {Object} obj - The object to be sorted.
 * @returns {Object} - The sorted object.
 */
export function sortObject(obj) {
	return Object.fromEntries(Object.entries(obj).sort((a,b) => b[1] - a[1]));
}

/**
 * Calculates the sum of all values in the given object and returns an array with the calculated sum and an array of key-value pairs with their corresponding percentage.
 * @param {Object} obj - The input object.
 * @returns {Array} - An array containing the key-value pairs with their corresponding percentage and the sum of all values.
 */
export function tallyObject(obj) {
	const sum = Object.values(obj).reduce((a,b) => a + b, 0);
	return [Object.entries(obj).map(([key, value]) => [key, value, (value*100)/sum]), sum];
}

/**
 * Randomizes the order of elements in the given arrays.
 * @param {...Array} arrays - The arrays to be randomized.
 */
export function randomize(...[...args]) {
	args.forEach((arr) => arr.sort(() => Math.random() - 0.5));
}

//arr is either railroads or utility, cointains array of indexes, going forward NOT backwards
/**
 * Finds the nearest extra value in the array that is greater than the given index.
 * If no such value is found, returns the first value in the array.
 *
 * @param {number} index - The index to compare against.
 * @param {Array<number>} arr - The array of values to search in.
 * @returns {number} - The nearest extra value.
 */
export function nearestExtra(index, arr) {
    const next = arr.find((x) => x > index);
    return next ? next : arr[0];
}

// s is size of smaller entry array eg [[1,2,3]] s = 3
/**
 * Sorts an array of objects based on a specified property.
 *
 * @param {Array} arr - The array to be sorted.
 * @param {string} s - The property to sort the array by.
 * @returns {Array} - The sorted array.
 */
export function sortEntryList(arr, s) {
	return arr.sort((a,b) => a[s] - b[s]);
} 

/**
 * Adds tallied values to the given tally array.
 * @param {Array<Array<[string, number]>>} tally - The tally array to add values to.
 * @param {Array<Array<[string, number]>>} arr - The array containing values to be added.
 * @returns {Array<Array<[string, number, number]>>, number} - The updated tally array and the sum of values in arr and tally[1].
 */
export function addTalliedValues(tally, arr) {
	
	return [tally[0].map((x, i) => 
		[x[0], x[1]+(arr[0]?arr[0][i][1]:0), (x[1]+(arr[0]?arr[0][i][1]:0))*100/((arr[1]?arr[1]:0)+tally[1])]
	), ((arr[1]?arr[1]:0)+tally[1])];

}

/**
 * Updates the last rolls array with the next roll for a specific player.
 * If the player's last rolls array has less than 3 elements, the next roll is added to the end.
 * If the player's last rolls array has 3 elements, the oldest roll is removed and the next roll is added to the end.
 * @param {Array<Array<number>>} lastRolls - The array containing the last rolls for each player.
 * @param {number} nextRoll - The next roll value to be added to the player's last rolls array.
 * @param {number} p - The player index.
 * @returns {Array<Array<number>>} - The updated last rolls array.
 */
export function lastRoll(lastRolls, nextRoll, p) {
    lastRolls[p] = lastRolls[p] ?? [];
    if (lastRolls[p].length < 3 ) {
        lastRolls[p].push(nextRoll);
    } else {
        lastRolls[p].shift();
        lastRolls[p].push(nextRoll);
    }
    return lastRolls;

}

export const asc = arr => arr.sort((a, b) => a - b);

export const sum = arr => arr.reduce((a, b) => a + b, 0);

export const mean = arr => sum(arr) / arr.length;

// sample standard deviation
export const std = (arr) => {
    const mu = mean(arr);
    const diffArr = arr.map(a => (a - mu) ** 2);
    return Math.sqrt(sum(diffArr) / (arr.length - 1));
};

export const quantile = (arr, q) => {
    const sorted = asc(arr);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
        return sorted[base];
    }
};

export const q25 = arr => quantile(arr, .25);

export const q50 = arr => quantile(arr, .50);

export const q75 = arr => quantile(arr, .75);

export const median = arr => q50(arr);

export function outliers(arr) {
    const q1 = quantile(arr, 0.25);
    const q3 = quantile(arr, 0.75);
    const iqr = q3 - q1;
    const lower = q1 - (1.5 * iqr);
    const upper = q3 + (1.5 * iqr);
    return arr.filter(x => x < lower || x > upper);
}