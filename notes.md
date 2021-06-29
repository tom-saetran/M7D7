# TYPESCRIPT

## General overview (what it is, how it helps, differences from plain JS)

- Typescript is a superset of javascript
- It adds types to variables and parameters
- All javascript is valid in typescript
- Requires stronger typing
- Intellisense becomes more useful
- less error prone

## The TS compiler (why is needed, how can be used)

- Neither the browser nor node can run ts natively
- The TSC compiler converts typescript to javascript efficiently

## Type Inference

- the process typescript uses to set
- the type of varaibles and parameters from usage

## The ‘any’ Type

- can hold any value and tpye of
- does not play nicely with TS intellisense
- in contrast to nullable variables key?:value

## The Union Type

- The union ( | ) is used to union types
- example: string | number => union of string and number

## The Tuple Type

- specifies an exact order of types
- [string, string, number]

## Interfaces in TS

- works like schemas
- written like an object, but without seperating commas
- can extend other interfaces

## Generics in TS

- a way for a variable to hold any value, however its value must be specified
- this is a contrast to the any type as a generic needs a type
