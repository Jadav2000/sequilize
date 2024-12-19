const { User } = require("../models/User");

const CreateUser = async (req, res) => {
  try {

    const { firstname, lastname, company, email, password } = req.body;

    if (!firstname || !lastname || !company || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }


    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "Email already in use" });
    }

    const newUser = await User.create({
      firstname,
      lastname,
      company,
      email,
      password, 
    });

    return res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { CreateUser };
