import connection from "../database";

async function createUser({ name, email, password, birthday }) {
  return connection.query(
    `
        INSERT INTO users (name, email, password, birthday) VALUES ($1, $2, $3, $4)
      `,
    [name, email, password, birthday]
  );
}

export {
    createUser,
}