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
    priorityLabel.textContent = priorityLvl; 
    priorityLabel.classList.add("priority-label");

    // Task 3 
    if (priorityLvl.trim().tooLowerCase === "high") { // High priority issues added to special class for highlighting 
        priorityLabel.classList.add("high-priority");
    }
    
    const resolveBtn = document.createElement("button"); // "Resolve" button to remove the ticket
    resolveBtn.textContent = "Resolve";
    resolveBtn.classList.add("resolve-btn");

    resolveBtn.onclick = function () { // function to remove ticket when button is clicked 
        container.removeChild(ticket);
    };
    
    // Appends the elements to ticket using appendChild
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveBtn);

    // Appends the ticket to the container using appendChild
    container.appendChild(ticket);

    // Highlights the ticket after adding a ticket
    highlightHighPriorityTickets();
}


// Task 3: Highlighting High Priority Tickets
function highlightHighPriorityTickets() { // Use document.querySelectorAll to select all tickets with a "High" priority class
    const highPriorityTickets = document.querySelectorAll(".high-priority"); 
 
    //  Convert the NodeList into an array using Array.from() 
    Array.from(highPriorityTickets).forEach(ticket => { // // Use an array method (forEach()) to update the appearance of high-priority tickets
        ticket.parentElement.style.backgroundColor = "rgb(211, 174, 201)"; // Changing background color
        ticket.parentElement.style.fontWeight = "bold"; // Change text to bold    
    });
}

// Task 3 doesnt do anything?? 

// Test Cases
addSupportTicket("Bethany Mejia", "Printer not working", "Low");
addSupportTicket("Deana Jefferson", "Cybersecurity breach", "High");
addSupportTicket("Zara Holloway","Software problems", "Medium");
