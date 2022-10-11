'use strict';

const allCashBox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
];
function getAveragePriceGoods(array){
    var sum1 = 0,
        sum2 = 0,
        sum3 = 0;
    for(var i = 0; i < array.length; i++){
        sum1 += array[i][0];
        sum2 += array[i][1];
    }
    sum3 += sum2/sum1;
    console.log(sum3);
}
getAveragePriceGoods(allCashBox);