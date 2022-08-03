const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const table = document.querySelector('table');

function onAddExpense(e) {
    e.preventDefault();

   const description = document.getElementById('description').value;
   const date = document.getElementById('date').value;
   const cost = document.getElementById('cost').value;

   tbody.innerHTML += `
   <tr>
    <td>${description}</td>
    <td>${date}</td>
    <td>$${cost}</td>
    <td><button class="deletebtn">X</button></td>
   </tr>`;
}

function deleteRow(e) {
    if (!e.target.classList.contains('deletebtn')) {
        return;
    }

    const btn = e.target;
    btn.closest('tr').remove();

}

form.addEventListener('submit', onAddExpense)
table.addEventListener('click', deleteRow)

