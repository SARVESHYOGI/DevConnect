import User from '../models/user.models.js';



export async function createUser(req, res) {
  try {
    res.json('Creating user');
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
  } catch (error) {
    console.error(error);
  }
}