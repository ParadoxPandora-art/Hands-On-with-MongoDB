const validateRegistration = (req, res, next) => {
    const { name, email, password } = req.body;
    const errors = [];

    // Subtask 3.1: Check Required Fields
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields: name, email, and password are all required."
        });
    }

    // Subtask 3.2: Email Format Validation (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Invalid email format");
    }

    // Subtask 3.3: Password Length Validation
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long");
    }

    // Subtask 4.2: Structured Error Response
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: errors
        });
    }

    // If everything is fine, move to the next function (the controller)
    next();
};

module.exports = { validateRegistration };