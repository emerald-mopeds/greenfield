var mongoose = require('mongoose');


var roomSchema = mongoose.Schema({
  roomName: String,
  midPoint: [Number, Number],
  users: [mongoose.model('User').schema]
});

var Room = mongoose.model('Room', roomSchema);

module.exports = Room;