let form = document.querySelector('form');
let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let root = document.querySelector('#root');

let store = Redux.createStore(reducer);
// let todo = store.getState();

form.addEventListener('submit', (e) => {
    e.preventDefault()

})
input.addEventListener('change', (event) => {
    let value = event.target.value;
    // console.log(value)
    store.dispatch({type : value})

})

store.subscribe(() => {
    todo = store.getState();
    // let allTodos = []
    // allTodos.push(todo)
    createUI(todo)

})

function createUI(todo) {
    // console.log(todo)
let li = document.createElement('li');
li.innerHTML = todo;
root.append(li)
}


function reducer(state = [], action) {
    return state = action.type
}

