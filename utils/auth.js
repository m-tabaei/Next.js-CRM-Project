import { hash } from "bcryptjs";

async function hashPassword(password) {
  const hashsedPassword = await hash(password, 12);
  console.log(hashsedPassword);
  return hashsedPassword;
}
export { hashPassword };
