const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: 'A name is required' 
    },
    message: {
        type: String,
        required: 'A message is required'
    }
});
const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;