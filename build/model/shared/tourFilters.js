"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourFilters = void 0;
const db_1 = require("../../db/db");
class TourFilters {
    constructor(data) {
        this.location = data.location;
        this.priceMin = data.priceMin;
        this.priceMax = data.priceMax;
    }
    getConditions() {
        const filterCondition = [
            this.location ? "location = ${location}" : "true",
            this.priceMin ? "price > ${priceMin}" : "true",
            this.priceMax ? "price < ${priceMax}" : "true"
        ].join(" AND ");
        return db_1.pgp.as.format(filterCondition, this);
    }
}
exports.TourFilters = TourFilters;
