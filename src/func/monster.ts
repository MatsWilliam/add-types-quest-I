import {Monster} from "./types";


//utöka så alla egenskaper för monstret skrivs ut

export const prettyPrintMonster = (allMonsters:Monster[]) => {

	allMonsters.forEach((m) => {
		console.log(`Name: ${m.name}, Age: ${m.age}, Antal tentakler: ${m.tentacles}, Antal ögon: ${m.eyes}, Finns vingar? ${m.hasWings}`);
	})
};

export const averageMonsterAge = (monsters:Monster[]) => {
	let allAges: number = 0;
	monsters.forEach((m) => {
		allAges += m.age;
	});
	
	return Math.round (allAges / monsters.length);
};

export const averageNumberOfTentacles = (monsters:Monster[]) => {
	let allTentacles: number = 0;
	monsters.forEach((m) => {
		allTentacles += m.tentacles;
	})
	return Math.round (allTentacles / monsters.length);
};

export const numberOfMonstersWithWings = (monsters:Monster[]) => {
	let monstersWithWings: number = 0;
	monsters.forEach((m) => {
		if (m.hasWings===true) {
			monstersWithWings += 1			
		}
	})
	return monstersWithWings;
};

export const getAllNoWingedMonster = (m) => {
	return [];
};
