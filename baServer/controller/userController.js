// Import the user model
const users = require('../modal/userModel');

// Register logic
exports.registerController = async (req, res) => {
    console.log("Inside register controller");

    const { name, email, password } = req.body;
    console.log(name, password, email);

    try {
        // Check if the user already exists
        const existingUser = await users.findOne({ email });
        console.log(existingUser);

        if (existingUser) {
            // User already exists
            return res.status(406).json("User already exists");
        } else {
            // Register new user
            const newUser = new users({ name, email, password });
            await newUser.save();
            return res.status(200).json(newUser);
        }
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Registration failed", error });  // Provide a more meaningful error message
    }
};
