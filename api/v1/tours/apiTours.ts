import { Router } from "express";
import { apiCheckTourFilters } from "./apiCheckTourFilters";
import { apiGetTours } from "./apiGetTours";
import { apiGetTourDetail } from "./apiGetTourDetail";
import { apiCreateTour } from "./apiCreateTour";
import { apiDeleteTour } from "./apiDeleteTour";
import { apiUpdateTour } from "./apiUpdateTour";
import { apiUploadImage } from "./apiUploadImage";

export let toursRouter = Router();

toursRouter
  .route("/")
  .get(apiCheckTourFilters, apiGetTours)
  .post(apiCreateTour);

toursRouter
  .route("/:id")
  .get(apiGetTourDetail)
  .delete(apiDeleteTour)
  .patch(apiUpdateTour);

toursRouter.post("/:id/img", apiUploadImage);
