import express, { Router } from "express";
import { json } from "body-parser";
import morgan from "morgan";
import path from "path";

import { apiErrorHandler } from "./general/errorHandling";
import { apiDownloadImage } from "./tours/apiDownloadImage";
import { toursRouter } from "./tours/apiTours";
import { usersRouter } from "./users/apiUsers";

export let routerV1 = Router();

routerV1.use(json());
routerV1.use(morgan("dev"));

routerV1.use("/static", express.static(path.join(__dirname, "public", "img")));

routerV1.use("/users", usersRouter);

routerV1.use("/tours/", toursRouter);

routerV1.get("/static/download/:id", apiDownloadImage);

routerV1.use(apiErrorHandler);
