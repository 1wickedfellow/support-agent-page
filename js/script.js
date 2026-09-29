// Get the buttons and input fields
const startButton = document.getElementById("startButton");
const conversationButtons = document.querySelectorAll(".conversation");
const customerInfo = document.getElementById("customerInfo");
const sendButton = document.getElementById("sendButton");
const messageInput = document.getElementById("messageInput");
const searchInput = document.getElementById("searchInput");


// Start button
startButton.addEventListener("click", () => {
    alert("Support Agent started.");
});


// Conversation buttons
conversationButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const customer = button.dataset.customer;

        customerInfo.innerHTML = `
            <h3>${customer}</h3>
            <p>You are viewing the ${customer} conversation.</p>
        `;

    });

});


// Send message
sendButton.addEventListener("click", () => {

    const message = messageInput.value.trim();

    if (message === "") {
        alert("Please type a message first.");
        return;
    }

    alert("Message sent: " + message);

    messageInput.value = "";

});


// Search conversations
searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase();

    conversationButtons.forEach((button) => {

        const conversationName =
            button.dataset.customer.toLowerCase();

        if (conversationName.includes(searchText)) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }

    });

});