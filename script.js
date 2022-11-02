// Изменение элементов массива в JavaScript

// 1. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1,
// вместо второго - 2, вместо третьего - 3.

let arr1 = ["a", "b", "c"];
arr1[0] = 1;
arr1[1] = 2;
arr1[2] = 3;
console.log(arr1);

// 2. Создайте массив с числами. Прибавьте к каждому элементу массива число 3.
// Выведите на экран измененный массив.

let arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr2.length; i++) {
  arr2[i] = arr2[i] + 3;
}

console.log(arr2);

// 3. Пусть дан такой массив:
// let arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.

let arr3 = [1, 2, 3];
arr3[3] = 4;
arr3[4] = 5;
console.log(arr3);

// 4. Создайте объект user с ключами 'name', 'surname', 'patronymic'
// и какими - то произвольными значениями.
// Выведите на экран фамилию, имя и отчество через пробел.

let obj4 = {
  name: "Ivan",
  surname: "Stepanov",
  patronymic: "Igorevic",
};

console.log(obj4["surname"] + " " + obj4["name"] + " " + obj4["patronymic"]);

/* 5. Дан объект:
let obj = {x: 1, y: 2, z: 3};
Возведите в квадрат каждый элемент этого объекта. */

let obj5 = { x: 1, y: 2, z: 3 };

// obj5["x"] = obj5["x"] * obj5["x"];
// console.log(obj5["x"]);

// obj5["y"] = obj5["y"] * obj5["y"];
// console.log(obj5["y"]);

// obj5["z"] = obj5["z"] * obj5["z"];
// console.log(obj5["z"]);

for (let key in obj5) {
  obj5[key] = Math.pow(obj5[key], 2);
}
console.log(obj5);

