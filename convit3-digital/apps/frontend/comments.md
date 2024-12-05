# Comments on Front End

## Children

children as a prop is a special property in react that represents the conbtent between the opening and closing. This could
be a React Element, a string, numbers, etc. Or multiple children or null or undefined if the children's aren't provided

When we access the property children, which is a react node, in fact, for the component receiving what's inside it's opening
and closing tags, are is in fact, an array of elements, so if we did something like

<TagExample> 
  <div>Children 1</Children1>
  <div>Children 2</Children1>
  <div>Children 3</Children1>
</TagExample>

and we receive, in the TagExemple, one property named childre: any or children: ReactNode, if we console.log(children)

we'll receive [<div>Children 1</div>, <div>Children 2</div>, <div>Children 3</div>,]

so we can also do a for inside the childrens, such as

for(let i = 0; i < children.length; i++) {
  console.log(children[i])
}

we would get those exact values.

If there is only one child, children will not automatically be an array, instead, it will be the child itself,.

## Steps

So the Passos component was an example of how the logic above works, so it was used for something like this:

In the component, we expect to receive one property named "permiteProximoPasso", which is an array of booleans, and for
this property, in the parent component which calls this component, we started passing "permiteProximoPasso={[true, true, false]},
and another property named labels, which will have an array of string

now in this component, we have a state "passoAtual", what will set the current step when the person clicks on the next and
previous buttons, something like

return passoAtual === 0 and semProximoPasso return passoAtual === props.labels.length - 1, then we we'll have a function
to handle the steps change, if there is a next available step or not.

Now, we will also have a constant named

const permiteProximoPasso = props.permiteProximoPasso?.[passoAtual] ?? true;

because the passo atual is a boolean state, and we passed the permiteProximoPasso as an array of  boolean values, what will
determine, if it's true or false, is, e.g

permiteProximoPasso = [true, true, false]
if passoAtual === 1 and permiteProximoPasso.[passoAtual], this will be true and the person can go on, if passo atual is
2, it will be false, so the person will not be able to go on

This is one interesting way of achieving this, now on the false place, we change it to a logic, that will determine if it
is true or false.

## CampoEntrada Component

One other interesting thing done, was that we have a component CampoEntrada, this component is basically a container for
the inputs

it receives in the props, a label; value; descricao; observacao; erro and one onChange, than on the FormEvento where we call
the Passos, we also call the CampoEntrada, in the FormEvento component, we receive the event, the function to save an event,
onde to determine if the alias is valid, and one other property to update the event.

On the context, whenever the event.alias change, it fires an useEffect, that if one alias is present, it will trigger the
validarAlias function, what this function will do, at first it will call the backend and check if there is already an event
with that alias and that id stored in the db and set the alias to the evento state, for true or false, then on the component
on the value it receives as props, we are passing it with a function we have on the core folder, which is shared by all 
components, named formatar, and it'll take any blank space, uppercase characters, and transform it to a way the db wants
so 'React Native Course 2024' will turn out to be 'react-native-course-2024'.



















## 