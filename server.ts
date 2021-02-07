import express from "express";
import { json } from "body-parser";
import morgan from "morgan";
import path from "path";

import { apiCreateTour } from "./api/tours/apiCreateTour";
import { apiGetTourDetail } from "./api/tours/apiGetTourDetail";
import { apiGetTours } from "./api/tours/apiGetTours";
import { apiDeleteTour } from "./api/tours/apiDeleteTour";
import { apiUpdateTour } from "./api/tours/apiUpdateTour";
import { apiUploadImage } from "./api/tours/apiUploadImage";
import { apiErrorHandler } from "./api/general/errorHandling";
import { apiCheckTourFilters } from "./api/tours/apiCheckTourFilters";
import { apiDownloadImage } from "./api/tours/apiDownloadImage";
import { userRouter } from "./api/users/apiUsers";

const app = express();
app.disable("x-powered-by");
const port = process.env.PORT || 8091;
app.use(json());
app.use(morgan("dev"));
app.use("/static", express.static(path.resolve("./", "public", "img")));

app.use("/users", userRouter);

app.get("/", (req, res, next) => {
  res.send({ some: "This is a Tour Booking API." });
});

app.get("/tours/", apiCheckTourFilters, apiGetTours);

app.get("/tours/:id", apiGetTourDetail);

app.post("/tours/", apiCreateTour);

app.delete("/tours/:id", apiDeleteTour);

app.patch("/tours/:id", apiUpdateTour);

app.post("/tours/:id/img", apiUploadImage);

app.get("/static/download/:id", apiDownloadImage);

app.use(apiErrorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
