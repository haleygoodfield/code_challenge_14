// Task 1: Creating the Base Structure (done in cc_14.html)

// Task 2: Adding Support Tickets Dynamically
function addSupportTicket(customerName, issueDesc, priorityLvl) {
    const container = document.getElementById("ticketContainer"); // Getting the container 

    const ticket = document.createElement("div"); // Write a function that uses createElement to build a support ticket
    ticket.setAttribute("class", "support-ticket"); // Set attributes (class & id) using setAttribute

    const nameHeading = document.createElement("h3"); // heading for the customer’s name
    nameHeading.textContent = customerName; 

    const issueParagraph = document.createElement("p"); // paragraph for the issue description
    issueParagraph.textContent = issueDesc;

    const priorityLabel = document.createElement("span"); // label indicating priority level.
    priorityLabel.textContent = `Priority: ${priorityLvl}`; 
    priorityLabel.classList.add("priority-label"); // Attempting to apply priority to ticket

    // Task 3 
    if (priorityLvl.trim().toLowerCase () === "high") { // High priority issues added to special class for highlighting 
        ticket.classList.add("high-priority");
    };
    
    const resolveBtn = document.createElement("button"); // "Resolve" button to remove the ticket
    resolveBtn.textContent = "Resolve";
    resolveBtn.classList.add("resolve-btn");

    resolveBtn.onclick = function (event) { // function to remove ticket when button is clicked 
        // Task 4
        event.stopPropagation(); // Use stopPropagation() in the "Resolve" button’s event handler to prevent bubbling
        container.removeChild(ticket); // Attach a click event listener to the "Resolve" button that removes its parent ticket using removeChild.
        highlightHighPriorityTickets(); // Updates highlighting
    };
    // Task 5
    ticket.ondblclick= function () { // Add an event listener to each support ticket that on double-click, swaps static content with input fields
        enableEditing(ticket, nameHeading, issueParagraph, priorityLabel);
    };
    // Appends the elements to ticket using appendChild
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveBtn);

    // Appends the ticket to the container using appendChild
    container.appendChild(ticket);

    // Added to ensure ticket is highlighted 
    highlightHighPriorityTickets();
};


// Task 3: Highlighting High Priority Tickets
function highlightHighPriorityTickets() { // Use document.querySelectorAll to select all tickets with a "High" priority class
    const highPriorityTickets = document.querySelectorAll(".high-priority"); 
 
    //  Convert the NodeList into an array using Array.from() 
    Array.from(highPriorityTickets).forEach(ticket => { // // Use an array method (forEach()) to update the appearance of high-priority tickets
        ticket.style.backgroundColor = "rgb(237, 180, 208)"; // Changing background color  
    });
};

// Task 4: Implementing Ticket Resolution with Event Bubbling
// Attach a click event listener to "ticketContainer" that logs a message when any ticket is clicked
document.getElementById("ticketContainer").addEventListener("click", function (event) {
    if (event.target.classList.contains("support-ticket")) {
        console.log("Support ticket clicked", event.target); // Message logged when ticket is clicked 
    } else {
        console.log("Click occured ouside of support ticket"); // Message logged when ticket is not clicked
    }
});

// Task 5: Additional Challenge – Inline Editing of Support Tickets
function enableEditing(ticket, nameElement, issueElement, priorityElement) {
    
    // Pre-populate the input fields with the existing customer name, issue, and priority level
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = nameElement.textContent; // Name field

    const issueInput = document.createElement("input");
    issueInput.type = "text";
    issueInput.value = issueElement.textContent; // Issue field

    const priorityInput = document.createElement("input"); 
    priorityInput.type = "text";
    priorityInput.value = priorityElement.textContent; //Priority field 

    // Provide a mechanism - "Save" button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    // Add an event listener to each support ticket (or an edit button within it) that on double-click, swaps static content with input fields
    ticket.innerHTML = "";
    ticket.appendChild(nameInput);
    ticket.appendChild(issueInput);
    ticket.appendChild(priorityInput);
    ticket.appendChild(saveButton);

    // Ensure the updated details are reflected, and the inputs revert back to static text
    saveButton.onclick = function () {
        nameElement.textContent = nameInput.value; // will update the name
        issueElement.textContent = issueInput.value; // will update the issue
        priorityElement.textContent = priorityInput.value; // will update priority 
    
        // Restore the ticket structure with new values
        ticket.innerHTML = "";
        ticket.appendChild(nameElement);
        ticket.appendChild(issueElement);
        ticket.appendChild(priorityElement);

        // Recreate the resolve button
        const resolveBtn = document.createElement("button");
        resolveBtn.textContent = "Resolve";
        resolveBtn.classList.add("resolve-btn");
        resolveBtn.onclick = function (event) {
            event.stopPropagation();
            ticket.parentElement.removeChild(ticket);
            highlightHighPriorityTickets();
        };
        ticket.appendChild(resolveBtn);
    };
};

// Test Cases
addSupportTicket("Bethany Mejia", "Printer not working", "Low");
addSupportTicket("Deana Jefferson", "Cybersecurity breach", "High");
addSupportTicket("Zara Holloway","Software problems", "Medium");