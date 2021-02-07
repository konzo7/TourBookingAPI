import { RequestHandler } from "express";

export const apiAddUser: RequestHandler = (req, res, next) => {
  res.json({ Info: "Add user" });
};
