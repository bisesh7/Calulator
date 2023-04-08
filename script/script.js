function addValue(){
    // get the operands value
    let firstNumber = document.getElementById("input_a").value;
    let secondNumber = document.getElementById("input_b").value;

    // parse to integer. You can use: parseInt(input, 10);
    let firstNumberInteger = parseInt(firstNumber, 10);
    let secondNumberInteger = parseInt(secondNumber, 10);

    // perform operation
    let answer = firstNumberInteger + secondNumberInteger;

    // creating the text output
    let text = answer.toString();

    // (if you want to check) print out in console
    console.log(text);

    // change the text area
    document.mycalculator.output.value = text;
}


function mulValue(){
    // get the operands value
    let firstNumber = document.getElementById("input_a").value;
    let secondNumber = document.getElementById("input_b").value;

    // parse to integer. You can use: parseInt(input, 10);
    let firstNumberInteger = parseInt(firstNumber, 10);
    let secondNumberInteger = parseInt(secondNumber, 10);

    // perform operation
    let answer = firstNumberInteger * secondNumberInteger;

    // creating the text output
    let text = answer.toString();

    // (if you want to check) print out in console
    console.log(text);

    // change the text area
    document.mycalculator.output.value = text;
}

function divValue(){
    // get the operands value
    let firstNumber = document.getElementById("input_a").value;
    let secondNumber = document.getElementById("input_b").value;

    // parse to integer. You can use: parseInt(input, 10);
    let firstNumberInteger = parseInt(firstNumber, 10);
    let secondNumberInteger = parseInt(secondNumber, 10);

    // perform operation
    let answer = firstNumberInteger / secondNumberInteger;

    // creating the text output
    let text = answer.toString();

    // (if you want to check) print out in console
    console.log(text);

    // change the text area
    document.mycalculator.output.value = text;
}
