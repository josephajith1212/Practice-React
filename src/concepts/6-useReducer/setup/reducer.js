export const reducer = (state, action) => {
    if (action.type === "testing") {
        return {...state, people: [...state.people, action.payload], showModal: true, modalContent: "Item added"}
    }
    if (action.type === "noEntry") {
        return {...state, showModal: true, modalContent: "Please enter a value"}
    }
    if (action.type === "closeModal") {
        return {...state, showModal: false}
    }
    if (action.type === "removeItem") {
        return {...state, people: state.people.filter((person) => person.id !== action.payload)}
    }
    throw new Error("No matching action type")
}