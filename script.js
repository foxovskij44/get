let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let ob = prompt('Введите обязательную статью расходов в этом месяце');
let skok = prompt('Во сколько обойдется?');

let appData = {
    money: money,
    timeData: time,
    expenses: {
        ob : skok,
        },
    optionalExpenses: '',
    income: [''],
    savings: false
};

let oneday = alert(money / 30);