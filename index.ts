// tsc index.ts -w => watch mode

type myType = string | number
// type cannot be extended

interface person {
    name: string // no comma
    age?: myType // optional
}

interface biometric extends person {
    height: number
    weight: number
}

const personA: person = {
    name: "myName",
    age: 35 // || "35"
}

const withTuple: [string, string, number] = ["", "", 0]
// order of types must be respected

interface withGeneric<T> {
    location: T
}

const personB: withGeneric<string> = {
    location: "myLocation"
}

const personC: withGeneric<number> = {
    location: 34675327.56424643
}
