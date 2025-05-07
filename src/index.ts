//  PROBLEM-1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) return input.toLowerCase();
  else return input.toUpperCase();
}

// PROBLEM-2
const filterByRating = (
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  const res = items.filter((fil) => fil.rating >= 4);
  console.log(res);
  return res;
};

// PROBLEM-3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const res = arrays.reduce((a, b) => a.concat(b), []);
  console.log(res);
  return res;
}

// PROBLEM-4

class Vehicle {
  constructor(private make: string, private year: number) {}
  getInfo(): string {
    return `Make ${this.make}, year:${this.year}`;
  }
}
class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel(): string {
    return `Model ${this.model}`;
  }
}

// PROBLEM-5
function processValue(value: string | number): number {
  if (typeof value === "string") {
    const res = [...value].length;
    console.log(res);
    return res;
  } else {
    console.log(value);
    return value;
  }
}

// PROBLEM-6
interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  let expensive = products[0];
  products.forEach((product) => {
    if (product.price > expensive.price) {
      expensive = product;
    }
  });
  return expensive;
}

// PROBLEM-7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Friday) {
    const res = `Weekend`;
    return res;
  } else {
    const res = `Weekday`;
    return res;
  }
}

// PROBLEM-8

async function squareAsync(n: number): Promise<number> {
  if (n < 0) return Promise.reject(new Error(`Number canot be negatibve`));
  return new Promise((res) => {
    setTimeout(() => {
      res(n * n);
    }, 1000);
  });
}
