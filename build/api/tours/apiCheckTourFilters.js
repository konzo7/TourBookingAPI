"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCheckTourFilters = void 0;
const messages_1 = require("../../model/shared/messages");
const tourFilters_1 = require("../../model/shared/tourFilters");
const apiCheckTourFilters = (req, res, next) => {
    const filters = new tourFilters_1.TourFilters(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(new messages_1.APIError("Query String Error", "No such filter", 400));
        }
    }
    console.log(filters);
    next();
};
exports.apiCheckTourFilters = apiCheckTourFilters;
