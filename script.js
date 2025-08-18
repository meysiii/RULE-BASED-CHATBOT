// script.js
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput.trim()) return; // Prevent empty messages
    appendMessage(userInput, 'user-message');
    document.getElementById('user-input').value = '';

    // Generate a response
    const botResponse = getBotResponse(userInput);
    setTimeout(() => {
        appendMessage(botResponse, 'bot-message');
    }, 500); // Simulate a delay for a more human-like response
}

function appendMessage(message, className) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + className;

    const icon = className === 'user-message' ? 'fas fa-user' : 'fas fa-robot';
    messageDiv.innerHTML = `<i class="${icon}"></i>${message}`;

    // Add emoji for bot responses
    if (className === 'bot-message') {
        messageDiv.innerHTML += '<span class="message-emoji">🤖</span>';
    }

    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(input) {
    input = input.toLowerCase().trim(); // Normalize input

    // Simple rule-based responses
    if (input === 'hi') {
        return 'Hi there! How can I assist you today? 🤗';
    } else if (input === 'how are you?') {
        return 'I am just a bot, but I’m here to help! 😊';
    } else if (input === 'what is your name?') {
        return 'I’m your friendly chatbot created by Nethra🛠️';
    } else if (input === 'bye') {
        return 'Goodbye! Have a wonderful day! ';
    } else if (input== 'what can you do?') {
        return 'I can answer your questions and assist you with information. Just ask! 🤓'
    } else if (input=='tell me a joke') {
        return 'Why did the scarecrow win an award? Because he was outstanding in his field! 😂'
    } else if ( input== 'help') {
        return 'Sure! What do you need help with? Just let me know! 🆘'
    } else if(input=='thank you') {
        return 'You’re welcome! If you have any other questions, feel free to ask! 😊'
    }



    
    else {
        return 'Sorry, I didn’t understand that. 🤔';
    }
}
