const form = document.querySelector('#form');
const ul = document.querySelector('#todoitems');
const input = document.querySelector('#todo');
const todotype = document.querySelector('#todotype');

const todos = [];




function renderlist() {
    let listli = todos.map((todo) => `<li> ${todo.title} - ${todo.type} </li>`);
    let alltodos = listli.reduce(function(total, curr) {
        return total + curr;
    }, "");
    ul.innerHTML = alltodos;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let newtodo = [
        { title: input.value, type: todotype.value }
    ];
    todos.push(newtodo);
    renderlist();
});