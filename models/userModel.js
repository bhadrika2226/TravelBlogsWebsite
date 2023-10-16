// Define the User schema
const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true,
    unique:true
  },
  password:{
    type: String,
    required: true

  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
