document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const message = `İsim: ${firstName}\nSoyisim: ${lastName}\nEmail: ${email}\nTelefon: ${phone}`;

    const telegramBotToken = '7305562067:AAFceXXXExdw9AbZRezr0n9V_ItN_jyCi2o';
    const telegramChatId = '-4241644874';

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

       fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: telegramChatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            window.location.href = 'onaylandi.html';
        } else {
            alert('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    });
});