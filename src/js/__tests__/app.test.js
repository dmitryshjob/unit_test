import { status, sortList } from '../app.js';

test('status test critical', () => {
    const result = status({ name: 'мечник', health: 10 });
    expect(result).toBe('critical');
});
test('status test healthy', () => {
    const result = status({ name: 'маг', health: 100 });
    expect(result).toBe('healthy');
});
test('status test critical', () => {
    const result = status({ name: 'лучник', health: 40 });
    expect(result).toBe('wounded');
});




// test('Сортировка по количеству НР по убыванию', () => {
//     const players = [
//         { name: 'мечник', health: 10 },
//         { name: 'маг', health: 100 },
//         { name: 'лучник', health: 80 },
//     ];

//     const sorted_players = JSON.stringify([
//         { name: 'маг', health: 100 },
//         { name: 'лучник', health: 80 },
//         { name: 'мечник', health: 10 },
//     ]);

//     const result = JSON.stringify(sortList(players));

//     expect(result).toBe(sorted_players);
// });

test('Sorting check', () => {
    const data = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
  
    const expected_data = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
  
    expect(sortList(data)).toEqual(expected_data);
  });