module.exports = function toReadable(number) {
    let ones = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }

    let tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    let hundred = 'hundred';
    let str = number.toString();
    let result = [];

    if (number === 0) {
        return 'zero';
    }

    if (number >= 100) {
        let firstChar = str[0];
        let firstWord = ones[firstChar];

        result.push(firstWord);
        result.push(hundred);
    }

    if (+str[str.length - 2] === 1) {
        let twoCharNumber = str[str.length - 2] + str[str.length - 1];
        let secondWord = ones[twoCharNumber];

        result.push(secondWord);
        return result.join(' ');
    }

    if (+str[str.length - 2] > 1) {
        let secondChar = str[str.length - 2];
        let secondWord = tens[secondChar];
        result.push(secondWord);
    }

    let thirdChar = str[str.length - 1];
    let thirdWord = ones[thirdChar];
    if (+thirdChar !== 0) {
        result.push(thirdWord);
    }

    return result.join(' ');
}
