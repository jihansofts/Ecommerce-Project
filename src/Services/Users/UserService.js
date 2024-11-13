import User from "../../Model/UserModel";

const CreateUser = async (req, data) => {
  try {
    const ReqBody = req.body;
    const user = await User.create(ReqBody);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const UpdateUser = async (req, data) => {
  try {
    const id = req.params.id;
    const ReqBody = req.body;
    const user = await User.findByIdAndUpdate(id, ReqBody, { new: true });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const GetAllUser = async (req, data) => {
  try {
    const pageNo = req.query.pageNo;
    const pageSize = req.query.pageSize;
    const skip = (pageNo - 1) * pageSize;
    const user = await User.aggregate([
      { $skip: skip },
      { $limit: pageSize },
      { $project: { password: 0 } },
    ]);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export { CreateUser, UpdateUser, GetAllUser };
