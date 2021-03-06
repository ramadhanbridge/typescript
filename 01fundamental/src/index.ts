let sales: number = 123345;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;


function render(document: any) {
    console.log(document)
}

//arrays

let numbers: number[] = [1, 2, 3]

// tuples

let user: [number, string] = [1, 'mosh']

// enums
const enum Size { Small = 2, Medium, Large }
let mySize: Size = Size.Small
console.log(mySize)


// Function

function calculateTax(income: number): number {
    if (income < 50_000)
        return income * 1.2;
    return income * 1.3
}

calculateTax(20_000)


// Type alias

type Employee = {
    readonly id: number, name: string
}


// object

let employee: Employee = { id: 1, name: 'ram' }

// Union Type

function KgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight) * 2.2
}
KgToLbs(20)
KgToLbs('20kg')

// intersection

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

// Literal
type Quantity = 50 | 100;
let quantity: Quantity = 100


// Nullable
function greet(name: string | null | undefined): void {
    if (name)
        console.log(name.toUpperCase())
    else
        console.log('hello')
}
greet(null)

// optional chaining

type Customer = {
    birthaday: Date;
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthaday: new Date() }
}

let customer = getCustomer(20)
console.log(customer?.birthaday)
