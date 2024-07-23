$(document).ready(function(){
  $('#chatbot-button').click(function() {
    $('#chatbot').toggle();
    if ($('#chatbot').is(':visible') && $('#chatbot .chat-body .message').length === 0) {
      $('#chatbot .chat-body').append('<div class="message">Welcome! Your everyday AI companion.</div>');
    }
  });

  $('#login-form').submit(function(event) {
    event.preventDefault();
    window.location.href = 'dashboard.html';
  });

  $('#signup-form').submit(function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
  });

  $('#reset-password-form').submit(function(event) {
    event.preventDefault();
    alert('Password has been reset successfully.');
    window.location.href = 'index.html';
  });

  $('#submitButton').click(function() {
    var reviewText = $('#reviewText').val();
    var userName = $('#userName').val();
    
    if (reviewText === '' || userName === '') {
      alert('Please enter both your review and your name.');
      return;
    }
  
    var reviewList = $('#reviewList');
    
    var reviewItem = $('<li>').addClass('review-item');
    
    var reviewContent = $('<p>').text(reviewText);
    
    var reviewUser = $('<p>').addClass('user-name').text('Reviewed by: ' + userName);
    
    reviewItem.append(reviewUser).append(reviewContent);
    
    reviewList.append(reviewItem);
    
    // Clear the input fields
    $('#reviewText').val('');
    $('#userName').val('');
  });

  $('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const educationalContent = [
        {
            title: 'Understanding Cyber Threats',
            iframeSrc: 'https://www.youtube.com/embed/VIDEO_ID',
        },
        {
            title: 'Top Cyber Security Tips',
            link: 'https://example.com/article',
        }
    ];

    const caseStudies = [
        {
            title: 'The XYZ Breach',
            description: 'This case study explores the XYZ breach of 2023...',
            link: 'https://example.com/case-study-1'
        },
        {
            title: 'The ABC Attack',
            description: 'Learn about the ABC attack and its impact...',
            link: 'https://example.com/case-study-2'
        }
    ];

    const quizzes = [
        {
            title: 'Cyber Threats 101',
            link: 'quiz1.html'
        },
        {
            title: 'Secure Your System',
            link: 'quiz2.html'
        }
    ];

    // Load Educational Content
    const contentSection = document.getElementById('education');
    educationalContent.forEach(content => {
        const item = document.createElement('div');
        item.classList.add('content-item');
        if (content.iframeSrc) {
            item.innerHTML = `<h3>${content.title}</h3><iframe src="${content.iframeSrc}" frameborder="0" allowfullscreen></iframe>`;
        } else if (content.link) {
            item.innerHTML = `<h3>${content.title}</h3><a href="${content.link}" target="_blank">Read More</a>`;
        }
        contentSection.querySelector('.content').appendChild(item);
    });

    // Load Case Studies
    const caseStudiesSection = document.getElementById('case-studies');
    caseStudies.forEach(caseStudy => {
        const item = document.createElement('div');
        item.classList.add('case-study');
        item.innerHTML = `<h3>${caseStudy.title}</h3><p>${caseStudy.description}</p><a href="${caseStudy.link}" target="_blank">Read More</a>`;
        caseStudiesSection.appendChild(item);
    });

    // Load Quizzes
    // const quizzesSection = document.getElementById('quizzes');
    // quizzes.forEach(quiz => {
    //     const item = document.createElement('div');
    //     item.classList.add('quiz');
    //     item.innerHTML = `<h3>${quiz.title}</h3><a href="${quiz.link}">Start Quiz</a>`;
    //     quizzesSection.appendChild(item);
    // });
});

// script.js 





document.addEventListener('DOMContentLoaded', function() {
    // Example alert data
    const alerts = [
        {
            title: "New Ransomware Attack Hits Global Companies",
            url: "https://example.com/news/ransomware-attack"
        },
        {
            title: "Data Breach Exposes Millions of User Records",
            url: "https://example.com/news/data-breach"
        },
        {
            title: "Phishing Scams on the Rise in 2024",
            url: "https://example.com/news/phishing-scams"
        }
        // Add more alerts as needed
    ];

    // Function to render alerts
    function renderAlerts() {
        const alertList = document.getElementById('alert-list');
        alertList.innerHTML = ''; // Clear existing content

        alerts.forEach(alert => {
            const alertItem = document.createElement('div');
            alertItem.className = 'alert-item';
            alertItem.innerHTML = `<a href="${alert.url}" target="_blank">${alert.title}</a>`;
            alertList.appendChild(alertItem);
        });
    }

    renderAlerts();
});

  
//   chatbot
document.addEventListener('DOMContentLoaded', function () {
    const chatbox = document.getElementById('chatbot');
    const chatboxButton = document.getElementById('chatbot-button');
    const chatboxContent = document.querySelector('.chat-body');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    function appendMessage(message, fromUser) {
        const messageElement = document.createElement('div');
        messageElement.className = fromUser ? 'user-message' : 'bot-message';
        messageElement.textContent = message;
        chatboxContent.appendChild(messageElement);
        chatboxContent.scrollTop = chatboxContent.scrollHeight;
    }

    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;

        appendMessage(message, true);
        userInput.value = '';

        const botReply = getBotResponse(message);
        setTimeout(() => appendMessage(botReply, false), 500);
    }

    function getBotResponse(message) {
        const lowerCaseMessage = message.toLowerCase();
        if (lowerCaseMessage.includes('cybersecurity')) {
            return 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.';
        } else if (lowerCaseMessage.includes('password')) {
            return 'A strong password should be at least 12 characters long, include uppercase and lowercase letters, numbers, and special characters.';
        } else if (lowerCaseMessage.includes('phishing')) {
            return 'Phishing is a type of social engineering attack often used to steal user data, including login credentials and credit card numbers.';
        } else if (lowerCaseMessage.includes('malware')) {
            return 'Malware, or malicious software, is any program or file that is harmful to a computer user.';
        } else {
            return 'I am sorry, I did not understand that. Can you ask something else about cybersecurity?';
        }
    }

    sendButton.addEventListener('click', function () {
        console.log("Send button clicked");
        sendMessage();
    });

    userInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            console.log("Enter key pressed");
            sendMessage();
        }
    });

    chatboxButton.addEventListener('click', function () {
        console.log("Chatbox button clicked");
        if (chatbox.style.display === 'none' || chatbox.style.display === '') {
            chatbox.style.display = 'flex';
        } else {
            chatbox.style.display = 'none';
        }
    });
});





  
}); 







  
  