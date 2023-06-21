import * as userService from "../services/userService.js"

async function createUser(req, res) {
  try {
    const { name, email, password, birthday } = req.body;

    if (!name || !email || !password || !birthday) {
      return res.sendStatus(422);
    }

    const user = await userService.signUp({
      name,
      email,
      password,
      birthday,
    });

    if (user === null) {
      return res.sendStatus(418);
    }

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export { createUser };