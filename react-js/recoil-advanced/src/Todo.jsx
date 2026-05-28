import { useRecoilValue } from "recoil"
import { todoAtomFamily } from "./atom"

export default function ToDo({id}) {

    const currentTodo = useRecoilValue(todoAtomFamily(id))

    return <>
        <h1>{currentTodo.title}</h1>
        <p>{currentTodo.description}</p>
    </>
}


// heat transfer
// we get the data from the sensor -> loader 
// you gave the problem statement -> I knew the problem it's not that you're genius
// I also solve it... and you can't able to understand even you tried...

