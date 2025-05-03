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

Immutability
