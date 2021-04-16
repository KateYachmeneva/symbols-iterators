export default class Team {
  constructor() {
    this.teams = [
      {
        name: 'Ivan',
        type: 'Swordsman',
        health: 70,
        level: 1,
        attack: 40,
        defence: 10,
      },

      {
        name: 'Petr',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Witch',
        type: 'Magician',
        health: 60,
        level: 3,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Eagle',
        type: 'Daemon',
        health: 90,
        level: 5,
        attack: 50,
        defence: 10,
      },
    ];
  }

  [Symbol.iterator]() {
    let current = 0;
    const { teams } = this;
    const last = teams.length;
    console.log(teams.length);
    return {
      next() {
        const result = {
          done: current >= last,
          value: teams[current],
        };
        current += 1;
        return result;
      },
    };
  }
}
