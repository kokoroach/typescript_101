// let employee = { id: 1 };
// employee.name = 'Jonel'; // raises property does not exist on object

// Avoid: Make `name` optional first, then supply after
// let employee: {
//     id: number,
//     name?: string
// } = { id: 1 };
// employee.name = 'Jonel';

let employee: {
    readonly id: number; // setting readonly, like @dataclass(frozen=true), but on property-level
    name: string;
} = { id: 1, name: "Jonel" };

// TODO: Explore using
// class Employee: ...
// let employee: Employee = {...}

let employee_2: {
    readonly id: number;
    name: string;
    retire: (date: Date) => void; // set a method
} = {
    id: 1,
    name: "Jonel",
    retire: (date: Date) => {
        console.log(date);
    },
};
