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
    }
    
    const resolveBtn = document.createElement("button"); // "Resolve" button to remove the ticket
    resolveBtn.textContent = "Resolve";
    resolveBtn.classList.add("resolve-btn");

    resolveBtn.onclick = function (event) { // function to remove ticket when button is clicked 
        // Task 4
        event.stopPropagation(); // Use stopPropagation() in the "Resolve" button’s event handler to prevent bubbling
        container.removeChild(ticket); // Attach a click event listener to the "Resolve" button that removes its parent ticket using removeChild.
        highlightHighPriorityTickets(); // Updates highlighting
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
}


// Task 3: Highlighting High Priority Tickets
function highlightHighPriorityTickets() { // Use document.querySelectorAll to select all tickets with a "High" priority class
    const highPriorityTickets = document.querySelectorAll(".high-priority"); 
 
    //  Convert the NodeList into an array using Array.from() 
    Array.from(highPriorityTickets).forEach(ticket => { // // Use an array method (forEach()) to update the appearance of high-priority tickets
        ticket.style.backgroundColor = "rgb(237, 180, 208)"; // Changing background color  
    });
}

// Task 4: Implementing Ticket Resolution with Event Bubbling
// Attach a click event listener to "ticketContainer" that logs a message when any ticket is clicked
document.getElementById("ticketContainer").addEventListener("click", function (event) {
    if (event.target.classList.contains("support-ticket")) {
        console.log("Support ticket clicked", event.target); // Message logged when ticket is clicked 
    } else {
        console.log("Click occured ouside of support ticket"); // Message logged when ticket is not clicked
    }
});

// Test Cases
addSupportTicket("Bethany Mejia", "Printer not working", "Low");
addSupportTicket("Deana Jefferson", "Cybersecurity breach", "High");
addSupportTicket("Zara Holloway","Software problems", "Medium");

// Task 5: 
