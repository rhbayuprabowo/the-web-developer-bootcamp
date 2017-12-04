function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(number) {
    if (number === 0) {
        return 1;
    } else {
        var result = 1;
        while (number > 1) {
            result*=number;
            number--;
        }
        return result;
    }
}

function kebabToSnake(teks) {
    return teks.split('-').join('_');
}

var number = Number(prompt("Input number : "));
alert("The number : " + number + " is " + isEven(number) +
      " and the factorial of tha number is " + factorial(number));

var teks = prompt("Input kebab case sentence");
alert("The snake case of \" " + teks + "\" is \"" +
        kebabToSnake(teks) + "\"");

