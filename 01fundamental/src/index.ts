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
    return 0
}