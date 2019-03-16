const test = require("../src/js/index");
const assert = require("assert");

describe("return String for more option --> .....", function() {
  it("should return validate string", () => {
    const mockString =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZzyxwvutsrqponmlkjihgfedcbaабвгдежзийклмнопрстуфхцчшщъыьэюя0123456789 !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    const actual = test.printString();
    assert.deepEqual(JSON.stringify(mockString), JSON.stringify(actual));
  });
});

describe("Function intToString()", function() {
  const testData = [
    { value: 0, expected: "0" },
    { value: null, expected: undefined },
    { value: undefined, expected: undefined },
    { value: 101, expected: "101" },
    { value: 999999999, expected: "999999999" },
  ];
  testData.forEach((data)=>{
    const {value, expected} = data;
    it(`should return string - ${expected}, when argument function - ${value}`, () => {
      const actual = test.intToString(value);
      assert.strictEqual(actual, expected);
    });
  });
});

describe("Function floatToString()", function() {
  const testData = [
    { value: -1.3, expected: "-1.3" },
    { value: null, expected: undefined },
    { value: undefined, expected: undefined },
    { value: 101.99, expected: "101.99" },
    { value: 999999999.00001, expected: "999999999.00001" },
  ];
  testData.forEach((data)=>{
    const {value, expected} = data;
    it(`should return string - ${expected}, when argument function - ${value}`, () => {
      const actual = test.floatToString(value);
      assert.strictEqual(actual, expected);
    });
  });
});

describe("Function stringToInteger()", function() {
  const testData = [
    { value: '-1.3', expected: -1 },
    { value: '-1px', expected: -1 },
    { value: '0', expected: 0 },
    { value: null, expected: NaN },
    { value: undefined, expected: NaN },
    { value: 101.99, expected: NaN },
    { value: '101.99', expected: 101 },
    { value: [11.99], expected: NaN },
    { value:{name: 'vasa'}, expected: NaN },
    { value: '999999999.00001', expected: 999999999 },
  ];
  testData.forEach((data)=>{
    const {value, expected} = data;
    it(`should return number integer - ${expected}, when argument function - ${value}`, () => {
      const actual = test.stringToInt(value);
      assert.strictEqual(actual, expected);
    });
  });
});

describe("Function stringToFloat()", function() {
  const testData = [
    { value: '-1.3', expected: -1.3 },
    { value: '-1px', expected: -1 },
    { value: '0', expected: 0.0 },
    { value: null, expected: NaN },
    { value: undefined, expected: NaN },
    { value: 101.99, expected: NaN },
    { value: '101.99', expected: 101.99 },
    { value: [11.99], expected: NaN },
    { value:{name: 'vasa'}, expected: NaN },
    { value: '999999999.00001', expected: 999999999.00001 },
  ];
  testData.forEach((data)=>{
    const {value, expected} = data;
    it(`should return number float - ${expected}, when argument function - ${value}`, () => {
      const actual = test.stringToFloat(value);
      assert.strictEqual(actual, expected);
    });
  });
});

describe("Function findMinWordInString()", function() {
  const testData = [
    { value: '', expected: 0 },
    { value: '-1px', expected: 3 },
    { value: '123456', expected: 6 },
    { value: null, expected: undefined  },
    { value: undefined, expected: undefined  },
    { value: 'My name: Alex!!!', expected: 2 },
    { value: 'My name: Alex!!! [12345678], b', expected: 1 },
    { value: 'Прошлой зимой в крупных промышленных центрах Китая действовали весьма жесткие ограничения на производство чугуна и стали.', expected: 1 },
    { value: {name: 'vasa'}, expected: undefined },
    { value: '999999999.00001', expected: 14 },
  ];
  testData.forEach((data)=>{
    const {value, expected} = data;
    it(`should return lenght ${expected} of min words in string - ${value} `, () => {
      const actual = test.findMinWordInString(value);
      assert.strictEqual(actual, expected);
    });
  });
});

describe("Function changeWordsInMas()", function() {
  const testData = [
    { value: ["Метод", "forEach()", "выполняет", "функцию", "callback", "один", "раз", "для", "каждого", "элемента,", "находящегося", "в", "массиве", "в", "порядке", "возрастания.", "Она", "не", "будет", "вызвана", "для", "удалённых", "или", "пропущенных", "элементов", "массива.", "Однако,", "она", "будет", "вызвана", "для", "элементов,", "которые", "присутствуют", "в", "массиве", "и", "имеют", "значение", "undefined."], length: 0, expected: [] },
    { value: ["Метод", "forEach()", "выполняет", "функцию", "callback", "один", "раз", "для", "каждого", "элемента,", "находящегося", "в", "массиве", "в", "порядке", "возрастания.", "Она", "не", "будет", "вызвана", "для", "удалённых", "или", "пропущенных", "элементов", "массива.", "Однако,", "она", "будет", "вызвана", "для", "элементов,", "которые", "присутствуют", "в", "массиве", "и", "имеют", "значение", "undefined."], length: 1, expected: ["$", "$", "$", "$"] },
    { value: ["Метод", "forEach()", "выполняет", "функцию", "callback", "один", "раз", "для", "каждого", "элемента,", "находящегося", "в", "массиве", "в", "порядке", "возрастания.", "Она", "не", "будет", "вызвана", "для", "удалённых", "или", "пропущенных", "элементов", "массива.", "Однако,", "она", "будет", "вызвана", "для", "элементов,", "которые", "присутствуют", "в", "массиве", "и", "имеют", "значение", "undefined."], length: 2, expected: ["$"] },
    { value: ["Метод", "forEach()", "выполняет", "функцию", "callback", "один", "раз", "для", "каждого", "элемента,", "находящегося", "в", "массиве", "в", "порядке", "возрастания.", "Она", "не", "будет", "вызвана", "для", "удалённых", "или", "пропущенных", "элементов", "массива.", "Однако,", "она", "будет", "вызвана", "для", "элементов,", "которые", "присутствуют", "в", "массиве", "и", "имеют", "значение", "undefined."], length: 5, expected: ["Ме$", "бу$", "бу$", "им$"] },
    { value: ["Метод", "forEach()", "выполняет", "функцию", "callback", "один", "раз", "для", "каждого", "элемента,", "находящегося", "в", "массиве", "в", "порядке", "возрастания.", "Она", "не", "будет", "вызвана", "для", "удалённых", "или", "пропущенных", "элементов", "массива.", "Однако,", "она", "будет", "вызвана", "для", "элементов,", "которые", "присутствуют", "в", "массиве", "и", "имеют", "значение", "undefined."], length: 8, expected: ["callb$", "масси$", "значе$"] },
    { value: ["Метод", "forEach()", "выполняет", "функцию", "callback", "один", "раз", "для", "каждого", "элемента,", "находящегося", "в", "массиве", "в", "порядке", "возрастания.", "Она", "не", "будет", "вызвана", "для", "удалённых", "или", "пропущенных", "элементов", "массива.", "Однако,", "она", "будет", "вызвана", "для", "элементов,", "которые", "присутствуют", "в", "массиве", "и", "имеют", "значение", "undefined."], length: 12, expected: ["находящег$", "возрастан$", "присутств$"] },
    { value: ["Метод", "forEach()", "выполняет", "функцию", "callback", "один", "раз", "для", "каждого", "элемента,", "находящегося", "в", "массиве", "в", "порядке", "возрастания.", "Она", "не", "будет", "вызвана", "для", "удалённых", "или", "пропущенных", "элементов", "массива.", "Однако,", "она", "будет", "вызвана", "для", "элементов,", "которые", "присутствуют", "в", "массиве", "и", "имеют", "значение", "undefined."], length: 120, expected: [] }
  ];
  testData.forEach((data)=>{
    const {value, length, expected} = data;
    it(`should return array ${expected} after function done, when length - ${length}`, () => {
      const actual = test.changeWordsInMas(value, length, '$');
      assert.deepEqual(actual, expected);
    });
  });
});

describe("Function addSpaceAfterRegEx()", function() {
  const testData = [
    { value: 'Hello,world!', expected: 'Hello, world!' },
    { value: 'Прошлой:зимой в крупных,промышленных,центрах Китая!', expected: 'Прошлой: зимой в крупных, промышленных, центрах Китая!' },
    { value: '!', expected: '!' },
    { value: null, expected: undefined  },
    { value: undefined, expected: undefined  },
    { value: 'My!name: Alex!', expected: 'My! name: Alex!' },
    { value: {name: 'vasa'}, expected: undefined },
    { value: '999999999.00001', expected: '999999999. 00001' },
  ];
  testData.forEach((data)=>{
    const {value, expected} = data;
    it(`should return string ${expected} if mockString - ${value} `, () => {
      const actual = test.addSpaceAfterRegEx(value);
      assert.strictEqual(actual, expected);
    });
  });
});

describe("Function singleToneCharAtString()", function() {
  const testData = [
    { value: '-1.3', expected: '-1.3' },
    { value: '-1pxxx', expected: '-1px' },
    { value: '0', expected: '0' },
    { value: null, expected: undefined },
    { value: undefined, expected: undefined },
    { value: 101.99, expected: undefined },
    { value: '101.99', expected: '10.9' },
    { value: [11.99], expected: undefined },
    { value:{name: 'vasa'}, expected: undefined },
    { value: '999999999.00001', expected: '9.01'},
    { value: 'Hello, world!', expected: 'Helo, wrd!'},
  ];
  testData.forEach((data)=>{
    const {value, expected} = data;
    it(`should return string with unique Char - ${expected}, when argument function - ${value}`, () => {
      const actual = test.singleToneCharAtString(value);
      assert.strictEqual(actual, expected);
    });
  });
});

describe("Function countWordInString()", function() {
  const testData = [
    { value: '-1.3', expected: 1 },
    { value: '-1pxxx, -1.3', expected: 2 },
    { value: '0', expected: 1 },
    { value: null, expected: undefined },
    { value: undefined, expected: undefined },
    { value: 101.99, expected: undefined },
    { value: '101.99! push() 999', expected: 3 },
    { value: [11.99], expected: undefined },
    { value:{name: 'vasa'}, expected: undefined },
    { value: 'Hello, world!!!', expected: 2},
    { value: 'Hello, world, give me a string)', expected: 6},
  ];
  testData.forEach((data)=>{
    const {value, expected} = data;
    it(`should return count words - ${expected} of string - ${value}`, () => {
      const actual = test.countWordInString(value);
      assert.strictEqual(actual, expected);
    });
  });
});

describe("Function stringSplice()", function() {
  const testData = [
    { value: 'Welcome to Javascript)', startPosition: 0, length: 1, expected: 'elcome to Javascript)' },
    { value: 'Welcome to Javascript)', startPosition: 1, length: 2, expected: 'Wcome to Javascript)' },
    { value: 'Welcome to Javascript)', startPosition: 9, length: 7, expected: 'Welcome tcript)' },
    { value: 'Welcome to Javascript)', startPosition: 11, length: 0, expected: 'Welcome to Javascript)' },
    { value: 'Welcome to Javascript)', startPosition: 21, length: 1, expected: 'Welcome to Javascript' },
    { value: 'Welcome to Javascript)', startPosition: 21, length: 10, expected: 'Welcome to Javascript' },
    { value: null, startPosition: 21, length: 10, expected: undefined },
    { value: 'Welcome to Javascript)', startPosition: '21', length: 10, expected: undefined },
    { value: 'Welcome to Javascript)', startPosition: 21, length: '1', expected: undefined },
    { value: ['Welcome to Javascript)'], startPosition: 21, length: '1', expected: undefined },
    { value: ['Welcome to Javascript)'], startPosition: undefined, length: null, expected: undefined },
  ];
  testData.forEach((data)=>{
    const {value, startPosition, length, expected} = data;
    it(`should return modified string ${expected}, with startIndex - ${startPosition} and length for delete char - ${length}, mockString --> ${value}`, () => {
      const actual = test.stringSplice(value, startPosition, length);
      assert.strictEqual(actual, expected);
    });
  });
});

describe("Function reverseString()", function() {
  const testData = [
    { value: '-1.3', expected: '3.1-' },
    { value: '-1pxxx, -1.3', expected: '3.1- ,xxxp1-' },
    { value: '0', expected: '0' },
    { value: null, expected: undefined },
    { value: undefined, expected: undefined },
    { value: 101.99, expected: undefined },
    { value: '101.99! push() 999', expected: '999 )(hsup !99.101' },
    { value: [11.99], expected: undefined },
    { value:{name: 'vasa'}, expected: undefined },
    { value: 'Hello, world!!!', expected: '!!!dlrow ,olleH'},
  ];
  testData.forEach((data)=>{
    const {value, expected} = data;
    it(`should return reverse string - ${expected} of mockString - ${value}`, () => {
      const actual = test.reverseString(value);
      assert.strictEqual(actual, expected);
    });
  });
});

describe("Function delLastWordInString()", function() {
  const testData = [
    { value: '-1.3', expected: '' },
    { value: '-1pxxx return', expected: '-1pxxx' },
    { value: '0 7 8890', expected: '0 7' },
    { value: null, expected: undefined },
    { value: undefined, expected: undefined },
    { value: 101.99, expected: undefined },
    { value: [11.99], expected: undefined },
    { value:{name: 'vasa'}, expected: undefined },
    { value: '999999999.00001', expected: ''},
    { value: 'Hello, world!', expected: 'Hello,'},
  ];
  testData.forEach((data)=>{
    const {value, expected} = data;
    it(`should return string with delete last word - ${expected}, when mockString - ${value}`, () => {
      const actual = test.delLastWordInString(value);
      assert.strictEqual(actual, expected);
    });
  });
});