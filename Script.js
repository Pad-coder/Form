document.getElementById("form").addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const pincode = document.getElementById('pincode');
    const gender = document.querySelector('input[name="gender"]:checked');


    const foodChoices = [];
    const foodElements = document.querySelectorAll('input[name="food"]:checked');
    foodElements.forEach((element) => {
        foodChoices.push(element.value);
    });


    if (foodChoices.length < 2) {
        alert('Please select at least 2 food choices.');
        return;
    }

    const state = document.getElementById('state');
    const country = document.getElementById('country');

    const tableBody = document.getElementById('table-body');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${firstName.value}</td>
        <td>${lastName.value}</td>
        <td>${address.value}</td>
        <td>${pincode.value}</td>
        <td>${email.value}</td>
        <td>${gender.value}</td>
        <td>${foodChoices.join(', ')}</td>
        <td>${state.value}</td>
        <td>${country.value}</td>
      `;
    tableBody.appendChild(newRow);
    document.getElementById('form').reset();
})