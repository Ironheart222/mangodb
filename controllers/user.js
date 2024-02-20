import accounts  from '../models/user.js';

export const getAllUsers = async(req, res) => {
    try {
        const users = await accounts.findOne({ 'name': 'a' });
        console.log('users: ', users);
        return res.send(users)
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
};

export const createUser = async(req, res) => {
  try {
    const users = await accounts.create({name:"q",phone:"12",country:"qw",currency:"1"})
    console.log('users: ', users);
    return res.send(users)
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// exports.updateUser = (req, res) => {
//     const userId = req.params.id;
//     const updatedUserData = req.body;
//     res.json({ message: `Update user with ID ${userId}`, data: updatedUserData });
// };

// exports.deleteUser = (req, res) => {
//     const userId = req.params.id;
//     res.json({ message: `Delete user with ID ${userId}` });
// };