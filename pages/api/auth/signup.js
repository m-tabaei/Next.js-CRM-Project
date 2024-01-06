import connectDB from "utils/connectDB";
import User from "models/User";
async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "faild", message: "Error in connecting to DB" });
  }
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ status: "faild", message: "Invalid Data" });
  }
  const existingUser = await User.findOne({ email: email });
  if(existingUser){
    return res.status(422)
    .json({ status: "faild", message: "User exist already!" });
  }
}
export default handler;
