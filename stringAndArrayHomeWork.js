// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// 		То есть дефисы удаляются, а все слова после них получают заглавную букву.

// 		Примеры:

// 		camelize("background-color") == 'backgroundColor';
// 		camelize("list-style-image") == 'listStyleImage';
// 		camelize("-webkit-transition") == 'WebkitTransition';
// 		P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

let camelize = (str) => {

	console.log(str);
	let strArray = str.split("");

	for (let i = 0; i < strArray.length; i++) {
		if (strArray[i] === "-") {
			// strArray.splice( i, 1 ); короче я долго ебался, потому что у меня на примерах с большим количеством "-----" со сплайсом он удалял только половину черточек. Решил вот таки образом — не удалением из массива элементов, а заменой их на пустые элементы
			strArray[i] = "";
			strArray[i + 1] = strArray[i + 1].toUpperCase();
		}	
	}

	str = strArray.join("");
	console.log(str);
};

camelize("------dfaefe------erseda-a-s-d-z-xzxzqq");

// 	2)
// 		Задача: написать функцию, принимающую массив чисел
// 		и возвращающую сумму всех его положительных элементов и отрицательных 
// 		чисел отдельно в виде нового массива

// 		например функция принимает как аргумент следующий массив
// 		arr = [1, -2, 3, 4, -9]

// 		и должна вернуть [8, -11]
// 		Сохраняйте вызов этой функции через деструктурирующее присваивание

let twoSumm = (array) => {
	let plusSumm = 0;
	let minusSumm = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 0) {
			plusSumm = plusSumm + array[i];
		} else { 
			minusSumm = minusSumm + array[i];
		}
	}
	let resultArray = [plusSumm, minusSumm];
	console.log(resultArray);
}

twoSumm( [1, 3, 5, -6, -1] );