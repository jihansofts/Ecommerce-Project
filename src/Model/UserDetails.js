import mongoose from "mongoose";

const UserDetailsSchema = new mongoose.Schema({
  Address: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  Zipcode: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  ProfileImg: [{ publidId: String, url: String }],
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const UserDetails = mongoose.model("UserDetails", UserDetailsSchema);
export default UserDetails;
