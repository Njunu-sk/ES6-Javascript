# Introduction to ES6

## Overview

- [Why ES6](#why-es6)
- [What is ES6](#what-is-es6)
- [Advantages of ES6](#advantages-of-es6)
- [Disadvantages of ES6](#disadvantages-of-es6)
- [Features of ES6](#features-of-es6)
- [const and let](#const-and-let)
- [Arrow functions](#arrow-functions)
- [Template Literals](#template-literals)
- [Default parameters](#default-parameters)
- [Array and Object Destructuring](#array-and-object-destructuring)
- [Import and export](#import-and-export)
- [Classes](#classes)

## Why ES6

**What is ES6**

ES6 refers to the ECMA script programming language.ECMA was released in June 2015.

Tells companies that make browsers how exactly they should make Javascript work in their respective browsers.

[More on History](http://wp-production.careerfoundry.com/en/blog/web-development/introduction-to-es6-javascript/)

**Why ES6**, compatible with all browsers and allows you to write less code and do more.

**Advantages of ES6**

- Brings in new features that were absent in earlier versions.

**Disadvantages of ES6**

- Confusion for the best coding practice.

# Features of ES6

## const and let

#### Mutability

**const**, a keyword for declaring variables in ES6, enhances immutability except when used with objects.

Unlike _*const*_, _*let*_ can be reassigned, **mutable variable**

It is preferred to use const when you don't want to reassign your variables.

**const**, is best used when targetting selectors.

#### Hoisting

**var**, can be _hoisted_, variable can be used before its declaration/initialization [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

**let**, raises an exception when read before its initialization, this is also true with **const**

Both _*let*_ and _*const*_ are **blocked-scope**, a variable is only available within its scope.

## Arrow functions

Makes your code more readable, structured, and modern.

It is a quicker way to write function expressions.

#### The behavior of **this** in an arrow function

Dfn: ** _this_**, references an object that is executing the current function.

**_this_**, in javascript is determined by invocation context of a function and where it is called. [More on this keyword](https://medium.com/tech-tajawal/javascript-this-4-rules-7354abdb274c)

Arrow functions don't bind _this_, instead, this is bound lexically.

**Lexical scoping** - ability to identify a variable in a program by reading through code, [Closures in Ruby](https://www.section.io/engineering-education/understanding-closures-in-ruby/)

## Template Literals (`)

This is a cool feature, **plus** (+) is not used in string concatenation.

This makes your string more organized.

[Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Default Parameters

Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

## Array and Object Destructuring

Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

That is, we can extract data from arrays and objects and assign them to variables.

[Object Destructuring in Javascript](https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/)

## Import and export

#### Modules

As our application grows bigger, we want to split it into multiple files, so-called ???modules???.

A module may contain a class or a library of functions for a specific purpose.

Modules can load each other and use special directives **export** and **import** to interchange functionality, call functions of one module from another one

- **export** keyword labels variables and functions that should be accessible from outside the current module.
- **import** allows the import of functionality from other modules.

Using import and export allows one to create separate and reusable components.

## Rest parameter and Spread operator (...)

Rest parameters are used to get the argument of an array and return a new array.

The spread operator has the same syntax as the rest parameter, but the spread operator takes the Array itself and not just the arguments.

We can use the Spread parameter to get the values of an Array, instead of using a for loop or any other method.

A function can be called with any number of arguments, no matter how it is defined

[Rest parameters](https://javascript.info/rest-parameters-spread)

## Classes

A class is a blueprint of an object, the core of object-oriented programming.

#### Advantages of using classes

- Encapsulates code.
- Classes give code a nice structure.

Classes in JavaScript do not actually offer additional functionality and are often described as providing ???syntactical sugar??? over prototypes and inheritance in that they offer a cleaner and more elegant syntax.

Class syntax in JavaScript makes it more straightforward for developers to move between languages.

A JavaScript class is a type of function.

We use _function_ expression syntax to initialize a **function** and _class_ expression syntax to initialize a **class**.

A constructor function is initialized with a number of parameters, which would be assigned as properties of this, referring to the function itself.

#### Defining a class

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class

**Class body**

The body of a class is the part that is in curly brackets {}.

This is where you define class members, such as methods or constructors.

**Constructor** - the constructor method is a special method for creating and initializing an object created with a class.

There can only be one special method with the name **constructor** in a class.

A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

A constructor can use the **super** keyword to call the constructor of the superclass.

[JavaScript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### Conclusion

Understanding ES6 features will help the developer understand **framework** workings.

With these tools in place, you will be able to dive deep and build [React Applications](https://reactjs.org/tutorial/tutorial.html).

Visit [ECMAScript 6](http://es6-features.org/#Constants), for all features.
