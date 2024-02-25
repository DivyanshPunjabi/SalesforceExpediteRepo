// script.js
window.onload = function() {
    // Make AJAX request to Salesforce for contact data
    // Replace 'your_salesforce_apex_endpoint' with the actual endpoint
    fetch('https://suppanation-dev-ed.my.salesforce.com/services/apexrest/contactData')
    .then(response => response.json())
    .then(data => {
        // Populate the table with contact data
        let contactData = document.getElementById('contactData');
        data.forEach(contact => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${contact.FirstName}</td>
                <td>${contact.LastName}</td>
            `;
            contactData.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
};
