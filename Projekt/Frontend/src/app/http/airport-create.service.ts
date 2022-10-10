import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AirportBigJsonModle} from "../interfaces/AirportBigJson.modle";
import {log} from "util";

@Injectable({
  providedIn: 'root'
})
export class AirportCreateService {
  array:AirportBigJsonModle[] = [{
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "cd04f9d080b35c0dd083c02e5e118568b7060910",
    "fields": {
      "column_9": 56,
      "geo_punkt": [-3.28607010841, 103.879997253],
      "column_12": "Asia/Jakarta",
      "column_10": 7.0,
      "column_4": "Indonesia",
      "column_5": "PDO",
      "column_8": "103.87999725341797",
      "column_2": "Pendopo Airport",
      "column_7": "-3.2860701084136963",
      "column_3": "Talang Gudang-Sumatra Island",
      "column_11": "N",
      "column_6": "WIPQ",
      "column_1": 6228
    },
    "geometry": {
      "type": "Point",
      "coordinates": [103.879997253, -3.28607010841]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "67e39696bb74c75a5ba894aa13031dbec0fa4edd",
    "fields": {
      "column_9": 1387,
      "geo_punkt": [-3.6822, 138.6755],
      "column_12": "Asia/Jayapura",
      "column_10": 9.0,
      "column_4": "Indonesia",
      "column_5": "BUI",
      "column_8": "138.6755",
      "column_2": "Bokondini Airport",
      "column_7": "-3.6822",
      "column_3": "Bokondini-Papua Island",
      "column_11": "N",
      "column_6": "WAJB",
      "column_1": 6205
    },
    "geometry": {
      "type": "Point",
      "coordinates": [138.6755, -3.6822]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "d1a86f9a7d8a17f5af9d530785f393d2726e9b26",
    "fields": {
      "column_9": 371,
      "geo_punkt": [-28.8780994415, 121.315002441],
      "column_12": "Australia/Perth",
      "column_10": 8.0,
      "column_4": "Australia",
      "column_5": "LNO",
      "column_8": "121.31500244140625",
      "column_2": "Leonora Airport",
      "column_7": "-28.87809944152832",
      "column_3": "Leonora",
      "column_11": "O",
      "column_6": "YLEO",
      "column_1": 6283
    },
    "geometry": {
      "type": "Point",
      "coordinates": [121.315002441, -28.8780994415]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "25ff26e989bf5fc42d8f49738f16c3bf104f4a70",
    "fields": {
      "column_9": 98,
      "geo_punkt": [-18.3367004395, 130.638000488],
      "column_12": "Australia/Darwin",
      "column_10": 9.5,
      "column_4": "Australia",
      "column_5": "HOK",
      "column_8": "130.638000488",
      "column_2": "Hooker Creek Airport",
      "column_7": "-18.3367004395",
      "column_3": "Hooker Creek",
      "column_11": "O",
      "column_6": "YHOO",
      "column_1": 6273
    },
    "geometry": {
      "type": "Point",
      "coordinates": [130.638000488, -18.3367004395]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "afb2de0d1f0bd8cd99661ab2104f2c275206e5f7",
    "fields": {
      "column_9": 48,
      "geo_punkt": [-27.692813, 114.259169],
      "column_12": "Australia/Perth",
      "column_10": 8.0,
      "column_4": "Australia",
      "column_5": "KAX",
      "column_8": "114.259169",
      "column_2": "Kalbarri Airport",
      "column_7": "-27.692813",
      "column_3": "Kalbarri",
      "column_11": "O",
      "column_6": "YKBR",
      "column_1": 6277
    },
    "geometry": {
      "type": "Point",
      "coordinates": [114.259169, -27.692813]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "f2abf6a94623f5b1ecebba756c050193df6109b6",
    "fields": {
      "column_9": 9,
      "geo_punkt": [-18.7553005219, 146.580993652],
      "column_12": "Australia/Brisbane",
      "column_10": 10.0,
      "column_4": "Australia",
      "column_5": "PMK",
      "column_8": "146.58099365234375",
      "column_2": "Palm Island Airport",
      "column_7": "-18.755300521850586",
      "column_3": "Palm Island",
      "column_11": "O",
      "column_6": "YPAM",
      "column_1": 6313
    },
    "geometry": {
      "type": "Point",
      "coordinates": [146.580993652, -18.7553005219]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "7d87d0e784aa3c1fe0bdf7fe738219ff4732f38d",
    "fields": {
      "column_9": 200,
      "geo_punkt": [-26.6121997833, 144.253005981],
      "column_12": "Australia/Brisbane",
      "column_10": 10.0,
      "column_4": "Australia",
      "column_5": "ULP",
      "column_8": "144.2530059814453",
      "column_2": "Quilpie Airport",
      "column_7": "-26.612199783325195",
      "column_3": "Quilpie",
      "column_11": "O",
      "column_6": "YQLP",
      "column_1": 6322
    },
    "geometry": {
      "type": "Point",
      "coordinates": [144.253005981, -26.6121997833]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "94692733999f9a5fce8fafdbaa77e243725220d0",
    "fields": {
      "column_9": 326,
      "geo_punkt": [-33.131401062, 148.238998413],
      "column_12": "Australia/Sydney",
      "column_10": 10.0,
      "column_4": "Australia",
      "column_5": "PKE",
      "column_8": "148.238998413",
      "column_2": "Parkes Airport",
      "column_7": "-33.131401062",
      "column_3": "Parkes",
      "column_11": "O",
      "column_6": "YPKS",
      "column_1": 6317
    },
    "geometry": {
      "type": "Point",
      "coordinates": [148.238998413, -33.131401062]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "56dfd60634b70d894dfa5c4657104a26ff636ab1",
    "fields": {
      "column_9": 22,
      "geo_punkt": [-17.68409, 141.069664],
      "column_12": "Australia/Brisbane",
      "column_10": 10.0,
      "column_4": "Australia",
      "column_5": "NTN",
      "column_8": "141.069664",
      "column_2": "Normanton Airport",
      "column_7": "-17.68409",
      "column_3": "Normanton",
      "column_11": "O",
      "column_6": "YNTN",
      "column_1": 6309
    },
    "geometry": {
      "type": "Point",
      "coordinates": [141.069664, -17.68409]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "3f8dfc68a533fdf59973dfd4e4ddfbe4386b174e",
    "fields": {
      "column_9": 941,
      "geo_punkt": [-36.3005981445, 148.973999023],
      "column_12": "Australia/Sydney",
      "column_10": 10.0,
      "column_4": "Australia",
      "column_5": "OOM",
      "column_8": "148.973999023",
      "column_2": "Cooma Snowy Mountains Airport",
      "column_7": "-36.3005981445",
      "column_3": "Cooma",
      "column_11": "O",
      "column_6": "YCOM",
      "column_1": 6261
    },
    "geometry": {
      "type": "Point",
      "coordinates": [148.973999023, -36.3005981445]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "7515af27f828e76e93e0f5d2dfec69a750637075",
    "fields": {
      "column_9": 188,
      "geo_punkt": [-20.6686000824, 140.503997803],
      "column_12": "Australia/Brisbane",
      "column_10": 10.0,
      "column_4": "Australia",
      "column_5": "CNJ",
      "column_8": "140.503997803",
      "column_2": "Cloncurry Airport",
      "column_7": "-20.668600082399998",
      "column_3": "Cloncurry",
      "column_11": "O",
      "column_6": "YCCY",
      "column_1": 6255
    },
    "geometry": {
      "type": "Point",
      "coordinates": [140.503997803, -20.6686000824]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "9963353a64e9778e4d739e5a13b069f08a46eff5",
    "fields": {
      "column_9": 4,
      "geo_punkt": [-10.1499996185, 142.1734],
      "column_12": "Australia/Brisbane",
      "column_10": 10.0,
      "column_4": "Australia",
      "column_5": "BDD",
      "column_8": "142.1734",
      "column_2": "Badu Island Airport",
      "column_7": "-10.149999618499999",
      "column_3": "Badu Island",
      "column_11": "O",
      "column_6": "YBAU",
      "column_1": 6239
    },
    "geometry": {
      "type": "Point",
      "coordinates": [142.1734, -10.1499996185]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "2e492f629848ab997284e635e15ae8383dd41248",
    "fields": {
      "column_9": 4,
      "geo_punkt": [-24.880211, 113.67174],
      "column_12": "Australia/Perth",
      "column_10": 8.0,
      "column_4": "Australia",
      "column_5": "CVQ",
      "column_8": "113.67174",
      "column_2": "Carnarvon Airport",
      "column_7": "-24.880211",
      "column_3": "Carnarvon",
      "column_11": "O",
      "column_6": "YCAR",
      "column_1": 6251
    },
    "geometry": {
      "type": "Point",
      "coordinates": [113.67174, -24.880211]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "50b48676831c5017334afc509dd42579cf5ab3e4",
    "fields": {
      "column_9": 0,
      "geo_punkt": [32.3911018372, 105.702003479],
      "column_12": "Asia/Shanghai",
      "column_10": 8.0,
      "column_4": "China",
      "column_5": "GYS",
      "column_8": "105.7020034790039",
      "column_2": "Guangyuan Airport",
      "column_7": "32.3911018371582",
      "column_3": "Guangyuan",
      "column_11": "U",
      "column_6": "ZUGU",
      "column_1": 6398
    },
    "geometry": {
      "type": "Point",
      "coordinates": [105.702003479, 32.3911018372]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "b326a043494a1a80e0d4c938e9857927804220de",
    "fields": {
      "column_9": 1,
      "geo_punkt": [29.9342002869, 122.361999512],
      "column_12": "Asia/Shanghai",
      "column_10": 8.0,
      "column_4": "China",
      "column_5": "HSN",
      "column_8": "122.361999512",
      "column_2": "Zhoushan Airport",
      "column_7": "29.9342002869",
      "column_3": "Zhoushan",
      "column_11": "U",
      "column_6": "ZSZS",
      "column_1": 6395
    },
    "geometry": {
      "type": "Point",
      "coordinates": [122.361999512, 29.9342002869]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "197e3b507cb6d0095965e0e024b6bc9aed6b95d6",
    "fields": {
      "column_9": 167,
      "geo_punkt": [38.5912017822, -92.1560974121],
      "column_12": "America/Chicago",
      "column_10": -6.0,
      "column_4": "United States",
      "column_5": "JEF",
      "column_8": "-92.15609741210001",
      "column_2": "Jefferson City Memorial Airport",
      "column_7": "38.5912017822",
      "column_3": "Jefferson City",
      "column_11": "A",
      "column_6": "KJEF",
      "column_1": 6447
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-92.1560974121, 38.5912017822]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "579024c65c00a0a05921a3d5ec5e7883e4d27222",
    "fields": {
      "column_9": 761,
      "geo_punkt": [-27.6618995667, -52.2682991028],
      "column_12": "America/Sao_Paulo",
      "column_10": -3.0,
      "column_4": "Brazil",
      "column_5": "ERM",
      "column_8": "-52.2682991027832",
      "column_2": "Erechim Airport",
      "column_7": "-27.66189956665039",
      "column_3": "Erechim",
      "column_11": "S",
      "column_6": "SSER",
      "column_1": 6477
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-52.2682991028, -27.6618995667]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "0fd184cc0af78c79ffffe866c83cb51fabb76c90",
    "fields": {
      "column_9": 3,
      "geo_punkt": [65.2537002563, -166.85899353],
      "column_12": "America/Anchorage",
      "column_10": -9.0,
      "column_4": "United States",
      "column_5": "KPC",
      "column_8": "-166.85899353",
      "column_2": "Port Clarence Coast Guard Station",
      "column_7": "65.2537002563",
      "column_3": "Port Clarence",
      "column_11": "A",
      "column_6": "PAPC",
      "column_1": 6736
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-166.85899353, 65.2537002563]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "9edc6522afd3829397271ccdda500c3c379cf9a8",
    "fields": {
      "column_9": 214,
      "geo_punkt": [39.707901, -77.72949982],
      "column_12": "America/New_York",
      "column_10": -5.0,
      "column_4": "United States",
      "column_5": "HGR",
      "column_8": "-77.72949982",
      "column_2": "Hagerstown Regional Richard A Henson Field",
      "column_7": "39.707901",
      "column_3": "Hagerstown",
      "column_11": "A",
      "column_6": "KHGR",
      "column_1": 6739
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-77.72949982, 39.707901]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "56faba385596ebda44dce853f602050430e4f564",
    "fields": {
      "column_9": 255,
      "geo_punkt": [32.5355567932, 74.3638916016],
      "column_12": "Asia/Karachi",
      "column_10": 5.0,
      "column_4": "Pakistan",
      "column_5": "SKT",
      "column_8": "74.3638916016",
      "column_2": "Sialkot Airport",
      "column_7": "32.5355567932",
      "column_3": "Sialkot",
      "column_11": "N",
      "column_6": "OPST",
      "column_1": 6776
    },
    "geometry": {
      "type": "Point",
      "coordinates": [74.3638916016, 32.5355567932]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "cd4e19a0bca9be649aef7a79d96daf00969094e0",
    "fields": {
      "column_9": 6,
      "geo_punkt": [15.7631, -84.543602],
      "column_12": "America/Tegucigalpa",
      "column_10": -6.0,
      "column_4": "Honduras",
      "column_5": "BHG",
      "column_8": "-84.543602",
      "column_2": "Brus Laguna Airport",
      "column_7": "15.7631",
      "column_3": "Brus Laguna",
      "column_11": "U",
      "column_6": "MHBL",
      "column_1": 6774
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-84.543602, 15.7631]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "ab8f4f13af3dad0aebfdd98fe520456ea2263cf7",
    "fields": {
      "column_9": 548,
      "geo_punkt": [47.8382987976, -90.3828964233],
      "column_12": "America/Chicago",
      "column_10": -6.0,
      "column_4": "United States",
      "column_5": "GRM",
      "column_8": "-90.38289642330001",
      "column_2": "Grand Marais Cook County Airport",
      "column_7": "47.8382987976",
      "column_3": "Grand Marais",
      "column_11": "U",
      "column_6": "KCKC",
      "column_1": 6849
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-90.3828964233, 47.8382987976]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "103f34acdefbceb284a1d1d585b647ed964ada1d",
    "fields": {
      "column_9": 9,
      "geo_punkt": [33.217300415, -117.353996277],
      "column_12": "America/Los_Angeles",
      "column_10": -8.0,
      "column_4": "Australia",
      "column_5": "OCN",
      "column_8": "-117.35399627686",
      "column_2": "Oceanside Municipal Airport",
      "column_7": "33.217300415039",
      "column_3": "Fraser Island",
      "column_11": "O",
      "column_6": "KOKB",
      "column_1": 6829
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-117.353996277, 33.217300415]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }, {
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "8eb870510e52cef013544c07818afb6af0490aac",
    "fields": {
      "column_9": 366,
      "geo_punkt": [44.9262008667, -89.6266021729],
      "column_12": "America/Chicago",
      "column_10": -6.0,
      "column_4": "United States",
      "column_5": "AUW",
      "column_8": "-89.6266021729",
      "column_2": "Wausau Downtown Airport",
      "column_7": "44.9262008667",
      "column_3": "Wausau",
      "column_11": "U",
      "column_6": "KAUW",
      "column_1": 6853
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-89.6266021729, 44.9262008667]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  },{
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "6c3a7ec7a59b327f00290d442c32fd6e396a3049",
    "fields": {
      "column_9": 290,
      "geo_punkt": [47.14653, 16.316843],
      "column_12": "Europe/Vienna",
      "column_10": 1.0,
      "column_4": "Austria",
      "column_5": "0",
      "column_8": "16.316843",
      "column_2": "Flugplatz Punitz",
      "column_7": "47.14653",
      "column_3": "Punitz-Guessing",
      "column_11": "E",
      "column_6": "LOGG",
      "column_1": 8467
    },
    "geometry": {
      "type": "Point",
      "coordinates": [16.316843, 47.14653]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  },{
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "ca6e8f04c6f2958c344bdd84868d8e9ab67ba447",
    "fields": {
      "column_9": 32,
      "geo_punkt": [51.3338890076, 6.35944414139],
      "column_12": "Europe/Berlin",
      "column_10": 1.0,
      "column_4": "Deutschland",
      "column_5": "0",
      "column_8": "6.3594441413879395",
      "column_2": "Grefrath-Niershorst Airport",
      "column_7": "51.33388900756836",
      "column_3": "Grefrath",
      "column_11": "E",
      "column_6": "EDLF",
      "column_1": 8671
    },
    "geometry": {
      "type": "Point",
      "coordinates": [6.35944414139, 51.3338890076]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  },{
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "4e16fdaea734b3548c9a8ac3ce9bc1e4eebffca8",
    "fields": {
      "column_9": 412,
      "geo_punkt": [47.3849983215, 9.69999980927],
      "column_12": "Europe/Vienna",
      "column_10": 1.0,
      "column_4": "Austria",
      "column_5": "HOH",
      "column_8": "9.69999980927",
      "column_2": "Hohenems-Dornbirn Airport",
      "column_7": "47.3849983215",
      "column_3": "Hohenems",
      "column_11": "E",
      "column_6": "LOIH",
      "column_1": 6797
    },
    "geometry": {
      "type": "Point",
      "coordinates": [9.69999980927, 47.3849983215]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  },{
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "3d8f82cf60f40aac508f0a6afb011b1fdabc26cc",
    "fields": {
      "column_9": 670,
      "geo_punkt": [47.5201, 12.4497],
      "column_12": "Europe/Vienna",
      "column_10": 1.0,
      "column_4": "Austria",
      "column_5": "0",
      "column_8": "12.4497",
      "column_2": "St. Johann In Tirol Airport",
      "column_7": "47.5201",
      "column_3": "St. Johann in Tirol",
      "column_11": "E",
      "column_6": "LOIJ",
      "column_1": 9076
    },
    "geometry": {
      "type": "Point",
      "coordinates": [12.4497, 47.5201]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  },{
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "083a72e4617214e41f116e453b7cb8747093dde7",
    "fields": {
      "column_9": 318,
      "geo_punkt": [48.1833000183, 14.0409002304],
      "column_12": "Europe/Vienna",
      "column_10": 1.0,
      "column_4": "Austria",
      "column_5": "0",
      "column_8": "14.040900230407715",
      "column_2": "Wels Airport",
      "column_7": "48.18330001831055",
      "column_3": "Wels",
      "column_11": "E",
      "column_6": "LOLW",
      "column_1": 1608
    },
    "geometry": {
      "type": "Point",
      "coordinates": [14.0409002304, 48.1833000183]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  },{
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "d2e5c1646e5fea688c536308e38536abd61ed1c1",
    "fields": {
      "column_9": 430,
      "geo_punkt": [47.7933006287, 13.0043001175],
      "column_12": "Europe/Vienna",
      "column_10": 1.0,
      "column_4": "Austria",
      "column_5": "SZG",
      "column_8": "13.0043001175",
      "column_2": "Salzburg Airport",
      "column_7": "47.793300628699996",
      "column_3": "Salzburg",
      "column_11": "E",
      "column_6": "LOWS",
      "column_1": 1612
    },
    "geometry": {
      "type": "Point",
      "coordinates": [13.0043001175, 47.7933006287]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  },{
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "f2618257485a50b851a8ecbeecb30842473ac2dd",
    "fields": {
      "column_9": 183,
      "geo_punkt": [48.1102981567, 16.5697002411],
      "column_12": "Europe/Vienna",
      "column_10": 1.0,
      "column_4": "Austria",
      "column_5": "VIE",
      "column_8": "16.569700241089",
      "column_2": "Vienna International Airport",
      "column_7": "48.110298156738",
      "column_3": "Vienna",
      "column_11": "E",
      "column_6": "LOWW",
      "column_1": 1613
    },
    "geometry": {
      "type": "Point",
      "coordinates": [16.5697002411, 48.1102981567]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  },{
    "datasetid": "rhein-kreis-neuss-flughafen-weltweit",
    "recordid": "5a12415467388270197ce07bcd441953ec05ba0c",
    "fields": {
      "column_9": 92,
      "geo_punkt": [50.8658981323, 7.1427397728],
      "column_12": "Europe/Berlin",
      "column_10": 1.0,
      "column_4": "Deutschland",
      "column_5": "CGN",
      "column_8": "7.1427397728",
      "column_2": "K\u00f6ln Bonn Airport",
      "column_7": "50.8658981323",
      "column_3": "Cologne",
      "column_11": "E",
      "column_6": "EDDK",
      "column_1": 344
    },
    "geometry": {
      "type": "Point",
      "coordinates": [7.1427397728, 50.8658981323]
    },
    "record_timestamp": "2019-03-28T18:37:25.643Z"
  }]

  constructor(private http:HttpClient) { }

  pushAll(){
    let url = "http://localhost:8080/api/airport/post";
    let body;
    for (let i = 0; i < this.array.length; i++) {
      body = {
        "name": this.array[i].fields.column_2.replace('\\',''),
        "shortName": this.array[i].fields.column_6,
        "recordid": this.array[i].recordid,
        "latitude": this.array[i].geometry.coordinates[1],
        "longitude": this.array[i].geometry.coordinates[0]
      }
      console.log(body)
      this.http.post(url,body).subscribe(temp=>console.log(temp))
      console.log()
    }
  }
}
