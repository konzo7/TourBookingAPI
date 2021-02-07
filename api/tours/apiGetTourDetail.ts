import { RequestHandler } from "express";
import { DataStore } from "../../data/data";
import { APIError, PublicInfo } from "../../model/shared/messages";
import { TourDetail } from "../../model/shared/tourDetail";
import { fileMapper } from "../general/static";

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
  const tourID = req.params.id;
  const selectedTour = DataStore.tours.find((item: any) => item.id === tourID);

  if (selectedTour) {
    const imageURLs = selectedTour.img.map(fileMapper(req.app.get("env")));
    const selectedReviews = DataStore.reviews.filter(
      (item: any) => item.tourID === tourID
    );
    res.json(new TourDetail(selectedTour, selectedReviews, imageURLs));
  } else {
    next(new PublicInfo("Tour not found", 400));
  }
};
