"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUpdateTour = void 0;
const data_1 = require("../../data/data");
const apiUpdateTour = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex((item) => item.id === tourID);
    if (tourIndex > -1) {
        const originalTour = data_1.DataStore.tours[tourIndex];
        const newTour = {
            id: tourID,
            location: req.body.location || originalTour.location,
            tourTitle: req.body.tourTitle || originalTour.tourTitle,
            tourCategory: req.body.tourCategory || originalTour.tourCategory,
            tourDescription: req.body.tourDescription || originalTour.tourDescription,
            price: req.body.price || originalTour.price,
            currency: req.body.currency || originalTour.currency,
            img: req.body.img || originalTour.img
        };
        data_1.DataStore.tours[tourIndex] = newTour;
        res.json({ status: "success", message: "Element updated" });
    }
    else {
        res.json({ status: "error", message: "Element not found" });
    }
};
exports.apiUpdateTour = apiUpdateTour;
/* Patch: Only changed items will applied the rest will stay the same  */
