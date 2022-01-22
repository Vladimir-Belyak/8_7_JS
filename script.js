let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (isNaN(minValue) || isNaN(maxValue)) {       //жаль мы "ещё не знаем" функции ;)
    minValue = 0;
    maxValue = 100;
}

// Объявление переменных
let answerNumberText;
let answerNumberHund;
let answerNumberTen;
let answerNumberUnit;
let answerNumberAbs;
let temp;

// Если выпадает из диапазона, то выбираем верхнюю или нижнюю границу
(minValue < -999 || minValue > 999)?minValue = -999:false;
(maxValue > 999 || maxValue< - 999)?maxValue = 999:false;
if (minValue > maxValue) {      // Проверяем, если нужно меняем для корректной работы алгоритма
    temp = minValue;
    minValue = maxValue;
    maxValue = temp;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;

 //Число в текст 
 if (answerNumber == 0){
     answerNumberText = "нуль";
 } else {
    if (answerNumber<0){
        answerNumberText = "минус ";
        answerNumberAbs = Math.abs(answerNumber);
    } else{
        answerNumberAbs = answerNumber;
        answerNumberText = "";
    }
    answerNumberHund = Math.trunc(answerNumberAbs/100);
    answerNumberTen = Math.trunc((answerNumberAbs-answerNumberHund*100)/10);
    answerNumberUnit = answerNumberAbs%10;
    console.log(answerNumber ,answerNumberAbs, answerNumberHund, answerNumberTen, answerNumberUnit, answerNumberText);
    switch (answerNumberHund){
        case 1:
            answerNumberText += "сто";
          break;
        case 2:
            answerNumberText += "двести";
          break;
        case 3:
            answerNumberText += "триста";
          break;
        case 4:
            answerNumberText += "четыреста";
          break;
        case 5:
            answerNumberText += "пятьсот";
          break;
        case 6:
            answerNumberText += "шестьсот";
          break;
        case 7:
            answerNumberText += "семьсот";
          break;
        case 8:
            answerNumberText += "восемьсот";
          break;
        case 9:
            answerNumberText += "девятьсот";
          break;
    }
    if (answerNumberTen == 1){              //диапазон-исключение
        switch (answerNumberUnit){
            case 1:
                answerNumberText += " одиннадцать";
              break;
            case 2:
                answerNumberText += " двенадцать";
              break;
            case 3:
                answerNumberText += " тринадцать";
              break;
            case 4:
                answerNumberText += " четырнадцать";
              break;
            case 5:
                answerNumberText += " пятнадцать";
              break;
            case 6:
                answerNumberText += " шестнадцать";
              break;
            case 7:
                answerNumberText += " семьнадцать";
              break;
            case 8:
                answerNumberText += " восемьнадцать";
              break;
            case 9:
                answerNumberText += " девятнадцать";
              break;
        };
    }
    else {
        switch (answerNumberTen){
            case 2:
                answerNumberText += " двадцать";
             break;
            case 3:
                answerNumberText += " тридцать";
              break;
            case 4:
                answerNumberText += " сорок";
              break;
            case 5:
                answerNumberText += " пятьдесят";
              break;
            case 6:
                answerNumberText += " шестьдесят";
              break;
            case 7:
                answerNumberText += " семьдесят";
              break;
            case 8:
                answerNumberText += " восемьдесят";
              break;
            case 9:
                answerNumberText += " девяносто";
              break;
        }
        switch (answerNumberUnit){
            case 1:
                answerNumberText += " один";
              break;
            case 2:
                answerNumberText += " два";
              break;
            case 3:
                answerNumberText += " три";
              break;
            case 4:
                answerNumberText += " четыре";
              break;
            case 5:
                answerNumberText += " пять";
              break;
            case 6:
                answerNumberText += " шесть";
              break;
            case 7:
                answerNumberText += " семь";
              break;
            case 8:
                answerNumberText += " восемь";
              break;
            case 9:
                answerNumberText += " девять";
              break;
        }
    }
}
            (answerNumberText.length > 20)? answerNumberText = answerNumber : false;
            const answerRandom = Math.round( Math.random()*3);            
            switch (answerRandom) {
                case 0:
                    answerField.innerText = `Наверное, это число ${answerNumberText }?`;
                  break;
                case 1:
                    answerField.innerText = `Да это легко! Ты загадал ${answerNumberText }?`;
                  break;
                case 2:
                    answerField.innerText = `Без теории вероятности понятно, что это число ${answerNumberText }?`;
                  break;
                default:
                    answerField.innerText = `Вы загадали число ${answerNumberText }?`;
            }

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    if (isNaN(minValue) || isNaN(maxValue)) {
        minValue = 0;
        maxValue = 100;
    }
    
    // Если выпадает из диапазона, то выбираем верхнюю или нижнюю границу
    (minValue < -999 || minValue > 999)?minValue = -999:false;
    (maxValue > 999 || maxValue< - 999)?maxValue = 999:false;
    if (minValue > maxValue) {      // Проверяем, если нужно меняем для корректной работы алгоритма
       temp = minValue;
       minValue = maxValue;
        maxValue = temp;
    }

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    
 //Число в текст 
 if (answerNumber == 0){
    answerNumberText = "нуль";
} else {
   if (answerNumber<0){
       answerNumberText = "минус ";
       answerNumberAbs = Math.abs(answerNumber);
   } else{
       answerNumberAbs = answerNumber;
       answerNumberText = "";
   }
   answerNumberHund = Math.trunc(answerNumberAbs/100);
   answerNumberTen = Math.trunc((answerNumberAbs-answerNumberHund*100)/10);
   answerNumberUnit = answerNumberAbs%10;
   console.log(answerNumber ,answerNumberAbs, answerNumberHund, answerNumberTen, answerNumberUnit, answerNumberText);
   switch (answerNumberHund){
       case 1:
           answerNumberText += "сто";
         break;
       case 2:
           answerNumberText += "двести";
         break;
       case 3:
           answerNumberText += "триста";
         break;
       case 4:
           answerNumberText += "четыреста";
         break;
       case 5:
           answerNumberText += "пятьсот";
         break;
       case 6:
           answerNumberText += "шестьсот";
         break;
       case 7:
           answerNumberText += "семьсот";
         break;
       case 8:
           answerNumberText += "восемьсот";
         break;
       case 9:
           answerNumberText += "девятьсот";
         break;
   }
   if (answerNumberTen == 1){              //диапазон-исключение
       switch (answerNumberUnit){
           case 1:
               answerNumberText += " одиннадцать";
             break;
           case 2:
               answerNumberText += " двенадцать";
             break;
           case 3:
               answerNumberText += " тринадцать";
             break;
           case 4:
               answerNumberText += " четырнадцать";
             break;
           case 5:
               answerNumberText += " пятнадцать";
             break;
           case 6:
               answerNumberText += " шестнадцать";
             break;
           case 7:
               answerNumberText += " семьнадцать";
             break;
           case 8:
               answerNumberText += " восемьнадцать";
             break;
           case 9:
               answerNumberText += " девятнадцать";
             break;
       };
   }
   else {
       switch (answerNumberTen){
           case 2:
               answerNumberText += " двадцать";
            break;
           case 3:
               answerNumberText += " тридцать";
             break;
           case 4:
               answerNumberText += " сорок";
             break;
           case 5:
               answerNumberText += " пятьдесят";
             break;
           case 6:
               answerNumberText += " шестьдесят";
             break;
           case 7:
               answerNumberText += " семьдесят";
             break;
           case 8:
               answerNumberText += " восемьдесят";
             break;
           case 9:
               answerNumberText += " девяносто";
             break;
       }
       switch (answerNumberUnit){
           case 1:
               answerNumberText += " один";
             break;
           case 2:
               answerNumberText += " два";
             break;
           case 3:
               answerNumberText += " три";
             break;
           case 4:
               answerNumberText += " четыре";
             break;
           case 5:
               answerNumberText += " пять";
             break;
           case 6:
               answerNumberText += " шесть";
             break;
           case 7:
               answerNumberText += " семь";
             break;
           case 8:
               answerNumberText += " восемь";
             break;
           case 9:
               answerNumberText += " девять";
             break;
       }
   }
}
           (answerNumberText.length > 20)? answerNumberText = answerNumber : false;
           const answerRandom = Math.round( Math.random()*3);            
           switch (answerRandom) {
               case 0:
                   answerField.innerText = `Наверное, это число ${answerNumberText }?`;
                 break;
               case 1:
                   answerField.innerText = `Да это легко! Ты загадал ${answerNumberText }?`;
                 break;
               case 2:
                   answerField.innerText = `Без теории вероятности понятно, что это число ${answerNumberText }?`;
                 break;
               default:
                   answerField.innerText = `Вы загадали число ${answerNumberText }?`;
           }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

 //Число в текст 
 if (answerNumber == 0){
    answerNumberText = "нуль";
} else {
   if (answerNumber<0){
       answerNumberText = "минус ";
       answerNumberAbs = Math.abs(answerNumber);
   } else{
       answerNumberAbs = answerNumber;
       answerNumberText = "";
   }
   answerNumberHund = Math.trunc(answerNumberAbs/100);
   answerNumberTen = Math.trunc((answerNumberAbs-answerNumberHund*100)/10);
   answerNumberUnit = answerNumberAbs%10;
   console.log(answerNumber ,answerNumberAbs, answerNumberHund, answerNumberTen, answerNumberUnit, answerNumberText);
   switch (answerNumberHund){
       case 1:
           answerNumberText += "сто";
         break;
       case 2:
           answerNumberText += "двести";
         break;
       case 3:
           answerNumberText += "триста";
         break;
       case 4:
           answerNumberText += "четыреста";
         break;
       case 5:
           answerNumberText += "пятьсот";
         break;
       case 6:
           answerNumberText += "шестьсот";
         break;
       case 7:
           answerNumberText += "семьсот";
         break;
       case 8:
           answerNumberText += "восемьсот";
         break;
       case 9:
           answerNumberText += "девятьсот";
         break;
   }
   if (answerNumberTen == 1){              //диапазон-исключение
       switch (answerNumberUnit){
           case 1:
               answerNumberText += " одиннадцать";
             break;
           case 2:
               answerNumberText += " двенадцать";
             break;
           case 3:
               answerNumberText += " тринадцать";
             break;
           case 4:
               answerNumberText += " четырнадцать";
             break;
           case 5:
               answerNumberText += " пятнадцать";
             break;
           case 6:
               answerNumberText += " шестнадцать";
             break;
           case 7:
               answerNumberText += " семьнадцать";
             break;
           case 8:
               answerNumberText += " восемьнадцать";
             break;
           case 9:
               answerNumberText += " девятнадцать";
             break;
       };
   }
   else {
       switch (answerNumberTen){
           case 2:
               answerNumberText += " двадцать";
            break;
           case 3:
               answerNumberText += " тридцать";
             break;
           case 4:
               answerNumberText += " сорок";
             break;
           case 5:
               answerNumberText += " пятьдесят";
             break;
           case 6:
               answerNumberText += " шестьдесят";
             break;
           case 7:
               answerNumberText += " семьдесят";
             break;
           case 8:
               answerNumberText += " восемьдесят";
             break;
           case 9:
               answerNumberText += " девяносто";
             break;
       }
       switch (answerNumberUnit){
           case 1:
               answerNumberText += " один";
             break;
           case 2:
               answerNumberText += " два";
             break;
           case 3:
               answerNumberText += " три";
             break;
           case 4:
               answerNumberText += " четыре";
             break;
           case 5:
               answerNumberText += " пять";
             break;
           case 6:
               answerNumberText += " шесть";
             break;
           case 7:
               answerNumberText += " семь";
             break;
           case 8:
               answerNumberText += " восемь";
             break;
           case 9:
               answerNumberText += " девять";
             break;
       }
   }
}
           (answerNumberText.length > 20)? answerNumberText = answerNumber : false;
           const answerRandom = Math.round( Math.random()*3);            
           switch (answerRandom) {
               case 0:
                   answerField.innerText = `Наверное, это число ${answerNumberText }?`;
                 break;
               case 1:
                   answerField.innerText = `Да это легко! Ты загадал ${answerNumberText }?`;
                 break;
               case 2:
                   answerField.innerText = `Без теории вероятности понятно, что это число ${answerNumberText }?`;
                 break;
               default:
                   answerField.innerText = `Вы загадали число ${answerNumberText }?`;
           }          
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

 //Число в текст 
 if (answerNumber == 0){
    answerNumberText = "нуль";
} else {
   if (answerNumber<0){
       answerNumberText = "минус ";
       answerNumberAbs = Math.abs(answerNumber);
   } else{
       answerNumberAbs = answerNumber;
       answerNumberText = "";
   }
   answerNumberHund = Math.trunc(answerNumberAbs/100);
   answerNumberTen = Math.trunc((answerNumberAbs-answerNumberHund*100)/10);
   answerNumberUnit = answerNumberAbs%10;
   console.log(answerNumber ,answerNumberAbs, answerNumberHund, answerNumberTen, answerNumberUnit, answerNumberText);
   switch (answerNumberHund){
       case 1:
           answerNumberText += "сто";
         break;
       case 2:
           answerNumberText += "двести";
         break;
       case 3:
           answerNumberText += "триста";
         break;
       case 4:
           answerNumberText += "четыреста";
         break;
       case 5:
           answerNumberText += "пятьсот";
         break;
       case 6:
           answerNumberText += "шестьсот";
         break;
       case 7:
           answerNumberText += "семьсот";
         break;
       case 8:
           answerNumberText += "восемьсот";
         break;
       case 9:
           answerNumberText += "девятьсот";
         break;
   }
   if (answerNumberTen == 1){              //диапазон-исключение
       switch (answerNumberUnit){
           case 1:
               answerNumberText += " одиннадцать";
             break;
           case 2:
               answerNumberText += " двенадцать";
             break;
           case 3:
               answerNumberText += " тринадцать";
             break;
           case 4:
               answerNumberText += " четырнадцать";
             break;
           case 5:
               answerNumberText += " пятнадцать";
             break;
           case 6:
               answerNumberText += " шестнадцать";
             break;
           case 7:
               answerNumberText += " семьнадцать";
             break;
           case 8:
               answerNumberText += " восемьнадцать";
             break;
           case 9:
               answerNumberText += " девятнадцать";
             break;
       };
   }
   else {
       switch (answerNumberTen){
           case 2:
               answerNumberText += " двадцать";
            break;
           case 3:
               answerNumberText += " тридцать";
             break;
           case 4:
               answerNumberText += " сорок";
             break;
           case 5:
               answerNumberText += " пятьдесят";
             break;
           case 6:
               answerNumberText += " шестьдесят";
             break;
           case 7:
               answerNumberText += " семьдесят";
             break;
           case 8:
               answerNumberText += " восемьдесят";
             break;
           case 9:
               answerNumberText += " девяносто";
             break;
       }
       switch (answerNumberUnit){
           case 1:
               answerNumberText += " один";
             break;
           case 2:
               answerNumberText += " два";
             break;
           case 3:
               answerNumberText += " три";
             break;
           case 4:
               answerNumberText += " четыре";
             break;
           case 5:
               answerNumberText += " пять";
             break;
           case 6:
               answerNumberText += " шесть";
             break;
           case 7:
               answerNumberText += " семь";
             break;
           case 8:
               answerNumberText += " восемь";
             break;
           case 9:
               answerNumberText += " девять";
             break;
       }
   }
}
           (answerNumberText.length > 20)? answerNumberText = answerNumber : false;
           const answerRandom = Math.round( Math.random()*3);            
           switch (answerRandom) {
               case 0:
                   answerField.innerText = `Наверное, это число ${answerNumberText }?`;
                 break;
               case 1:
                   answerField.innerText = `Да это легко! Ты загадал ${answerNumberText }?`;
                 break;
               case 2:
                   answerField.innerText = `Без теории вероятности понятно, что это число ${answerNumberText }?`;
                 break;
               default:
                   answerField.innerText = `Вы загадали число ${answerNumberText }?`;
           }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const answerRandomSucces = Math.round( Math.random()*2);            
            switch (answerRandomSucces) {
                case 0:
                    answerField.innerText = `Классно! Попробуем еще раз? \n\u{1F609}`;
                  break;
                case 1:
                    answerField.innerText = `Было легко! \n\u{1F643}`;
                  break;
                default:
                    answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
            }
        gameRun = false;
    }
})

