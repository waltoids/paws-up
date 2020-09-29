const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    name:
         String,
    message: 
         String
}, {
    timestamps: true,
    
});
const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;