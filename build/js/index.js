"use strict";

// 1) Вывести в одну строку символы:
// 1. английского алфавита от ‘A’ до ‘Z’
// 2. английского алфавита от ‘z’ до ‘a’
// 3. русского алфавита от ‘а’ до ‘я’
// 4. цифры от ‘0’ до ‘9’
// 5. печатного диапазона таблицы ASCII
function printString() {
  var resultString = "";

  for (var i = 65; i <= 90; i++) {
    resultString += String.fromCharCode(i);
  }

  for (var _i = 122; _i >= 97; _i--) {
    resultString += String.fromCharCode(_i);
  }

  for (var _i2 = 1072; _i2 <= 1103; _i2++) {
    resultString += String.fromCharCode(_i2);
  }

  for (var _i3 = 48; _i3 <= 57; _i3++) {
    resultString += String.fromCharCode(_i3);
  }

  for (var _i4 = 32; _i4 <= 127; _i4++) {
    resultString += String.fromCharCode(_i4);
  }

  return resultString;
} // 2.1 Написать и протестировать функции преобразования:
// ● целого числа в строку


function intToString(value) {
  if (!(Number(value) === value && value % 1 === 0)) {
    return undefined;
  }

  var resultString = "";
  resultString += value;
  return resultString;
} // 2.2 Написать и протестировать функции преобразования:
// ● вещественного числа в строку


function floatToString(value) {
  if (!(Number(value) === value && value % 1 !== 0)) {
    return undefined;
  }

  var resultString = "";
  resultString += value;
  return resultString;
} // 2.3 Написать и протестировать функции преобразования:
// ●  строки в целое число


function stringToInt(value) {
  if (typeof value !== "string") {
    return NaN;
  }

  var resultInt = parseInt(value);
  return resultInt;
} // 2.4 Написать и протестировать функции преобразования:
// ●  строки в вещественное число


function stringToFloat(value) {
  if (typeof value !== "string") {
    return NaN;
  }

  var resultFloat = parseFloat(value);
  return resultFloat;
} //*** REgex


function trimSymbolRegex(value) {
  var curString = value;
  curString = curString.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, " ");
  return curString;
} //3.1 Написать и протестировать функции работы со строками:
//  ● Дана строка, состоящая из слов, разделенных пробелами и знаками препинания. Определить длину самого короткого слова.


function findMinWordInString(value) {
  if (typeof value !== "string") {
    return undefined;
  }

  var curString = value;
  curString = trimSymbolRegex(curString);
  var findMinWord = "";
  var masString = curString.trim().split(" ");
  masString.sort(function (a, b) {
    return a.length - b.length;
  });
  findMinWord = masString[0];
  return findMinWord.length;
} //3.2 Написать и протестировать функции работы со строками:
//  ● Дан массив слов. Заменить последние три символа слов, имеющих заданную длину на символ &quot;$&quot;


function changeWordsInMas(arr, length, symbol) {
  var curMas = arr;
  var symb = symbol;
  var resArr = [];
  curMas.forEach(function (word) {
    if (word.length === length) {
      word = word.slice(0, -3);
      word += symb;
      resArr.push(word);
    }
  });
  return resArr;
} //3.3 Написать и протестировать функции работы со строками:
//  ● Добавить в строку пробелы после знаков препинания, если они там отсутствуют.


function addSpaceAfterRegEx(value) {
  if (typeof value !== "string") {
    return undefined;
  }

  var regExp = "!.,;:?";
  var resStr = "";

  for (var i = 0; i < value.length; i++) {
    resStr += value[i];

    if (regExp.indexOf(value[i]) > -1) {
      if (value.length < i || value[i + 1] !== " ") {
        if (value.length - 1 == i) {
          return resStr;
        }

        resStr += " ";
      }
    }
  }

  return resStr;
} //3.4 Написать и протестировать функции работы со строками:
//  ● Оставить в строке только один экземпляр каждого встречающегося символа.


function singleToneCharAtString(value) {
  if (typeof value !== "string") {
    return undefined;
  }

  var resStr = "";
  var curStr = value;

  for (var i = 0; i < curStr.length; i++) {
    if (resStr.indexOf(curStr[i]) === -1) {
      resStr += curStr[i];
    }
  }

  return resStr;
} //3.5 Написать и протестировать функции работы со строками:
//  ● Подсчитать количество слов во введенной пользователем строке.


function countWordInString(value) {
  if (typeof value !== "string") {
    return undefined;
  }

  var curString = value;
  curString = trimSymbolRegex(curString);
  var masString = curString.trim().split(" ");
  return masString.length;
} //3.6 Написать и протестировать функции работы со строками:
//  ● Удалить из строки ее часть с заданной позиции и заданной длины.


function stringSplice(value, startPosition, length) {
  if (typeof value !== "string" || typeof startPosition !== "number" || typeof length !== "number") {
    return undefined;
  }

  var curMas = [];
  var startPos = startPosition;
  var len = length;
  var curString = value;

  for (var i = 0; i < startPos; i++) {
    curMas.push(curString.charAt(i));
  }

  for (var _i5 = len + startPos; _i5 < curString.length; _i5++) {
    curMas.push(curString.charAt(_i5));
  }

  return curMas.join('');
} //3.7 Написать и протестировать функции работы со строками:
//  ● Перевернуть строку, т.е. последние символы должны стать первыми, а первые
// последними.


function reverseString(value) {
  if (typeof value != "string") {
    return undefined;
  }

  var curString = value;
  var resString = '';

  for (var i = curString.length; i >= 0; i--) {
    resString += curString.charAt(i);
  }

  return resString;
} //3.8 Написать и протестировать функции работы со строками:
//  ● В заданной строке удалить последнее слово


function delLastWordInString(value) {
  if (typeof value != "string") {
    return undefined;
  }

  var curString = value;
  var resString = '';
  var masString = curString.trim().split(" ");
  masString.forEach(function (word, i) {
    if (i !== masString.length - 1) {
      resString += word + ' ';
    }
  });
  resString = resString.trim();
  return resString;
}

module.exports = {
  printString: printString,
  intToString: intToString,
  floatToString: floatToString,
  stringToInt: stringToInt,
  stringToFloat: stringToFloat,
  findMinWordInString: findMinWordInString,
  changeWordsInMas: changeWordsInMas,
  addSpaceAfterRegEx: addSpaceAfterRegEx,
  singleToneCharAtString: singleToneCharAtString,
  countWordInString: countWordInString,
  stringSplice: stringSplice,
  reverseString: reverseString,
  delLastWordInString: delLastWordInString
};