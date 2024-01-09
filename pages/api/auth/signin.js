import { sign } from "jsonwebtoken";
import User from "models/User";
import { verifyPassword } from "utils/auth";
import connectDB from "utils/connectDB";

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
  const secretKey = process.env.SECRET_KEY;
  const expiration = 24 * 60 * 60;

  if (!email || !password) {
    return res.status(422).json({ status: "faild", message: "Invalid Data" });
  }

  const user = await User.findOne({ email: email });
  if (!user) {
    return res
      .status(404)
      .json({ status: "faild", message: "User dosen't exist!" });
  }

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    return res
      .status(422)
      .json({ status: "faild", message: "Username or password is incorrect!" });
  }
  const token = sign({ email: email }, secretKey, {expiresIn: expiration});
}

export default handler;
