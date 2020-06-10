/*
Multiply (Intro)
Write a function that will receive 2 numbers as input and it should return the multiplication of these 2 numbers.
Input: Two arguments. Both are int
Output: Int.
*/
function multTwo(a: number, b: number): number {
    var result: number = a*b;
    return result;
}

/*
Easy Unpack
Your mission here is to create a function that gets an array and returns a tuple with 
3 elements - the first, third and second element from the last for the given array.
Input: A tuple, at least 3 elements long.
Output: A tuple.
*/
function easyUnpack(values: any[]): any[] {
    var list: any[3] = [0,0,0];
    list[0] = values[0];
    list[1] = values[2];
    list[2] = values[values.length-2];
    return list;
}

/*
First Word (simplified)
You are given a string where you have to find its first word.
This is a simplified version of the First Word mission.
Input string consists of only english letters and spaces.
There aren’t any spaces at the beginning and the end of the string.
Input: A string.
Output: A string.
*/
function firstWord(text: string): string {
    var palabra: string = text.split(' ')[0];
    return palabra;
}

/*
Acceptable Password I
In this mission you need to create a password verification function.
Those are the verification conditions:
the length should be bigger than 6.
Input: A string.
Output: A bool.
*/
function isAcceptablePassword(password: string): boolean {
    var pass: string = password;
    if (pass.length > 6) {
        return true;
    }else {
        return false;
    }
    return true;
}

/*
Number Length
You have a positive integer. Try to find out how many digits it has?
Input: A positive Int
Output: An Int.
*/
function numberLength(value: number): number {
    var numero: number = value;
    var digitos: number = numero.toString().length;
    return digitos;
}

/*
End Zeros
Try to find out how many zeros a given number has at the end.
Input: A positive Int
Output: An Int.
*/

function endZeros(value: number): number {
    var num: number = value;
    var n: String = num.toString();
    var cont: number = 0;
    for (var i=n.length -1; i>=0; i--){
        console.log(n[i]);
        if(n[i]=="0"){
            cont++;  
        }else{
            break;
        }
    }
    return cont;
}

/*
Backward String
You should return a given string in reverse order.
Input: A string.
Output: A string.
*/
function backwardString(value: string): string {
    var nombre = value;
    var x = nombre.length;
    var invertir = "";

    while (x>=0) {
        invertir = invertir + nombre.charAt(x);
        x--;
    }
    return invertir;
}

/*
Remove All Before
Not all of the elements are important. What you need to do here is to remove from the array all 
of the elements before the given one.
example
For the illustration [1, 2, 3, 4, 5] we have a array [3, 4, 5] and we need to remove all elements that go before 3 -,
 which is 1 and 2.
We have two edge cases here: (1) if a cutting element cannot be found, then the array shoudn't be changed. 
(2) if the array is empty, then it should remain empty.
Input: Array and the border element.
Output: Array.
*/
function removeAllBefore(values: number[], b: number): number[] {
    var posicion:number = -1;
    for (var i=0; i<values.length; i++){
        //console.log("valor de " +[i]+ " es " + array[i]);
        if(values[i] == b){
          //console.log("num encontrado: " + numero);
           var posicion = i;
            //var eliminar = array.splice(i-1);
            break; 
        }
    }
    if(posicion == -1){
        return values;
    }else{
        return values.slice(posicion);
    }
}

/*
All Upper I
Check if a given string has all symbols in upper case. If the string is empty or doesn't have 
any letter in it - function should return True.
Input: A string.
Output: a boolean.
*/
function isAllUpper(text: string): boolean {
    var control:boolean = true;
    for (var i=0; i<=text.length; i++){
        var ascii = text.charCodeAt(i);
        if((ascii>=65 && ascii <=90) || (ascii>=97 && ascii <=122)){
            if(ascii>=65 && ascii <=90){
                control = true;
            }else{
                control = false;
                break;
            }
        }
    }
    return control;
}

/*
Replace First
In a given array the first element should become the last one. 
An empty array or array with only one element should stay the same.
Input: Array.
Output: Array.
*/
function replaceFirst(values: number[]): number[] {
    var valuesA: number[] = values;
    if(valuesA.length > 1){
        var first = valuesA[0];
        var nuevaLongitud = valuesA.push(first);
        var nuevoArray = valuesA.shift();
    }
    return valuesA;
}

/*
Max Digit
You have a number and you need to determine which digit in this number is the biggest.
Input: A positive int.
Output: An Int (0-9).
*/
function maxDigit(value: number): number {
    var n = value.toString();
    var primero = n[0];
    console.log(primero);
    for(var i=1; i<=n.length; i++){
        console.log(n[i]);
        if(primero <= n[i]){
            console.log("El más grande es:");
            //1 es más pequeño
            primero = n[i];
            console.log(primero);
        } 
    }
    var numberValue: number = Number(primero);
    
    return numberValue;
}

/*
Split Pairs
The mission is in Blocked Mode. Access to the solutions is blocked for a day or two 
(even after you share your own), 
until we'll have enough solutions for you to check. All users who've solved the mission 
will get the notifications about their opening.
Split the string into pairs of two characters. If the string contains an odd number of
 characters, then the missing second character of the final pair should be replaced with an underscore ('_').
Input: A string.
Output: An array of strings.
*/
function splitPairs(text: string): string[] {
    var matriz = [];
    if(text.length == 0){
        return matriz;
    }else if(text.length%2!=0){
        text = text + "_";
    }
    for(var i=0; i<text.length; i++){
          var res: string = text.substr(i, 2);
          i++;
          var count = matriz.push(res);
         
    }
    return matriz;
}

/*
Beginning Zeros
You have a string that consist only of digits. You need to find how many zero digits
 ("0") are at the beginning of the given string.
Input: A string, that consist of digits.
Output: An Int.
*/
function beginningZeros(text: string): number {
    var cont: number = 0;
    for (var i=0; i<text.length; i++){
        console.log(text[i]);
        if(text[i]=="0"){
            cont++;
            
        }else{
            break;
        }
    }
    return cont;
}

/*
Between Markers (simplified)
You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. But there are a few important conditions.
This is a simplified version of the Between Markers mission.
The initial and final markers are always different.
The initial and final markers are always 1 char size.
The initial and final markers always exist in a string and go one after another.
Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
Output: A string.
*/
function betweenMarkers(line: string, left: string, right: string): string {

    for(var i=0; i<line.length; i++){
        //console.log(line[i]);
        if(line[i]==left){
            console.log(left);
            var primera: number = i +1;
            console.log(primera);
            break;
        }
    }
    
     for(var i=0; i<line.length; i++){
        //console.log(line[i]);
        if(line[i]==right){
            console.log(right);
            var segunda: number = i ;
            console.log(segunda);
            break;
        }
    }
    var cadena = line.slice(primera, segunda);
    console.log(cadena);
    return cadena;
}

/*
Correct Sentence
For the input of your function, you will be given one sentence. You have
 to return a corrected version, that starts with a capital letter and ends with a period (dot).
Pay attention to the fact that not all of the fixes are necessary. If a sentence already ends with a period
 (dot), then adding another one will be a mistake.
Input: A string.
Output: A string.
*/
function correctSentence(text: string): string {
    
    if(text.endsWith('.') === false){
        //console.log("no Termina con punto");
        text = text + ".";
    }
    var nuevo:string = text[0].toUpperCase() + text.slice(1);
    console.log(nuevo);
    return nuevo;
}

/*
Is Even
Check if the given number is even or not. Your function should 
return true if the number is even, andfalse if the number is odd.
Input: An int.
Output: A bool.
*/
function isEven(num: number): boolean {
    // your code here
    var par: boolean = false;
    if(num%2 == 0){
        par = true;
    }
    return par;
}
