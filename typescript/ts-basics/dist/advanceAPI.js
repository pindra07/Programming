"use strict";
function updateUser(UpdatedProps) {
    // hit the db to update the user
}
const newUser = {
    name: "John",
    age: 21
};
// because of readonly you can't reassign the property of age...or name(newUser.age = 3)
