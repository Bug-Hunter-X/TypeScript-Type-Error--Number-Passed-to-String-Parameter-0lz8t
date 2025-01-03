# TypeScript Type Error: Number Passed to String Parameter

This repository demonstrates a simple type error in TypeScript where a numeric value is passed to a function expecting a string argument.  The TypeScript compiler will catch this error during compilation.

## Bug

The `bug.ts` file contains a function `printString` that expects a string argument.  However, the function is called with a number, resulting in a type error.

## Solution

The `bugSolution.ts` file shows the corrected version where the number is explicitly converted to a string before being passed to the function, or the function signature is updated to handle the number type.