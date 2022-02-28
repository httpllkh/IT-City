let day_month_year = prompt();
let arr_calend = day_month_year.split(".")


let weekday = (year, month, day) => {
    year = +year
    month = +month
    day = +day
    if (month < 3) {
        --year;
        month += 10;
    } else {
        month -= 2;
    }

    let week = (day + 31 * month / 12 + year + year / 4 - year / 100 + year / 400) % 7;
    let varible_round =  Math.floor(week, 1);
    switch(varible_round) {
        case 1:
            alert("Это понедельник")
            break;
        case 2:
            alert("Это вторник")
            break;
        case 3:
            alert("Это среда")
            break;
        case 4:
            alert("Это четверг")
            break;
        case 5:
            alert("Это пятница")
            break;
        case 6:
            alert("Это суббота")
            break;
        case 0:
            alert("Это воскресенье")
            break;
    }
};

weekday(arr_calend[2], arr_calend[1], arr_calend[0])

//домашнее задание - привести к форме ответа:
// Дата: 21.07.2022, Месяц: Июль, День недели: Среда    