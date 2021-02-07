"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const apiCreateTour_1 = require("./api/tours/apiCreateTour");
const apiGetTourDetail_1 = require("./api/tours/apiGetTourDetail");
const apiGetTours_1 = require("./api/tours/apiGetTours");
const apiDeleteTour_1 = require("./api/tours/apiDeleteTour");
const apiUpdateTour_1 = require("./api/tours/apiUpdateTour");
const apiUploadImage_1 = require("./api/tours/apiUploadImage");
const errorHandling_1 = require("./api/general/errorHandling");
const apiCheckTourFilters_1 = require("./api/tours/apiCheckTourFilters");
const app = express_1.default();
const port = process.env.PORT || 8091;
app.use(body_parser_1.json());
app.use(morgan_1.default("dev"));
app.use("/static", express_1.default.static(path_1.default.resolve("./", "public", "img")));
app.get("/", (req, res, next) => {
    res.send({ some: "This is a Tour Booking API." });
});
app.get("/tours/", apiCheckTourFilters_1.apiCheckTourFilters, apiGetTours_1.apiGetTours);
app.get("/tours/:id", apiGetTourDetail_1.apiGetTourDetail);
app.post("/tours/", apiCreateTour_1.apiCreateTour);
app.delete("/tours/:id", apiDeleteTour_1.apiDeleteTour);
app.patch("/tours/:id", apiUpdateTour_1.apiUpdateTour);
app.post("/tours/:id/img", apiUploadImage_1.apiUploadImage);
app.use(errorHandling_1.apiErrorHandler);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
