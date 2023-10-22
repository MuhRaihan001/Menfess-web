document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('message-form');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const message = document.getElementById('message').value;

        try {
            const response = await sendMessage(from, to, message);
            responseDiv.innerHTML = `Berhasil: ${response}`;
        } catch (error) {
            responseDiv.innerHTML = `Gagal: ${error}`;
        }
    });

    async function sendMessage(from, to, message) {
        try {
            const response = await fetch('/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ from, to, message }),
            });

            if (!response.ok) {
                throw new Error('Gagal mengirim pesan');
            }

            return response.text();
        } catch (error) {
            throw error;
        }
    }
});
