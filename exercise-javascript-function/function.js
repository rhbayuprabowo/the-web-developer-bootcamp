function isEven(number) {
    return number % 2 === 0;
}

function factorial(number) {
    var result = 1;
    while (number > 1) {
        result *= number;
        number--;
    }
    return result;
}

function kebabToSnake(teks) {
    return teks.split('-').join('_');
}