"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourDetail = void 0;
const tourSummary_1 = require("./tourSummary");
const reviews_1 = require("./reviews");
class TourDetail extends tourSummary_1.TourSummary {
    constructor(tourData, reviewData, tourImages) {
        super(tourData);
        this.tour_category = tourData.tour_category;
        this.tour_description = tourData.tour_description;
        this.price = tourData.price;
        this.currency = tourData.currency;
        this.img = tourImages;
        this.reviews = reviewData.map((item) => new reviews_1.Review(item));
    }
}
exports.TourDetail = TourDetail;
