import jwt from "jsonwebtoken";

const signToken = (data) =>
  jwt.sign({ data }, process.env.TOKEN_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });

const verifyToken = (token) => jwt.verify(token, process.env.TOKEN_SECRET);

export { signToken, verifyToken };
