// 数字，二、八、十六进制都支持
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

// 字符串，单双引都行
let name1: string = "bob";
let sentence: string = `Hello, my name is ${name1}.`;

// 数组，第二种方式是使用数组泛型，Array<元素类型>：
let list: number[] = [1, 2, 3];
// let list1: Array<number> = [1, 2, 3];
// let u1: undefined = undefined;
let n: null = null;

// 想象 元组 作为有组织的数组，你需要以正确的顺序预定义数据类型
const messyArray = [" something", 2, true, undefined, null];
const tuple: [number, string, string] = [24, "Indrek", "Lasn"];
let user: [number, string, null] = [1, "2", null];

// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName); // 输出'Green'因为上面代码里它的值是2

// 在Typescript中，你必须在函数中定义返回类型
function satName(name: string): string {
  return name1;
}
function satName1(name: string): void {
  let decLitera: number = 6;
  decLitera++;
}

// any就是什么类型都行，当你无法确认在处理什么类型时可以用这个。接入第三方库,Ts菜逼前期都用
let person: any = "前端劝退师";
person = 25;
person = true;

// Never是你永远得不到的爸爸
// throw new Error(message)
// return error("Something failed")
// while (true) {}  存在无法达到的终点
const error = (message: string): never => {
  throw new Error(message);
};
const showError = () => error("有问题");
showError();

// 类型断言：简略的定义是：可以用来手动指定一个值的类型
let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;已抛弃
let strLength: number = (someValue as string).length;
function getLength(something: string | number): number {
  if ((something as string).length) {
    return (something as string).length;
  } else {
    return something.toString().length;
  }
}

// 泛型
function gen_func1<T>(arg: T): T {
  return arg;
}

// 接口和类型都可以用来描述一个对象或函数：
interface User {
  name: string;
  age: number;
}
