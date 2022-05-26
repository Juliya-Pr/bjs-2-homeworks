//задача 1
function parseCount(a) {
  let result = parseInt(a);
    if (isNaN(result)) {
      const divideError = new Error("Невалидное значение");
      throw divideError;
    }
    return result;
}

function validateCount(b) {
  try {
    return parseCount(b);
  } catch(err) {
    return err;
  }
}

//задача 2
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (a + b < c || a + c < b || b + c < a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea() {
		let p = 1 / 2 * this.getPerimeter();
		let triangleAria = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return +triangleAria.toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch {
		return {
			getArea() {
				return ('Ошибка! Треугольник не существует');
			},
			getPerimeter(a, b, c) {
				return ('Ошибка! Треугольник не существует');
			}
		}
	}
}
