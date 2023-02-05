import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HTTPService} from "../http/http.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  counter:number = 0
  img: HTMLImageElement = new Image();
  Imageloaded:boolean = false;
  modelvalue!:any
  type:string = ""

  @ViewChild('canvas')
  canvas!: ElementRef;

  constructor(private http:HTTPService) { }

  ngOnInit(): void {
    this.http.findNumOfSearchs().subscribe(temp=>{
      console.log(temp)
      this.counter = temp
    })
  }
  onFileChanged(event: any): void {
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
      console.log(me.modelvalue)
    };
    console.log(this.modelvalue)

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

    console.log(str)

    //TODO: send to python-script
  }
}
