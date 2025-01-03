function printString(str: string): void {
  console.log(str);
}

printString(String(123)); // Corrected: Convert number to string

//Alternative solution: Update function signature
function printString2(str: string | number): void {
    console.log(String(str));
}
printString2(123); //Corrected: function now accepts number