class Users {
    name: string;
    age: number;
    status: boolean;

    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
}


let users: Users[] = [
    new Users('vasya', 31, false),
    new Users('petya', 30, true),
    new Users('kolya', 29, true),
    new Users('olya', 28, false),
    new Users('max', 30, true),
    new Users('anya', 31, false),
    new Users('oleg', 28, false),
    new Users('andrey', 29, true),
    new Users('masha', 30, true),
    new Users('olya', 31, false),
    new Users('max', 31, true)
];

// for (const user of users) {
//     if (user.status) {
//         console.log(user);
//     }
// }
//
// for (const user of users) {
//     if (!user.status) {
//         console.log(user);
//     }
// }

for (const user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}