const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// API endpoint to handle user actions
app.post('/user-action', (req, res) => {
    const { action, productName } = req.body;

    // Store the user action in the database
    // Send notification to you
    sendNotification(`User performed ${action} action for product: ${productName}`);

    res.sendStatus(200);
});

// Function to send notifications
function sendNotification(message) {
    // Implement notification logic here (e.g., send email, push notification, etc.)
    console.log(message);
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
