import { TourSummary } from "./tourSummary";
import { Review } from "./reviews";

export class TourDetail extends TourSummary {
  tour_category: string;
  tour_description: string;
  price: number;
  currency: string;
  img: string[];
  reviews: Review[];

  constructor(tourData: any, reviewData: any, tourImages: string[]) {
    super(tourData);
    this.tour_category = tourData.tour_category;
    this.tour_description = tourData.tour_description;
    this.price = tourData.price;
    this.currency = tourData.currency;
    this.img = tourImages;
    this.reviews = reviewData.map((item: any) => new Review(item));
  }
}
