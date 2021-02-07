import { RequestHandler } from "express";

export const apiUpdateUser: RequestHandler = (req, res, next) => {
  res.json({ Info: "Update user" });
};
