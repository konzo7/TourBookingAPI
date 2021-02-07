import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import { DataStore } from "../../data/data";
import { APIError, PublicInfo } from "../../model/shared/messages";

export const apiCreateTour: RequestHandler = (req, res, next) => {
  const requiredFields = ["tourTitle", "location"];
  const givenFields = Object.getOwnPropertyNames(req.body);
  if (!requiredFields.every((field) => givenFields.includes(field))) {
    return next(
      new APIError("Data missing", "Not all required fields supplied.", 400)
    );
  }

  const newTour = {
    id: uuidv4(),
    location: req.body.location || "",
    tourTitle: req.body.tourTitle || "",
    tourCategory: req.body.tourCategory || "",
    tourDescription: req.body.tourDescription || "",
    price: req.body.price || 0,
    currency: req.body.currency || "",
    img: []
  };

  DataStore.tours.push(newTour);
  res.json(new PublicInfo("Tour added", 200, { tour: newTour }));
};
