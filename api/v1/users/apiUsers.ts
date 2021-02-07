import { Router } from "express";
import { apiAddUser } from "./apiAddUser";
import { apiDeleteUser } from "./apiDeleteUser";
import { apiGetUserDetail } from "./apiGetUserDetail";
import { apiUpdateUser } from "./apiUpdateUser";

export let usersRouter = Router();

usersRouter.get("/:id", apiGetUserDetail);

usersRouter.post("/", apiAddUser);

usersRouter.delete("/:id", apiDeleteUser);

usersRouter.patch("/:id", apiUpdateUser);
