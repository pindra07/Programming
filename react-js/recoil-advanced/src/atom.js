import { atom, atomFamily, selector } from "recoil";
import { TODOS } from "./todoData";

// notification count
export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 13
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 99
})

export const messageAtom = atom({
    key: "messageAtom",
    default: 0
})


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom)
        const jobsAtomCount = get(jobsAtom)
        const notificationAtomCount = get(notificationAtom)
        const messageAtomCount = get(messageAtom)
        return networkAtomCount + jobsAtomCount + notificationAtomCount + messageAtomCount
    }
})

// todo 
// atom family
// selector family
// useRecoilloadable
// useRecoilValueLoadable

export const todoAtomFamily = atomFamily({
    key: 'todoAtomFamily',
    default: id => {
        return TODOS.find(x => x.id == id)
    }
})


