const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "username is required"],
      minlength: [6, "username is minimum 6 letters"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    mobile: {
      type: Number,
      required: [true, "mobile number is required"],
      unique: true,
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    photo: {
      type: String,
      default:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    iaEmailActive: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// password encrypt before create the user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

//Check Password through login
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model("User", userSchema);
