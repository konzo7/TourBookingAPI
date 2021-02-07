"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCreateTour = void 0;
const uuid_1 = require("uuid");
const data_1 = require("../../../data/data");
const messages_1 = require("../../../model/shared/messages");
const apiCreateTour = (req, res, next) => {
    const requiredFields = ["tourTitle", "location"];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requiredFields.every((field) => givenFields.includes(field))) {
        return next(messages_1.APIError.errMissingBody());
    }
    const newTour = {
        id: uuid_1.v4(),
        location: req.body.location || "",
        tourTitle: req.body.tourTitle || "",
        tourCategory: req.body.tourCategory || "",
        tourDescription: req.body.tourDescription || "",
        price: req.body.price || 0,
        currency: req.body.currency || "",
        img: []
    };
    data_1.DataStore.tours.push(newTour);
    res.json(messages_1.PublicInfo.infoCreated({ newTour }));
};
exports.apiCreateTour = apiCreateTour;
