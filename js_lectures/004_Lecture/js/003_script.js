function number(a) {
    if (a > 0) {
        document.write("Число является положительным." + "<br>")
    } 
    if (a < 0) {
        document.write("Число является отрицательным." + "<br>")
    } 
    if (a == 1) {
        document.write("Введенное число - 1" + "<br>")
    }
   
    for (var i = 2; i < a; i++) {
        if (a % i === 0) {
            document.write("Число составное" + "<br>");
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
var a = +prompt("Введите число для анализа: ");
number(a);