/* eslint-disable object-curly-spacing */
/* eslint-disable object-curly-newline */
// TODO: write your code here
export const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function getAttackDescription(obj) {
  const arrayOfSpecials = [];
  const { special: array } = obj;
  array.forEach((item) => {
    const {id, name, icon, description = 'Описание недоступно'} = item;
    const objectInArray = {};
    objectInArray.id = id;
    objectInArray.name = name;
    objectInArray.icon = icon;
    objectInArray.description = description;
    arrayOfSpecials.push(objectInArray);
  });
  return arrayOfSpecials;
}
