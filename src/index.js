const numbersUnder20 = [
    { key: "0", value: "zero" },
    { key: "1", value: "one" },
    { key: "2", value: "two" },
    { key: "3", value: "three" },
    { key: "4", value: "four" },
    { key: "5", value: "five" },
    { key: "6", value: "six" },
    { key: "7", value: "seven" },
    { key: "8", value: "eight" },
    { key: "9", value: "nine" },
    { key: "10", value: "ten" },
    { key: "11", value: "eleven" },
    { key: "12", value: "twelve" },
    { key: "13", value: "thirteen" },
    { key: "14", value: "fourteen" },
    { key: "15", value: "fifteen" },
    { key: "16", value: "sixteen" },
    { key: "17", value: "seventeen" },
    { key: "18", value: "eighteen" },
    { key: "19", value: "nineteen" },
];

const singleNumbers = [
    { key: "0", value: "0" },
    { key: "1", value: "one" },
    { key: "2", value: "two" },
    { key: "3", value: "three" },
    { key: "4", value: "four" },
    { key: "5", value: "five" },
    { key: "6", value: "six" },
    { key: "7", value: "seven" },
    { key: "8", value: "eight" },
    { key: "9", value: "nine" },
];

const doubleNumbers = [
    { key: "0", value: "0" },
    { key: "1", value: "ten" },
    { key: "2", value: "twenty" },
    { key: "3", value: "thirty" },
    { key: "4", value: "forty" },
    { key: "5", value: "fifty" },
    { key: "6", value: "sixty" },
    { key: "7", value: "seventy" },
    { key: "8", value: "eighty" },
    { key: "9", value: "ninety" },
];

const underTwenty = (number) => {
    const humanNumber = numbersUnder20.filter((el) => el.key == number);
    return humanNumber[0].value;
};

const single = (number) => {
    if (number == 0) {
        return "zero";
    }
    const humanNumber = singleNumbers.filter((el) => el.key == number);
    return humanNumber[0].value;
};

const double = (number) => {
    const humanNumber = doubleNumbers.filter((el) => el.key == number);
    return humanNumber[0].value;
};

const under100 = (number) => {
    const arrNum = number.toString().split("").reverse();
    if (number === 0) {
        return "zero";
    }
    if (number < 20) {
        return underTwenty(number);
    }
    if (number > 19 && number < 100) {
        const first = single(arrNum[0]);
        const second = double(arrNum[1]);
        if (arrNum.length === 1) {
            return `${first}`;
        }
        if (arrNum.length === 2 && first != "zero") {
            return `${second} ${first}`;
        }
        return `${second}`;
    }
};

module.exports = function toReadable(number) {
    const arrNum = number.toString().split("");
    const first = arrNum[0];
    const num = Math.trunc(arrNum.splice(1).join(""));
    if (number < 100) {
        return under100(number);
    }
    if (number > 99) {
        const firstNum = single(first);
        const secondNum = under100(num);
        if (firstNum && secondNum != "zero" && secondNum != "") {
            return `${firstNum} hundred ${secondNum}`;
        }
        return `${firstNum} hundred`;
    }
};
