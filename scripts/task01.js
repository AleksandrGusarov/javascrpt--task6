'use strict';


Array.prototype.diff = function(filter) {
    return this.filter(function(i){return filter.indexOf(i) < 0;});
};

let allstudents = ["Кравчук","Иванов","Петров", "Сидоров", "Березнев"],
    failedstudents = ["Иванов", "Кравчук"];

let result = allstudents.diff(failedstudents);
console.info(result);