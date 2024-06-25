let principal = prompt("Enter the principal amount");
let rate = prompt("Enter the annual interest rate");
let number_of_times = prompt("Enter number of times interest is compounded per year");
let r_n_1 = rate / number_of_times;
let r_n_2 = r_n_1 + 1;
let time = prompt("Enter the time the money is invested for");
let t_1 = time * rate;
let r_n_t = r_n_2 ** t_1;
let a_1 = principal * r_n_2;
let a_2 = a_1 ^ t_1;
alert("The compound interest after " + time + "years is " + "$"+ a_2)