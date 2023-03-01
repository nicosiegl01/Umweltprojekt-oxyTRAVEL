import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { HTTPService } from '../http/http.service';
import {Airport} from "../interfaces/Airport";
import {Customer} from "../interfaces/Customer.modle";
import {Tree} from "../interfaces/Tree.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  flightFromImage:string = ""
  title = 'neuesFrontendOxyTravel';

  // flugzeug: AnimationOptions = {
  //   path: '/assets/airplane.json',
  // };

  // bicycal: AnimationOptions = {
  //   path: '/assets/bicycal.json',
  // };

  // car: AnimationOptions = {
  //   path: '/assets/car.json',
  // };
  departureStation: string = ""
  departureCountry: string = ""
  arrivalStation: string = ""
  arrivalCountry: string = ""
  status: string = ""
  arrTime_utc: string = ""
  deptTime_utc: string = ""
  arrTime: string = ""
  deptTime: string = ""
  timeDiff: number = 0;
  timeDiffStr: string = "";
  dep_city: string = ""
  arr_city: string = ""
  aiport: string = "";
  airport1: string = ""
  airportArray: Airport[] = [];
  arr_iaco: string = "";
  dep_iaco: string = "";
  emissions!: number;
  durationCar: string = ""   //hh:mm:ss
  wegAuto!: number         //in kilometer
  fuelUsed!: number        //einheit unklar
  durationBicycle!: string
  wegBicycle!: number;
  lastSearch: string = ""
  distance!: number;
  hideDetails: boolean = true
  inputFlight: string = ""
  public chart:any;

  tree!: Tree
  trees: number = 0;
  //in Kilogramm
  carEmissionPerLiter: number = 2.37;
  carEmissionTrees!: number;
  carEmissions!: number;

  //Variablen für Imageupload
  img: HTMLImageElement = new Image();
  Imageloaded:boolean = false;
  modelvalue!:any
  type:string = ""
  statusOfImageUpload: string = "NotUploaded"

  fromLocation: string = ""
  toLocation: string = ""


  @ViewChild('canvas')
  canvas!: ElementRef;



  constructor(private http: HTTPService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {

  }

  getFlightWithNumber() {
    console.log(this.inputFlight);
    this.getFlight(this.inputFlight);
  }

  /*getFlight(flightnumber: any) {
    this.http.getFlightData(flightnumber).subscribe(temp => {
      console.error('Flug:')
      this.hideDetails = false;
      console.log(temp)
      this.departureCountry = temp.response.dep_country
      this.arrivalCountry = temp.response.arr_country
      this.departureStation = temp.response.dep_name
      this.arrivalStation = temp.response.arr_name
      this.status = temp.response.status
      this.arrTime_utc = temp.response.arr_time_utc
      this.deptTime_utc = temp.response.dep_time_utc
      this.arrTime = temp.response.arr_time
      this.deptTime = temp.response.dep_time
      this.dep_city = temp.response.dep_city
      this.arr_city = temp.response.arr_city
      this.arr_iaco = temp.response.arr_icao
      this.dep_iaco = temp.response.dep_icao
      console.log(this.departureStation);
      this.http.getCarRoute(this.dep_city, this.arr_city, options.shortest).subscribe(temp2 => {

        //this.durationCar = temp2.route.formattedTime
        //this.fuelUsed = temp2.route.fuelUsed
        //this.wegAuto = temp2.route.distance * 1, 609344

        this.durationCar = temp2.route.formattedTime
        this.wegAuto = temp2.route.distance * 1.609344;
        //7.7 Liter pro 100 Kilometer
        this.fuelUsed = this.wegAuto * 0.07;
        console.log(this.durationCar)
        console.log(this.fuelUsed)
        console.log(this.wegAuto)
        this.getTree();
        if(this.wegAuto != null){
          let user: Customer = JSON.parse(localStorage.getItem("my_user")!)
          console.log(user)
          if(user!=null){
            this.http.addFlightNumberToAccount(user, this.inputFlight,this.emissions,this.trees).subscribe()
          }
        }
        console.log(temp2.route.formattedTime)
        console.log(temp2.route.fuelUsed)
        console.log(temp2.route.distance * 1.609344)
      })

      this.http.getBicycleRoute(this.dep_city, this.arr_city).subscribe(temp3 => {
        this.wegBicycle = temp3.route.distance * 1.609344
        this.durationBicycle = temp3.route.formattedTime
      })

      this.http.getAirportByName(this.dep_iaco, this.arr_iaco).subscribe(airport1 => {
        this.airportArray = airport1;
        console.log(this.dep_iaco, this.arr_iaco);
        console.log(this.airportArray[0].latitude);
        console.log(this.airportArray[0].longitude);
        console.log(this.airportArray[1].latitude);
        console.log(this.airportArray[1].longitude);
        this.getTimeDifference();
      });
    })
  }*/

  getFlight(flightnumber: any) {
    this.http.getFlightData(flightnumber).subscribe(temp => {
      console.error('Flug:')
      this.hideDetails = false;
      console.log(temp)
      this.departureCountry = temp.response.dep_country
      this.arrivalCountry = temp.response.arr_country
      this.departureStation = temp.response.dep_name
      this.arrivalStation = temp.response.arr_name
      this.status = temp.response.status
      this.arrTime_utc = temp.response.arr_time_utc
      this.deptTime_utc = temp.response.dep_time_utc
      this.arrTime = temp.response.arr_time
      this.deptTime = temp.response.dep_time
      this.dep_city = temp.response.dep_city
      this.arr_city = temp.response.arr_city
      this.arr_iaco = temp.response.arr_icao
      this.dep_iaco = temp.response.dep_icao
      console.log(this.departureStation);
      this.http.getCarRoute(this.dep_city, this.arr_city, options.shortest).subscribe(temp2 => {
        this.durationCar = temp2.route.formattedTime
        this.wegAuto = temp2.route.distance * 1.609344;
        //7.7 Liter pro 100 Kilometer
        this.fuelUsed = this.wegAuto * 0.07;
        console.log(this.durationCar)
        console.log(this.fuelUsed)
        console.log(this.wegAuto)
        this.getTree();
        if(this.wegAuto != null){
          let user: Customer = JSON.parse(localStorage.getItem("my_user")!)
          console.log(user)
          if(user!=null){
            this.http.addFlightNumberToAccount(user, this.inputFlight,this.emissions,this.trees).subscribe()
          }
        }
      })

      this.http.getBicycleRoute(this.dep_city, this.arr_city).subscribe(temp3 => {
        this.wegBicycle = temp3.route.distance * 1.609344
        this.durationBicycle = temp3.route.formattedTime
      })

      this.http.getAirportByName(this.dep_iaco, this.arr_iaco).subscribe(airport1 => {
        this.airportArray = airport1;
        console.log(this.dep_iaco, this.arr_iaco);
        console.log(this.airportArray[0].latitude);
        console.log(this.airportArray[0].longitude);
        console.log(this.airportArray[1].latitude);
        console.log(this.airportArray[1].longitude);
        this.getTimeDifference();
      });
    })
  }

  getTimeDifference() {
    //this.deptTime_utc - this.arrTime_utc
    const date1 = new Date(this.arrTime_utc);
    const date2 = new Date(this.deptTime_utc);
    const msBetweenDates = date2.getTime() - date1.getTime();
    let timeHours = ((msBetweenDates / 1000) / 60) / 60
    timeHours = Math.abs(timeHours)
    var hrs = parseInt(String(Number(timeHours)));
    var min = Math.round((Number(timeHours) - hrs) * 60);
    var clocktime = hrs + ' Hours ' + min + ' Minutes';
    this.timeDiffStr = clocktime;
    console.log(this.airport1);
    this.getDistance(this.airportArray[0].latitude, this.airportArray[0].longitude, this.airportArray[1].latitude, this.airportArray[1].longitude);
    this.getEmissions();
  }

  getDistance(xBreitengrad: number, xLaengengrad: number, yBreitengrad: number, yLaengengrad: number) {
    // var Luftlinie = 6.378,137 • (z)
    // var z =  sin(xA) • sin(xB)  +  cos(xA) • cos(xB) • cos(yB - yA)
    // 50 = breitengrad Frankfurt / 48
    // 8.58 = Längengrad Frankfurt / 14
    // -33.94 = Breitengrad Sydney / -46
    // 151.175 = Längengrad Sydney /168
    this.distance = 6371 * Math.acos(Math.sin(this.toDegree(xBreitengrad)) * Math.sin(this.toDegree(yBreitengrad)) + Math.cos(this.toDegree(xBreitengrad)) * Math.cos(this.toDegree(yBreitengrad)) * Math.cos(this.toDegree(yLaengengrad) - this.toDegree(xLaengengrad))) * Math.PI / this.toDegree(180);
    console.log(this.distance);
    this.distance = Number(this.distance.toFixed(2));
  }

  toDegree(radians: number) {
    return radians * (Math.PI / 180);
  }

  getEmissions() {
    if(this.distance <= 1852){
      //9% Umwegfaktor (kreisen, wetterbedinungen usw.);
      //A320
      let flightdistance = this.distance * 1.09;
      let emmissionShortDistance = (flightdistance * 0.03 * 0.8 * 3.15) / 195
      this.emissions = emmissionShortDistance;
      //this.emissions = (flightdistance / 0.53996) * 6.27 * 3.15 / 144;
    }else if(this.distance > 1852){
      let flightdistance = this.distance * 1.09;
      let emmissionLongDistance = (flightdistance * 0.041 * 0.8 * 3.15) / 297;
      this.emissions = emmissionLongDistance;
    }
    //this.emissions = (0.04 * 3.15 * this.distance)/144;
    console.log(this.emissions.toFixed(2) + "kg Co2");
  }


  getTree(){
    console.log('getTree')
    this.http.getTree().subscribe(temp => {
      this.tree = temp;
      console.log(this.tree);
      console.log(this.emissions);
      this.trees = Number(this.emissions * 1000) / Number(this.tree.consumption);
      this.carEmissions = this.fuelUsed * this.carEmissionPerLiter
      this.carEmissionTrees = this.carEmissions / Number(this.tree.consumption);
      console.log(this.carEmissions)
      console.log(this.carEmissionTrees);
      console.log(this.trees);
      this.chart = new Chart("MyChart", {
        type: "line", //this denotes tha type of chart

        data: {// values on X-Axis
          labels: ['1er Flug', '2er Flug', '3er Flug'],
          datasets: [
            {
              label: "Co2",
              data: [this.emissions, '400', '50'],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
            },
            {
              label: "Bäume",
              data: [this.trees, '20', '3'],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
            }
          ]
        },
        options: {
          aspectRatio: 2.5
        }
      });
    });
  }

  transformDate(){




  }

  onFileChanged(event: any): void {
    this.statusOfImageUpload = "uploading...";
    this.imageUpload(event)
    if (event == null || event.target == null)
      return;
    const file = event.target.files[0];
    if (file.type.match('image.*')) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        if (evt.target?.readyState === FileReader.DONE) {
          console.log(1);
          this.img.src = evt.target!.result as string;
          this.img.onload = () => {
            this.canvas.nativeElement.width = this.img.width;
            this.canvas.nativeElement.height = this.img.height;
            this.repaintCanvas();
          };
        }
      };
    }
  }

  repaintCanvas(): void {
    const ctx = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
    if (ctx == null)
      return;
    ctx.drawImage(this.img, 0, 0);
  }

  async imageUpload(event:any) {
    /*
    this.showBtn = true
    var file = event.target.files.length;
    for(let i=0;i<file;i++) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.profileImage = event.target.result;
        let temp = this.profileImage
        console.log(temp)
        temp = temp.slice(5).split(";")
        this.type = temp[0]
        this.changeDetector.detectChanges();
      }
      reader.readAsDataURL(event.target.files[i]);
    }
    */
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = await function () {
      me.modelvalue = reader.result;
      //console.log(reader.result);
      me.onSubmit()
    };

    reader.onerror = function (error) {
      console.log('Error: ', error);
    };

  }

  handleImageLoad()
  {
    this.Imageloaded = true;
  }

  async onSubmit()
  {
    //var Image = this.profileImage; //get Image Base64
    let temp = this.modelvalue.split(",")
    let temp2 = temp[0].slice(5).split(";")
    this.type = temp2[0]



    //console.log(Image)

    let str = temp[1]
    //TODO: send to python-script
    console.log(str)
    this.http.sendBase64GetFlightnumber(str).subscribe(temp => {
      this.inputFlight = temp.flugnr
    });

  }


  searchByLocations() {
    console.log(this.fromLocation)
    console.log(this.toLocation)

    this.http.getCarRoute(this.fromLocation, this.toLocation, options.shortest).subscribe(temp2 => {
      this.durationCar = temp2.route.formattedTime
      this.wegAuto = temp2.route.distance * 1.609344;
      //7.7 Liter pro 100 Kilometer
      this.fuelUsed = this.wegAuto * 0.07;

      this.getTree();

      console.log(this.wegAuto)
    })

    this.http.getBicycleRoute(this.fromLocation, this.toLocation).subscribe(temp3 => {
      this.wegBicycle = temp3.route.distance * 1.609344
      this.durationBicycle = temp3.route.formattedTime

      console.log(this.wegBicycle)
    })
  }
}

enum options {
  shortest = "shortest",
  fastest = "fastest"
}


