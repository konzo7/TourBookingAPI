import { RequestHandler } from "express";

export const apiGetUserDetail: RequestHandler = (req, res, next) => {
  res.json({ Info: "Get user detail" });
};
