// // 1
// // Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// const fun = function (number) {
//     if (number === 10) {
//         return 'Correct';
//     }
//         return 'Not Correct';

// }
// console.log(fun(10));

// // 2
// // В переменной min лежит число от 0 до 59. Определите в какую четверть часа
// // попадает это число (в первую, вторую, третью или четвертую).

// const task = function (min) {
//     if (min >= 0 && min < 15) {
//         console.log('First');

//     }
//     else if (min >= 15 && min < 30) {
//         console.log('Second');
//     }
//     else if (min >= 30 && min < 45) {
//         console.log('Third');
//     }
//     else if (min >= 45 && min < 60) {
//         console.log('Fourth');
//     }
//     else
//         console.log('Not')
// }
// task(427);

// // 3
// // Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет
// // значение '1', то в переменную result запишем 'зима', если имеет значение
// // '2' – 'весна' и так далее. Решите задачу через switch-case.

// const task = function (num) {
//     let result;
//     switch (num) {
//         case '1':
//             result = 'Winter';
//             break;
//         case '2':
//             result = 'Spring';
//             break;
//         case '3':
//             result = 'Summer';
//             break;
//         case '4':
//             result = 'Autumn';
//             break;
//         default:
//             result = 'Really?';
//     }
//     return result;
// }
// console.log(task('1'));

// 4
// воспользуемся циклом while и выведите в консоль числа от 0 до 50
// function fun(){
// let num = 0;
// while (num >= 0 && num <= 50) {
//     console.log(num)
//     num += 1;
// }
// }
// fun();

// 5
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение «Блюз» на «Классика».
// Удалите первый элемент массива и выведите его в консоль.
// Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ["Джаз", "Блюз"]
// styles.push('Рок-н-ролл')
// styles.splice(1, 1, 'Классика')
// // styles[1] = 'Классика';
// console.log(styles.shift(0));
// styles.unshift('Рэп', 'Регги');
// console.log(styles)

// 6
// Напишите функцию min(a, b), которая возвращает
// меньшее из чисел a, b
// нужно добавить проверку, что функция получает числа

// function min(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         // console.log('Not a number')
//         return 'Not a number';
//     }
//     if (a > b) {
//         return b;
//     }
//     return a;
// }
// console.log(min(2, 11));

// 7
// Напишите функцию caclculateAverage()
// которая принимает произвольное количество
// аргументов и возвращает их среднее значение.
// Добавить проверку, что аргументы это числа.

// function calculateAverage(...args) {
//     let total = 0;
//     let count = 0;
//     console.log(args);
//     for (const arg of args) {
//         if (arg === Number(arg)) {
//             total += arg;
//             count += 1;
//         }
//     }
//     return total / count;
// }
// console.log(calculateAverage(1, 'k', 11));

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   keys = Object.values(salaries);
//   for (let key in keys) {
//     totalSalary += key;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))

// // Change code below this line
// function add(...args) {
//   let result = 0;
//   for (let arg of args) {
//     result += arg
//   }
//   return result;
//   // Change code above this line
// }
// console.log(add(32, 6, 13, 19, 8))

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//   const potionsIndex = this.potions.indexOf("Dragon breath")
//     this.potions.splice(potionsIndex,1)
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"))

// Колбэк-функция
// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   // console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// console.log(registerGuest('Манго', greet));
// ////////////
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// // function makePizza(pizzaName) {
// //   return `Pizza ${pizzaName} is being prepared, please wait...`;
// // }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   // return;
//   callback(pizzaName);
// }
// // console.log(makeMessage('Royal Grand', deliverPizza));
// console.log(makeMessage('Ultracheese', deliverPizza));

/////////////////////////////////////////////
//Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(user);
// console.log(Object.keys(user));
// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }
//////////////
//У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// const totalSalary = salary => {
//   console.log(Object.values(salary));
//   let total = 0;
//   for (const a of Object.values(salary)) {
//     total += a;
//   }
//   return total;
// };
// console.log(totalSalary({}));
////////////////////
//Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат
// const calculator = {
//   read(a, b) {
//     this.value1 = a;
//     this.value2 = b;
//   },
//   sum() {
//     return this.value1 || this.value2 ? this.value1 + this.value2 : 'False';
//   },
//   mult() {
//     return this.value1 * this.value2;
//   },
// };
// calculator.read(5, 2);
// console.log(calculator.sum());
// console.log(calculator.mult());

// console.log(calculator);
//////////////////
//Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}
// const updateObject = (object, param) => {
//   const copyOfObject = { ...object };
//   delete copyOfObject[param];
//   return copyOfObject;
// };

// console.log(updateObject({ a: 1, b: 2 }, 'b'));
///////////////////////
//Напиши класс Client котрорый создает объект
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер login email
//Напиши класс Notes который управляет коллекцией заметок в
//свойстве items.
//Заметка это объект со свойствами text priority
//Добавь классу статическое свойство Priopity,
//в котором будет храниться объект с приоритетами.
//Добавь методы addNote(note), removeNote(text)
//updatePriority(text, newPriority)
