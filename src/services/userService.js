import dayjs from "dayjs";
import bcrypt from "bcrypt";
import * as userService from "../repositories/userRepository.js";


async function signUp({ name, email, password, birthday }) {
  const eighteenYearsAgo = dayjs().add(-18, 'years');
  if (dayjs(birthday).isAfter(eighteenYearsAgo)) {
    return null;
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  return userService.createUser({
    name,
    email,
    password: hashedPassword,
    birthday,
  });
}

export {
    signUp,
}