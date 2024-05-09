interface user {
    id: string;
    name: string;
    role: Roles[];
    active: boolean;
    sex: Sex;
}

type Roles = 'admin' | 'manager' | 'guest';
type Sex = 'M' | 'F' | 'O';

let users : User[] = [];

class User {
    private id: string;
    private name: string;
    private role: Roles[];
    private active: boolean;
    private sex: Sex;

    constructor(id: string, name: string, role: Roles[], active: boolean, sex: Sex) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.active = active;
        this.sex = sex;
    }

    addUser(): void {
        users.push(this);
    }

    deleteUser(): void {
        users = users.filter(element => element !== this);
    }

    findUserById(id: string) : User[] {
        return users.filter(element => id == element.id)
    }

    addRole(role: Roles): void {
        this.role.push(role);
    }

    disableUser(): void {
        this.active = false;
    }

    removeRole(): void {
        this.role.pop();
    }

}

const user1:User = new User('1q2w3e', 'Pascal', ['admin'], true, 'M');
const user2:User = new User('4a5s6d', 'Rachelle', ['manager'], true, 'F');
const user3:User = new User('7z8x9c', 'Toto', ['guest'], false, 'O');

console.log("\nAdding user");
user1.addUser();
user2.addUser();
user3.addUser();
console.log(users);

console.log("\nDeleting user");
user1.deleteUser();
console.log(users);

console.log("\nFinding user by Id");
console.log(user3.findUserById('7z8x9c')); //Je suis oblige d'appeler a partir d'une instance pour ne pas avoir d'ereur,
                                           //or je pense que je devais pourvoir trouver l'user directement avec un >>findUserById(id)...

console.log("\nAdding a role");
user1.addRole('manager')
console.log(user1);
user3.addRole('admin')
console.log(user3);


console.log("\nDisabling a user");
user2.disableUser()
console.log(user2);

console.log("\nRemove Role");
user3.removeRole()
console.log(user3);

console.log("\nTableau Final");
console.log(users);