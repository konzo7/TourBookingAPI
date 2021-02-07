"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCheckTourFilters = void 0;
const tourFilters_1 = require("../../model/shared/tourFilters");
const messages_1 = require("../../model/shared/messages");
const apiCheckTourFilters = (req, res, next) => {
    const filters = new tourFilters_1.TourFilters(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(messages_1.APIError.errInvalidQueryParameter({ filter: filter }));
        }
    }
    next();
};
exports.apiCheckTourFilters = apiCheckTourFilters;
