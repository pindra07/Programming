

// 'Pick' TS api
interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string
}

type UpdateProps = Pick<User, "name" | "age" | "email">

  function updateUser(UpdatedProps: UpdateProps) {
    // hit the db to update the user

  }

// Partials
// It will change all the keys optional
//hover on 'UpdateUserProps'

type UpdateUserProps = Partial<User>


// Readonly
type User1 = {
    readonly name: string;
    readonly age: number
}

const newUser: User1 = {
    name: "John",
    age: 21
}
// because of readonly you can't reassign the property of age...or name(newUser.age = 3)

