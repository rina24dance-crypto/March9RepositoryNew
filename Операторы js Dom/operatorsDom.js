
/* Task 1 */


a = 10

b = 5

c = 2



let formula = a + b + c
console.log(formula)

formula = a + c - b
console.log(formula)

formula = a * b / c
console.log(formula)

formula = a % b
console.log(formula)




/* Task 2 */


x = 7
result = x++ + ++x   /* (7+1= 8  и 1+7= 8)  = 16  */
console.log(result)

                      
y = 9
result = y-- - --y  /* (9(y=8)- (8-1=7) = 2 */
console.log(result)



/* Task 3 */


let outcome =  " The result is " + (4 + 5)      /* числа сначала складываются, а затем преобразуются в строку. */ 


console.log (outcome)



/* Task 4 */

 a2 = 10

 b2 = 4

console.log(a2> b2 && a2> 0 && b2> 0)    /*  Число `a` больше `b`, и оба числа больше 0.   */


/* && это логическое И */

/* || это логическое ИЛИ */


c2 = 7
console.log(c2<10 || c2 == 2)   /*  Число `c` меньше 10 или равно 2.   */


console.log(a2/c2 ==5)       /*  Результат деления `a` на `c` не равен 5.  */




/* Task 5 */


console.log(10=="10")        /* == это оператор равенства без учета типа данных("поэтому true") */
console.log(10==="10")       /* === это оператор равенства с учетом типа данных("поэтому false")  */



/* Task 6 */


x = 9
console.log((x%2==0 || x%3==0) && x%6!=0)      /* False, True, True */


y = 11
console.log(!(y>10 || y<5))    /* ! знак меняет false на true и true на false */