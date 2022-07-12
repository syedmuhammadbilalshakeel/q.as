// chapter no 35 to 38

// qno#01
// function foo(){
//     var now = new Date();
//     document.write(now);
// }
// foo()

// qno#02
// function foo() {
//     var user = prompt("Enter your ist name");
//     var input = prompt("Enter your last name");
//     document.write(user + " " + input);
// }
// foo();

// qno#03
// function foo() {
//     var a = +prompt("Enter your ist num");
//     var b = +prompt("Enter your 2nd number")
//     return a + b;
// }
// document.write(foo());

// qno#04
// function foo(a,b) {
//     return a + b;
// }
// document.write(foo(5,7));

// qno#05
// function squrae(a,b,c){
//     return a + b - c;
// }
// document.write(squrae(5,4,3));

// qno#06
// function foo() {
//     var num = 5;
//     var num1 = num*4*3*2*1;
//     document.write(num1);
// }
// foo();

// qno#07
// function foo() {
//     var user = prompt("Enter your starting number");
//     var input = prompt("Enter your ending value");
//     for (var i = user; i <= input; i++){
//         document.write(i + "<br>");
//     }
// }
// foo();

// qno#08
// function foo() {
//     function greet() {
//         var userInput = prompt("Length value");
//         var now = prompt("Width value");
//         var data = userInput * now;
//         document.write("legth value: " + userInput + "<br>" + "Width value: " + now + "<br>" + "Area of square value: " + data + "<br> <br>");
//     }
//     greet();
//     var user = +prompt("Base value");
//     var input = +prompt("perpendicular value");
//     var write = user + input;
//     document.write("Base value: " + user + "<br>" + "Perpendicular value: " + input + "<br>" + "Hypotenuse value: " + write);
// }
// foo()

// qno#09
// function greet() {
//     var userInput = prompt("Length value");
//     var now = prompt("Width value");
//     var data = userInput * now;
//     document.write("legth value: " + userInput + "<br>" + "Width value: " + now + "<br>" + "Area of square value: " + data + "<br> <br>");
// }
// greet();

// qno#10
// function foo(){
//     var user = prompt("Enter your palindrome word").toLowerCase();
//     var flag = "";
//     for(var i = user.length - 1; i >= 0; i--){
//         flag += user[i];
//     }
//     if (flag === user){
//         document.write(flag + " Palindrome word");
//     }else{
//         document.write("This is not palindrome word");
//     }
// }
// foo();

// qno#11
// function foo(){
    // var str = "the quick brown fox";
    // var str1 = str.slice(0,1).toUpperCase();
    // var str2 = str.slice(1,3);
    // var str3 = str.slice(4,5).toUpperCase();
    // var str4 = str.slice(5,9);
    // var str5 = str.slice(10,11).toUpperCase();
    // var str6 = str.slice(11,15);
    // var str7 = str.slice(16,17).toUpperCase();
    // var str8 = str.slice(17,19);
    // document.write("Example String: " + str + "<br>");
    // document.write("Expected Output: " + str1 + str2 + " " + str3 + str4 + " " + str5 + str6 + " " + str7 + str8);
// }
// foo();

// qno#12
// function foo(){
//     var str = "Web Development Tutorial";
//     var str1 = str.slice(4,15);
//     document.write("Example String: " + str + "<br>");
//     document.write("Expected Output: " + str1);
// }
// foo();

// qno#13
// function letterOccurence (strings,character){
//     var count = 0;
//     for (var i = 0; i < strings.length; i++) {
//         if (strings.charAt(i) == character){
//             count++;
//     }
// }
//   return count;
// }
// letterOccurence ("Abdul Qadeer","a")

// qno#14
function foo(){
    var radius = prompt("Radius value");
    var pi = 3.142;
    var circumference = Math.round(2 * pi * radius);
    var area = Math.round(pi * radius * radius);
    document.write("Circumference of circle is: " + circumference + "<br>");
    document.write("Area of circle is: " + area);
}
foo();