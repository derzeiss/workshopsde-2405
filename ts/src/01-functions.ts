// Solution
const solution1 = () => {
  function allPeople(trainerData: string[], attendeeData: (string | number)[]) {
    const result: (string | number)[] = [];
    return result.concat(trainerData, attendeeData);
  }

  const trainers = ['Joe', 'Toni'];
  const attendees = ['Max', 'Sepp', 'Arno', 'Otto', 1];

  const allTogether: (string | number)[] = allPeople(trainers, attendees);
};

// Advanced solution with TypeGuards and filtering
const solution2 = () => {
  function allPeopleByFiltering(trainerData: string[], attendeeData: unknown[]): string[] {
    const attendeeDataString = attendeeData.filter(isString);
    return trainerData.concat(attendeeDataString);
  }
  const isString = (val: unknown): val is string => typeof val === 'string';

  function allPeopleWithTypeGuard(trainerData: string[], attendeeData: unknown[]): string[] {
    if (isStringArray(attendeeData)) {
      return trainerData.concat(attendeeData);
    } else {
      throw new Error('attendeeData should be a string array');
    }
  }

  const isStringArray = (arr: unknown[]): arr is string[] => {
    return arr.every((i) => typeof i === 'string');
  };

  const trainers = ['Joe', 'Toni'];
  const attendees = ['Max', 'Sepp', 'Arno', 'Otto', 1, true, new Date()];

  const allTogether: string[] = allPeopleByFiltering(trainers, attendees);

  console.log(allTogether);
};

// This tells typescript that this is a module file instead of a global js file.
// Otherwise we wouldn't be able to redefine local variables (e.g. "attendees") in other filles
export {};
