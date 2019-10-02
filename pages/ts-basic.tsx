/** BASIC ********************************************************************************************/

let count: number | string = 0;
count += 1;
count = '2';

const message: string = 'hello ts';

const isDone: boolean = true;

const numbers: number[] = [1, 2, 3];
const strings: string[] = ['1', '2', '3'];

strings.push('100');

let color: 'red' | 'yellow';

// color = 'blue';
color = 'red';


/**********************************************************************************************/

function sum(x: number, y: number): number {
  return x + y;
}

console.log(sum(1, 3));
console.log(sum(3, 100));

function sumArray(numbers: number[]): number {
  return numbers.reduce((target, current, index) => target + current, 0);
}

console.log(sumArray([1, 2, 3, 0, 5]));

/**********************************************************************************************/

interface Shape {
  getArea(): string;
}

class Circle implements Shape {
  _type: string = 'Circle';
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea() {
    return `${this._type} : ${this.radius + this.radius + Math.PI}`;
  }
}

class Rectangle implements Shape {
  _type: string = 'Rectangle';
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return `${this._type} : ${this.width * this.height}`;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(5, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
})

/**********************************************************************************************/

interface Person {
  name: string;
  age?: number
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: 'moon.jaehoon',
  age: 44
}

const developer: Developer = {
  name: 'wolf',
  age: 44,
  skills: ['js']
}

const people: Person[] = [person, developer];

/**********************************************************************************************/

function wrap<T>(params: T) {
  return {
    params
  }
}

const wrapped = wrap('wolf');

interface Items<T> {
  list: T[];
}

const items1: Items<string> = {
  list: ['1', '2', '3']
}

const items2: Items<number> = {
  list: [1, 2, 3]
}

type OtherItems<T> = {
  list: T[];
}

const otherItems1: OtherItems<string> = {
  list: ['1', '2', '3']
}

const otherItems2: OtherItems<number> = {
  list: [1, 0, 3]
}

/**********************************************************************************************/

class Queue<T>{
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

/**********************************************************************************************/

const Page = () => (
  <>
    TS #1, #2
  </>
);

export default Page;