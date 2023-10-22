async function getMenfes() {
    try {
        const ListMenfes = document.querySelector('.menfes-list');
        const response = await fetch('/list');
        const data = await response.json();

        data.forEach((menfes) => {
            const messageContainer = document.createElement('div');
            messageContainer.classList.add('menfes');

            const fromElement = document.createElement('p');
            fromElement.textContent = `From: ${menfes.sender}`;

            const toElement = document.createElement('p');
            toElement.textContent = `To: ${menfes.reciever}`;

            const messageElement = document.createElement('p');
            messageElement.textContent = `Message: ${menfes.message}`;

            messageContainer.appendChild(fromElement);
            messageContainer.appendChild(toElement);
            messageContainer.appendChild(messageElement);

            ListMenfes.appendChild(messageContainer);
        });
    } catch (error) {
        console.error(error);
    }
}

getMenfes();