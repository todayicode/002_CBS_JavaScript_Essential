

//Дополнительное задание
function calculate(a, b, c) {
    a = +prompt("Введите целочисленное значение: ");
    b = +prompt("Введите целочисленное значение: ");
    c = +prompt("Введите целочисленное значение: ");
    return (a + b + c) / 3;
}

document.write("Среднее арифметическое введенных параметров: " + Math.round(calculate() ));


//Задание 1.
function add(a,b) {
    return a + b;
}
function sub(a,b) {
    return a - b;
}

function div(a,b) {
    return a/b
}
function mul(a,b) {
    return a * b;
}
function remain(a,b) {
    return a % b;
}

var a = +prompt("Введите первое число: ");
var operation = prompt("Введите знак действия (+ - * / %)")
var b = +prompt("Введите второе число: ");

switch(operation) {
    case '+':
        document.write("Результат сложения: " + add(a,b) );
        break;
    case '-':
        document.write("Результат вычитания: " + sub(a,b) );
        break;
    case '*':
        document.write("Результат умножения: " + mul(a,b) );
        break;
    case '/':
        if (b == 0) {
            document.write("Деление на 0 невозможно.");
            break;
        }
        else {
        document.write("Результат деления: " + div(a,b) );
        break;
        }
    case '%':
        document.write("Результат деления с остатком: " + remain(a,b) );
        break;
}

//Задание 2.

function number(a) {
    if (a >= 0) {
        document.write("Число является положительным." + "<br>")
    } 
    else {
        document.write("Число является отрицательным." + "<br>")
    }
    for (var i = 2; i < a; i++) {
        if (a % i === 0) {
           document.write("Число обычное" + "<br>");
           break;
        }
        else {
            if (i == a - 1) {
            document.write("Число простое" + "<br>");
            }
        }
    }
    for (i = 2; i <=9; i++) {
        if (i == 4 || i == 7 || i == 8) {
            continue;
        }
        if (a % i === 0) {
            document.write("Число делится на: " + i + " без остатка." + "<br>")
        }
    }
}
number(24);