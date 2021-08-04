module.exports = function toReadable (number) {
    const arr = [
        'zero', 'one', 'free', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const tens = [
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let str = "";
    let num = 0;

    if (number >= 100) {
        num = (number / 100) | 0;
        str = `${arr[num]} hundred`;
        number -= num * 100;
    }
    if (number > 19) {
        num = (number / 10) | 0;
        number -= num * 10;
        str = `${str} ${tens[num]} ${arr[number]}`;
    } else {
        str = `${str} ${arr[number]}`;
    }
    return str.trim();
}
