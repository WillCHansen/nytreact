// Require mongoose
var mongoose = require("mongoose");
// Create a Schema class with mongoose
var Schema = mongoose.Schema;
// Create a UserSchema with the Schema class
var CommentSchema = new Schema({
  // name: a unique String
  comments: {
    type: String,
  }
  // notes property for the user
});
// Create the User model with the UserSchema
var Comment = mongoose.model("Comment", CommentSchema);
// Export the user model
module.exports = Comment;