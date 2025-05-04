## Programming Paradigms

Most of the programming paradigm were established between 1950s and 1960s. Among them, three major paradigms have shaped
how we develop software.

### 1. Structured Paradigm:

Before structured programming, we had `unstructured programming`, where a program was essentially a long sequence of
instructions, often using a command called 'goto' to jump between different parts of the code. For example, the second
line might contain a goto that jumps to the fifth line, which might then jump to the tenth, and so so on—creating tangled
and hard to maintain logic

This style made it difficult to organize code into manageable sections. A famous computer scientist (Edsger Dijkstra)
argued in a well-known article that the goto command was harmful. While some defended it for offering flexibility, Dijkstra
pointed out that this flexibility came at the cost of modularity and readability, making it almost impossible to maintain
large programs.

Structured programming introduced a disciplined way of writing code using control structures such as 'if', 'for', 'switch',
and 'while. It replaced the chaotic jumps of goto with clear, block-based logic. Although we lost some flexibility, we
gained maintainability, clarity and modularity, which are essential for developing complex systems.

Today, all modern paradigms, including OOP and Functional Programming, are built on top of the structured paradigm.

### 2. Object-Oriented-Programming (OOP):

    OOP extends the structured paradigm by introducing concepts like `encapsulation`, `inheritance` and `polymorphism`.
    It organizes the code around `objects`—instances of classes that represent real word entities and behaviors.

    OOP helps developers manage complexity by grouping related data and behavior together, making code more modular and
    reusable. It builds upon structured programming principles but adds additional layers to model more complex systems.

### 3. Functional Programming:

Interestingly, functional programming is the oldest paradigm conceptually, even though it became popular only more recently.
It originates from `lambda calculus`, developed by Alonzo Church —who was one of Alan Turing's advisors. Long before programming
languages existed, lambda calculus introduced key ideas such as: Pure Functions, Function Composition, Immutability

Functional programming focuses on writing code using pure functions and avoiding shared state. Although it was the earliest
in theory, its practical application became more prominent much later, specially with modern needs for predictability,
testability and concurrent programming

When we moved into `structured programming`, we introduced the concept of all call stack — a stack-based execution model.
Structured programming is also closely associated with `procedural programming`, which is based on the use of procedures
(or functions). In the context of JavaScript, procedural programming focuses on building programs using named procedures
or functions as the main building blocks.

In Dijkstra's article, he noted that `goto` was harmful in specific scenarios, while in others it was not. This was because
`goto` was also used to create repetition loops. For example, we might have had four lines of code executing in sequence,
and at the end, a `goto` would return to the beginning, causing the code to repeat until, at a certain point, the program
pass it.

When the program detected that it was executing a loop, or even using the `goto` for a conditional — such as skipping a
statement and jumping to the next one (which was basically an if) — it became clear that these kinds of `goto` statements
weren't harmful, that's because, over time, we were able to break the code into blocks, so the code wasn't completely
entangled due to these types of `goto`. However, beyond loops and conditionals, he noticed there were other types of `goto`
statements that jumped to completely different parts of the code, and those were harmful.

Going to structured programming, inside the world of programming, procedures/functions were introduced as well as controlled
structures.

While simple programs consist of only a few lines executed sequentially, until they reach the end, more complex cases on
behave differently. For example, a program might begin in a function (fn1) which calls another function (fn2), which then
calls yet another function (fn3). And this can continue indefinitely

Can we just leave fn3 and return to fn1? The answer is No. When fn3 finishes, it automatically returns control to the function
that called it — in this case, fn2 — which in turn returns control to its caller, and so on, until the execution reach the
base and completes
By this, we'll notice that the program is a big pile of code, and this pile dynamics, is a restriction, that in contrast
to 'goto', where we could simply go from one side to the other, that idea of an execution stack didn't exist.

From this, we can observe that a program is like a large stack of code, and this "stack dynamic" imposes a restriction.
In contrast to goto, where control could jump from one part of the code to another arbitrarily, the concept of execution
stack didn't exist

To transfer control from one function to another, each function must pass control explicitly to the next. When the last
function in the stack completes, it must return control to the one that called it. This means a function cannot return
control to just anyone — it must follow the structure of the call stack.

This principle also applies to repetition structures such as for loops. In such cases, the loop controls the flow of
execution, transferring control in a structured and predictable way — not arbitrarily like a noodle flopping from one
part to another.

Therefore, there's a discipline on the control transfer, which was introduced after the structured programming.

In programming, broadly speaking, we can classify its components in two main categories:

`Data` — Organized through data structures — and `algorithms` — organized through lines and blocks of code (such as named
blocks, functions, structs, etc.);

`Paradigms` are a way of thinking, That is, given a problem, we adopt a "framework" of thoughts to structure our solution
based on principles of a specific paradigm. We look at the problem, from that paradigm's perspective, and then reason about
a solution.

The relation between data,behaviors, and algorithms determines which paradigm we are using

In programming based in `goto`, we had data and behavioral/algorithmic code expressed through sequences of instructions.
In contrast, in structured programming, POO, and functional programming we have a more organized relationship between
data and algorithms

How these two main parts of a program — data and algorithms — interact determines whether we are using an OO paradigm,
functional or structured.

The way data relate is the main characteristic that determines which paradigm we are using.

One way to imagine a parallel between structured programming and OOP, is by considering the role of functions. Let's say
we have a function that takes a set of input parameters — for example, x, y and z. This function may or may not receive
arguments and may or may not return a value.

In a scenario where we have functions that receive data and process it, we're working with a paradigm focused on functions.
This could be either a `functional paradigm`, which relies heavily on functions, or the structured (procedural) paradigm,
which also uses functions as core building blocks.

While both paradigms make heavy use of functions, they differ significantly in their approach. Let’s break this down with
an example:

Procedural Paradigm:

```js
let a = 3
let b = 7

let c = somar(a, b)
```

Here the "main character" is the function itself. We pass the data into the function as arguments, and it processes and
returns the result. The behavior is defined independently and applied to data externally.

Object-Oriented Paradigm:

In contrast to procedural programming, oop begins with data — we model real-world entities by combining data and behavior
into a single structure. Instead of having free-standing functions, we define methods inside objects.

For example, instead of a simple `sum` function, we could define a `Calculator` object. This object could include the
method somar, and also have a property like currentValue. In this case, the method could operate on internal state.

```js
let c = new Calculator()

c.somar(3)
```

Now, somar is not just a function — it is a behavior tied to a specific object. The calculator contains both data and methods,
which allows encapsulation. Similarly, we could model a Product object that contains name, price and stock, along with
behaviors relevant to it — like updating stock or calculating discounts.

Internally, OOP builds on concepts that existed before it (such as structures and functions), but it brings a more disciplined
and expressive way to organize code.

Just as structured programming imposes discipline over direct control flow (e.g., avoiding goto), OOP imposes discipline
over indirect control flow, which is closely tied to one of its key pillars: polymorphism.
