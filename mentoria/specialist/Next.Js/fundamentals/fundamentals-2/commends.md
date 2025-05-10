## Before x After

### Before

In the past, computer programs were a bundle of technologies, which could generate collateral effects

The techs mas mostly HTML, CSS, JS, and we basically we created a folder for each technology and organized the project
based on it.

It was usually a mess with low scalability, and, added to it, there were some technologies server side, such as PHP/Java,
which were also part of the mess.

### Now

Nowadays, our applications are organized in components, a component is the union of HTML + CSS + JS/TS, and it have this
idea of being a fragment of an application, which can receive inputs to parametrize these components in order to show it
in the way desired.

The frameworks that fit are, for example, angular from the version 2 up to now; Vue.js; React; Flutter, are all based
in components.

In the end, we'll end up having a component tree, let's use a login page as an example:

Page > Header > Logo, Menu > MenuItem, Content > Title, Main, Footer > Logo, Links

## Paradigms importance

Each paradigm, has its own restrictions/disciplines and, these are the main pillars in functional programming:

### Functional Programming Paradigms

#### 1. Immutability

. Data does not change, instead of modifying existing values, new ones are created
. Example: Instead of updating a list, a new one is created with the desired values

#### 2. Pure Functions

. Always return the same data for the same arguments
. They do not have side effects (don't change external variables, files, database, etc)

✅ Pure Function:

const sum = (a, b) => a + b; // pure

❌ Example: Impure function with side effect:

let total = 0;

const impureSum = (value) => {
total += value;
return total;
}

The problem is that it modifies the total value outside the function, and as a result, the return depends on the previous
value of total.

#### 3. High Order Functions (HOC)

. Functions that receive other functions as argument or return function

. Example

const apply = (fn, value) => fn(valor)

#### 4. Function compositions

const double = x => x \* 2;
const sum3 = x => x + 3;
const compose = x => sum3(double(x))

#### 5. Referential Transparency

Referential transparency is when a piece of code is referentially transparent if we can safely replace that piece of code
with the value it computes and vice-versa, anywhere where that piece is used, without changing the meaning o result of our
program.

e.g.

const add = (a: number, b: number) => a + b

this function is referentially transparent. Why? Because we can replace all occurrences of this function with the expression
it evaluates to, and then with the value it computes, at any point in our program. For example, let's say we have a small
expression called five:

const five = add(2, 3)

We can safely replace five with add(2,3), with 2 + 3, or with 5 anywhere in our code, where the value five is used. By
consequence, all the expressions below are identical in meaning and output

const ten = five + five
const ten_v2 = add(2,3) + add(2,3)
const ten_v3 = 5 + add(2, 3)
const ten_v4 = 10;

An expression is referentially transparent if we can do this back-and-forth replacement anytime anywhere, without changing
the meaning and output of our program.

It provides two key benefits:

1. Refactoring:
   . Repeated expressions can be safely replaced with variables, reducing duplication and improving readability
   . Complex expressions can be broken down into smaller, named components, making code easier to maintain

2. Mental Space
   . RT allows predictable, side-effect-free code that's easy to trace and reason about
   . This reduces the need for complex debugging tools and makes understanding and maintaining code simpler.

Example:

Before Refactoring (repeated & complex):

function add(a, b) {
return a + b;
}

function compute() {
const result = add(2,3) + add(2,3) + add(2,3)
console.log(result)
}

After Refactoring (clearer with variables):

function add(a, b) {
return a + b;
}

function compute() {
const sum = add(2, 3);
const result = sum + sum + sum;
console.log(result)
}

since add(2, 3) is referentially transparent (always returns the same result with the same input and has no side effects)
we can safely extract it into a variable — this avoids duplication and makes the code more readable and maintainable.

#### 6. Recursion Instead of Loops

. Instead of using for and while, repetition is done through functions that are called recursively

Example:

const factorial = n => n <= 1 ? 1 : n \* factorial(n - 1);

### POO Paradigms

#### Encapsulation

What it means:

Encapsulation is about bundling related data and methods inside a class, and hiding internal details from outside access
to protect the object's state

It's useful to keep the data safe from unwanted changes as well making our code modular and easier to maintain

```ts
class BankAccount {
	#balance = 0 // private field

	deposit(amount) {
		if (amount > 0) this.#balance += amount
	}

	getBalance() {
		return this.#balance
	}
}
```

### Abstraction

What it means:

Abstraction means hiding complex implementation details and only exposing the necessary parts through a simple interface

Why it's useful?

It let's user interact with objects without needing to understand their inner workings as well as reduce complexity

```ts
class CoffeeMachine {
	makeCoffee() {
		this.#boilWater()
		this.bewCoffee()

		console.log('Coffee is ready')
	}

	#boilWater() {
		console.log('Boiling water...')
	}

	#brewCoffee() {
		console.log
	}
}
```

Here, we are abstracting away the complex steps involved in making coffee (like boiling water, brewing, temperature
control, etc.), and giving the user a clean and simple method:

#### Inheritance

Inheritance allows one class (child) to reuse code from another class (parent), and optionally extend or customize its
behavior.

Why it's useful ?
Avoids code duplication as well modelling real-word "is-a" relationship

```ts
class Animal {
	move() {
		console.log('Animal moves')
	}
}

class Bird extends Animal {
	fly() {
		console.log('Bird flies')
	}
}
```

#### Polymorphism

Polymorphism means "many forms" — it allows methods to behave differently depending on the object calling them, even if
they share the same name

Why it's useful:

Makes the code flexible and easier to extend as well promotes interface reuse

```ts

class Animal() {
  speak() {
    console.log("Animal speaks")
  }

  class Dog extends Animal {
    speak() {
      console.log("Dog barks")
    }
  }

  class Cat extends Animal {
    speak() {
      console.log("Cat meows")
    }
  }
}

```

In short:

Encapsulation: keeps the details inside the object and a real world analogy is a capsule medicine — works inside, safe outside

Abstractions: shows only what's necessary, and a real world analogy would be car pedals — you don't need to know how the engine
works

Inheritance: Reuses and extends behavior, parent-child relationships

Polymorphism: ALlows different behavior using the same method, like a remote "play" button works for tv, music, or streaming
