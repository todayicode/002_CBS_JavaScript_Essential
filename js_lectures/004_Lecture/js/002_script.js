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