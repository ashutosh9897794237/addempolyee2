let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let gpaInput = document.querySelector('#gpa');
let AgeInput = document.querySelector('#Age');
let degreeInput = document.querySelector('#Degree');
//let professionInput = document.querySelector('#profession');
//const d = new Date();
//let demoInput = document.querySelector("#demo");
//let now = new Date();
//console.log(now);

//var d = new Date();
 //document.write(d.toDateString());

 //var id = new EventCounts();
// deleteBtn.addEventListener('click', () => {deleteHome.innerText = "Delete"}



btnAdd.addEventListener('click', () => {
    //let id = IdInput.value;
    let name = nameInput.value;
    let age = AgeInput.value;
    let gpa = gpaInput.value;
    let degree = degreeInput.value;
    //let profession = professionInput.value;
    let email = emailInput.value;
    let template = `
                <tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${age}</td>
                <td>${gpa}</td>
                <td>${degree}</td>
                
                    <td><button class="editButn">Edit</button>/<button class="deleteBtn">Delete</button></td>
                </tr>`;
    table.innerHTML += template;
});

function onDeleteRow(e){
    if(!e.target.classList.contains("deleteBtn")){
        return;
    }
    const btn = e.target;
    btn.closest("tr").remove();

}
function onEditRow(e){
    if(!e.target.classList.contains("editButn")){
        return;
    }
    const btn = e.target;
    btn.edit("tr").edit_row();

}
    table.addEventListener('click', onDeleteRow);
    table.addEventListener('click', onEditRow);