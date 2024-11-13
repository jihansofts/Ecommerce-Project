import {
  CreateUser,
  UpdateUser,
  GetAllUser,
} from "../Services/Users/UserService";

const CreateUserCtrl = async (req, res) => {
  try {
    const data = await CreateUser(req, res);
    res.status(201).json({ message: "User Created Successfully", data });
  } catch (error) {
    res.status(400).json({ massage: "something went wrong", error });
  }
};

const UpdateUserCtrl = async (req, res) => {
  try {
    const data = await UpdateUser(req, res);
    res.status(200).json({ message: "User Updated Successfully", data });
  } catch (error) {
    res.status(400).json({ massage: "something went wrong", error });
  }
};

const GetAllUserCtrl = async (req, res) => {
  try {
    const data = await GetAllUser(req, res);
    res.status(200).json({ message: "User Fetched Successfully", data });
  } catch (error) {
    res.status(400).json({ massage: "something went wrong", error });
  }
};

export { CreateUserCtrl, UpdateUserCtrl, GetAllUserCtrl };
