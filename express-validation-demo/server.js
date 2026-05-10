const express = require('express');
const app = express();
const PORT = 3000;

// Subtask 2.1: Enable JSON parsing
app.use(express.json());

// Subtask 2.2: Demo Route (We will add middleware here in Step 4)
const { validateRegistration } = require('./middleware/validate');

// Attach the middleware to the /register route
app.post('/register', validateRegistration, (req, res) => {
    // Subtask 5.2: This code is only reached if validation passes
    res.status(201).json({
        success: true,
        message: "Registration successful"
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));