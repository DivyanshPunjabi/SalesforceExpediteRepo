// Function to fetch contact records from Salesforce
function fetchContacts() {
    fetch('https://suppanation-dev-ed.my.salesforce.com/services/data/v58.0/query?q=SELECT+FirstName,LastName+FROM+Contact', {
        headers: {
            'Authorization': 'Bearer Y00D5j00000B9JZK!AQoAQIRfDF_Wxghfv3LCN9ydN7F3kOdzw3Fo8Topu9RRcklJ9hJ6enU6jsH7PRkigHPA9oF5wSTrRIOVQk8OCVtAYicqWlPN'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Process the response data and generate HTML
        const contactList = document.getElementById('contactList');
        data.records.forEach(contact => {
            const contactElement = document.createElement('div');
            contactElement.textContent = `First Name: ${contact.FirstName}, Last Name: ${contact.LastName}`;
            contactList.appendChild(contactElement);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Call the function to fetch and display contact records
fetchContacts();
