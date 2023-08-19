let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let ageInput = document.querySelector('#age');
let professionInput = document.querySelector('#profession');
btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let age = ageInput.value;
    let profession = professionInput.value;
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${profession}</td>
                    <td>${age}</td>
                    <td><button class="deleteBtn">Delete</button></td>
                </tr>`;
    table.innerHTML += template;
});