import { User} from "./types";
export const averageAge = (users: User[]) => {
	let allAges: number = 0;
	users.forEach((u ) => {
		allAges += u.age;
	});
	return allAges / users.length;
};

export const averageNumberOfHobbies = (users: User[]) => {
	let AllHobbies = 0;
	users.forEach((u ) => {
		AllHobbies += u.hobby.length;
	});
	return AllHobbies / users.length;
};
