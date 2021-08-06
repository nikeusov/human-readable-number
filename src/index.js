module.exports = function toReadable(number) {
    const arr = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const tens = [
        'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let str = "";
    let num = 0;

    if (number === 0) return 'zero';

    if (number >= 1000) {
        num = (number / 1000) | 0; // получаем количество тысяч
        str = `${arr[num]} thousand`;   // вставляем в строку кол тысяч
        number -= num * 1000;   // отсекаем тысячи
    }

    if (number >= 100) {
        num = (number / 100) | 0; // получаем количество сотен
        str = `${str} ${arr[num]} hundred`;   // вставляем в строку кол сотен
        number -= num * 100;   // отсекаем сотни
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
