# JavaScript Code Execution Process

Let's see all the steps involved : -

## 1. Tokenization/Lexical Analysis

The JavaScript engine first breaks down the source code into smaller pieces called tokens. This process involves identifying keywords, identifiers, operators, and other elements of the language.

## 2. Parsing

The tokens generated in the previous step are organized into a hierarchical structure known as the Abstract Syntax Tree (AST). This tree represents the syntactic structure of the code.

## 3. Execution Context Creation

Before the code begins executing, the JavaScript engine creates an initial global execution context. This context includes the global object (window in a browser environment, global in Node.js), the this keyword (which refers to the global object in non-strict mode), and a reference to the outer lexical environment (which in the case of the global context is null).

## 4. Variable Instantiation (Hoisting)

In this phase, memory space is allocated for variables and function declarations. Variables are initialized with a value of `undefined,` and function declarations are stored in memory. This process is known as hoisting.

## 5. Code Execution

The JavaScript engine begins executing the code line by line, following the order of execution. It assigns values to variables, evaluates expressions, and executes statements. When it encounters function declarations, it adds them to the execution context's variable environment, making them available for invocation anywhere within that context. Function expressions are also evaluated and stored in memory during this phase.

## 6. Function Execution

When a function is invoked, a new execution context is created for that function. This process includes creating a local variable environment, setting up the this keyword, and establishing a reference to the outer lexical environment (lexical scope).

## 7. Return Value

As the code executes, it may encounter return statements, which provide a value back to the caller. When a function returns a value, it also exits its execution context, and control returns to the caller.

## 8. Completion

Once all statements in the code have been executed or a return value has been provided, the execution of that code is complete.

This process repeats for any nested functions or blocks of code, with new execution contexts being created and managed accordingly.
