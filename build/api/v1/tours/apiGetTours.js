"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetTours = void 0;
const tourSummary_1 = require("../../../model/shared/tourSummary");
const tourFilters_1 = require("../../../model/shared/tourFilters");
const db_1 = require("../../../db/db");
const apiGetTours = (req, res, next) => {
    const filters = new tourFilters_1.TourFilters(req.query);
    db_1.db.any("select * from tours where ${condition:raw}", {
        condition: filters.getConditions()
    }).then((tours) => {
        res.json(tours.map((item) => new tourSummary_1.TourSummary(item)));
    });
};
exports.apiGetTours = apiGetTours;
