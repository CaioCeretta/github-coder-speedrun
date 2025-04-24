## Introduction: Mythical Man-Month Book

This book defends the idea that the second version of the system, is more likely to succeed. The first is often thrown
away, while the second one is for implementation and even for solving the errors of the first version.

Inside the book, the author discusses processes based on their personal experiences. The book's goal is to "rescue" the
use of object-oriented programming, spec9ally during the time (2006 ~ 2007), when many projects had essentially the same
structure, which became repetitive and too similar across different teams. The aim was to encourage a more thoughtful,
object-oriented approach to development, following the basic principles of the paradigm.

The book is essentially about the pillars of OOP (Object-Oriented Programming) and the basic principles and fundamentals
of the paradigm, which form the foundation of everything.

The first thing we do when developing something is to choose the language, as it will influence on how we program. For
example, if we have to choose between Python and Rust, we'll notice that each language has unique features that the other
one lacks, which will significantly impact our development approach.

Once we choose the language and the paradigm to follow, the next step is to establish communication with the person who
truly understands the system and its requirements.

When thinking about frameworks, we need to consider not just the technical aspects, such as the frameworks and libraries
that help with implementation but also our mindset and how we with the client. This helps us gather the necessary information
to define the application's requirement.

The strategic tools mentioned in the previous topic, are derived from the book, and are strongly linked to real world situations.
They are based on the business goals, rather than on technical jargon or patterns required by a framework. in essence, these
tools focus on understanding the business itself.

When we think about the `procedural paradigm` which involves writing procedures or functions that receive data and return
data, we tend to focus on the technology and code flow. The output from one function becomes the input for another, and so
on. This leads us to think in terms of code rather than business logic.

In contrast, when using an OOP approach, we first map real world objects and entities that have both data and behavior and
bring these into our application. By respecting the principles of the object orientation, we avoid the disjointed or inconsistent
implementations that often happen when developers use an OOP language but fail to adhere to its core principles.

When starting development, we first consider the paradigm that will guide our work. Once that's decided, it does not make
sense for us, to violate the core principles of that paradigm. For example, OOP is built around three pillars: encapsulation, heritage and polymorphism. If we make a decision that violates one of these principles, something is wrong, even if it's
common practice.

We have the freedom to make exceptions and break these principles in exceptional cases, but we should question our choices.
Just because everyone else is doing something in a particular way doesn't mean it's the right way. These decisions will
directly impact the time and effort it takes to turn our ideas into working code

## Domain

A company domain is the performance of its core activities that generate value, typically in the form of products or services
for the client. It involves data and the workflows.

Since we're working with DDD (Domain-Driven-Design), it means that the design is guided by the domain. When we think about
how to organize the architecture, it heavily depends on how we map the data and also the flows of the application.

We usually deal with "two kingdoms", the problem space, which is not related to technology or frameworks, but to the company
itself and how it handles data and workflows on a daily basis, to solve the needs of the client, suppliers, the government,
and others. Then there's the solution space which belongs to the people wo are going to build software to support these flows.

Let's use this example to talk about the problem domain:

We've been invited to develop a furniture financing system for `CEF (Caixa Economica Federal)`, and we'll classify its domains
and sub domains. One of the biggest mistakes when designing large systems, is trying to solve everything at once. This often
leads to tight coupling and unnecessary relationships. Unless we already have a running system with automated checks that
warn us when invalid dependency appear, this can become a serious issue.

Here's the problem we're trying to solve:

1. When someone applies for financing, they initiate a request. This request is the the entry point and includes multiple
   steps. Depending on what is being requested, some parts of the process might be optional.

2. For example, let's say i want to finance a house, and like many people, i might be anxious and prefer to go straight
   to 'Caixa', show my income statements, and have a pre-approved credit, before i even start looking for a house just to
   know how much i can finance.

3. In some cases, a client applies for a credit certificate without even visiting any properties. This certificate remains
   valid for three months, allowing them to purchase a property during that time.

So we start with a request which assumes there's a person, or a group of people, associated with it. From there, the person
fills out their registration as part of the request, which includes other related records.

At first, we might be tempted to handle everything in a single model. But that's not ideal, because it's a complex process
with many rules and possible integrations we may not even be aware of yet.

However, if the application is not very complex, eventually we can handle everything together, and it might sense. But we
might later face difficulties separating the parts. This often comes from a lack of project vision, experience in translating
problems into code, or simply dealing with a small problem that only involves one sub domain, which can be solved in a more
compact way

In any application, it's worth dividing the system into subdomains, even small ones. We just need to understand that even
something like authentication can be treated as a separate subdomain from the rest of the application.

## Financing Problem

There is a request that only makes sense if a person is making it, and that person will register their data.
During registration, they will upload a series of documents to the system.

After that, let’s assume we have another sub‑domain (or even a separate system) dedicated solely to documentation.
For example, when someone uploads a PDF, this system performs OCR to convert the document or image into text and then asks
a human to validate whether the extracted information is correct and represents a valid document.

Uploading the documents might be a manual process in which someone later reviews and approves them, or it might be sophisticated enough to justify a dedicated sub‑domain for it.

Another part of the problem concerns credit analysis. The system takes the person’s record; if there is no property, it simply analyzes the registration data, suggests an amount likely to be approved, and generates a report.
However, other factors related to the customer’s profile come into play, and there could be a separate system for property registration. A property might already be registered, might already have been financed, the inspection process might no longer be necessary, and hiring an engineer might be unnecessary, and so on.
Hence, we could end up with one sub‑system for registering properties and another for registering clients.

When examining this problem, we face several decisions:

1. "Is the domain we are focusing on the core of the application we are building?"

2. "Every application must have one most important domain; even if it is only 1 % more important than the rest, it becomes the core domain".

3. Between the core and the generic layers, we find supporting sub‑domains. These are essential to deliver value to the core domain and include some company‑specific logic, but they are not the main competitive differentiator.

4. After the support domain, we have generic sub‑domains: features that are necessary but not unique to our business. Because
   they carry no domain‑specific rules, we can often adopt third‑party solutions instead of building them from scratch.

5. "As an exercise, imagine implementing something like Uber or Netflix. Which sub‑domains would be interesting? Which would you choose as the core domain and which as supporting domains? Obviously, these companies deal with high complexity and have created sub‑domains to solve a variety of problems—some purely software, others infrastructure‑related. We, too, might face new issues and create additional sub‑domains."

None of these companies started out as complex as they are today. Thinking about probable future problems—and classifying core versus supporting sub‑domains—helps when modeling our own projects and making architectural decisions.
