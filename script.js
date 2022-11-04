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

// Объекты

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

/* 6. Получите массив ключей следующего объекта:
let obj = {x: 1, y: 2, z: 3}; */

let obj6 = { x: 1, y: 2, z: 3 };
let keys6 = Object.keys(obj6);
console.log(keys6);

/* 7. Найдите количество элементов в следующем объекте:
let obj = {x: 1, y: 2, z: 3}; */

let obj7 = { x: 1, y: 2, z: 3 };
let keys7 = Object.keys(obj7);
console.log(keys7.length);

/* 8. Дан следующий объект:
let obj = {x: 1, y: 2, z: 3};
Дана переменная key, в которой хранится один из ключей нашего объекта. 
Выведите с помощью этой переменной соответствующий элемент объекта. */

let obj8 = { x: 1, y: 2, z: 3 };
let key8 = "y";

console.log(obj8[key8]);

/* 9. Дан объект:
let obj = {
	x: 1,
	y: 2,
	z: 3
};
Даны переменные:
let key1 = 'x';
let key2 = 'y';
let key3 = 'z';
Сделайте так, чтобы ключи объекта брались из этих переменных. */

let key9A = "x";
let key9B = "y";
let key9C = "z";

let obj9 = {
  [key9A]: 1,
  [key9B]: 2,
  [key9C]: 3,
};

console.log(obj9);
