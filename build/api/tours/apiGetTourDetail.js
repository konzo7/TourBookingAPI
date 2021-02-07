"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetTourDetail = void 0;
const data_1 = require("../../data/data");
const messages_1 = require("../../model/shared/messages");
const tourDetail_1 = require("../../model/shared/tourDetail");
const static_1 = require("../general/static");
const apiGetTourDetail = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = data_1.DataStore.tours.find((item) => item.id === tourID);
    if (selectedTour) {
        const imageURLs = selectedTour.img.map(static_1.fileMapper(req.app.get("env")));
        const selectedReviews = data_1.DataStore.reviews.filter((item) => item.tourID === tourID);
        res.json(new tourDetail_1.TourDetail(selectedTour, selectedReviews, imageURLs));
    }
    else {
        next(new messages_1.PublicInfo("Tour not found", 400));
    }
};
exports.apiGetTourDetail = apiGetTourDetail;
