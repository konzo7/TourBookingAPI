"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toursRouter = void 0;
const express_1 = require("express");
const apiCheckTourFilters_1 = require("./apiCheckTourFilters");
const apiGetTours_1 = require("./apiGetTours");
const apiGetTourDetail_1 = require("./apiGetTourDetail");
const apiCreateTour_1 = require("./apiCreateTour");
const apiDeleteTour_1 = require("./apiDeleteTour");
const apiUpdateTour_1 = require("./apiUpdateTour");
const apiUploadImage_1 = require("./apiUploadImage");
exports.toursRouter = express_1.Router();
exports.toursRouter
    .route("/")
    .get(apiCheckTourFilters_1.apiCheckTourFilters, apiGetTours_1.apiGetTours)
    .post(apiCreateTour_1.apiCreateTour);
exports.toursRouter
    .route("/:id")
    .get(apiGetTourDetail_1.apiGetTourDetail)
    .delete(apiDeleteTour_1.apiDeleteTour)
    .patch(apiUpdateTour_1.apiUpdateTour);
exports.toursRouter.post("/:id/img", apiUploadImage_1.apiUploadImage);
