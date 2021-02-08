import * as dbModel from "../../db/model_generated";

export class TourSummary {
  id: string;
  location: string;
  tour_title: string;

  constructor(data: dbModel.tours) {
    this.id = data.id;
    this.location = data.location;
    this.tour_title = data.tour_title;
  }
}
