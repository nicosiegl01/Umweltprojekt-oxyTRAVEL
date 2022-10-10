import {Geometry} from "./Geometry.model";

export interface AirportBigJsonModle{
  datasetid: string,
  recordid: string,
  fields: {
    column_9: number,
    geo_punkt: number[],
    column_12: string,
    "column_10": number,
    "column_4": string,
    "column_5": string,
    "column_8": string,
    "column_2": string,
    "column_7": string,
    "column_3": string,
    "column_11": string,
    "column_6": string,
    "column_1": number
  },
  "geometry": Geometry,
  record_timestamp: string
}
