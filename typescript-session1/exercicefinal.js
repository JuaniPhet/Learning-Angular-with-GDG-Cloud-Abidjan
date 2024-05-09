var users = [];
var User = /** @class */ (function () {
    function User(id, name, role, active, sex) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.active = active;
        this.sex = sex;
    }
    User.prototype.addUser = function () {
        users.push(this);
    };
    User.prototype.deleteUser = function () {
        var _this = this;
        users = users.filter(function (element) { return element !== _this; });
    };
    User.prototype.findUserById = function (id) {
        return users.filter(function (element) { return id == element.id; });
    };
    User.prototype.addRole = function (role) {
        this.role.push(role);
    };
    User.prototype.disableUser = function () {
        this.active = false;
    };
    User.prototype.removeRole = function () {
        this.role.pop();
    };
    return User;
}());
var user1 = new User('1q2w3e', 'Pascal', ['admin'], true, 'M');
var user2 = new User('4a5s6d', 'Rachelle', ['manager'], true, 'F');
var user3 = new User('7z8x9c', 'Toto', ['guest'], false, 'O');
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
user1.addRole('manager');
console.log(user1); /*
user3.addRole('admin')
console.log(user3);*/
console.log("\nDisabling a user");
user2.disableUser();
console.log(user2);
console.log("\nRemove Role");
user3.removeRole();
console.log(user3);
console.log("\nTableau Final");
console.log(users);
