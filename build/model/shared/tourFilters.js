"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourFilters = void 0;
class TourFilters {
    constructor(data) {
        this.location = data.location;
        this.priceMin = data.priceMin;
        this.priceMax = data.priceMax;
    }
}
exports.TourFilters = TourFilters;
