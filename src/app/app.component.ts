import { Component, OnInit } from '@angular/core';

class Temperatur {
  name:string;
  temperaturValue:number;
  water:number;

  constructor(name,value,water){
    this.name = name;
    this.temperaturValue = value;
    this.water = water;
  }
}

class Teddy {
  name:string;
  iconUrl:string;
  followers:number;
  following:number;

  constructor(name,icon,followers,following){
    this.name = name;
    this.iconUrl = icon;
    this.followers = followers;
    this.following = following;
  }
}

class Region {
  widgetType:string;
  address:string;
  t1:string;
  t2:string;
  tel:string;
  icon1Url:string;
  icon2Url:string;
  mainImage:string;
  temperatur:Temperatur;
  teddy:Teddy;

  constructor(obj:any){
    this.widgetType = obj.widgetType;
    this.address = obj.address;
    this.t1 = obj.t1;
    this.t2 = obj.t2;
    this.tel = obj.tel;
    this.icon1Url = obj.icon1Url;
    this.icon2Url = obj.icon2Url;
    this.mainImage = obj.mainImage;
    this.temperatur = obj.temperatur;
    this.teddy = obj.teddy;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string;
  regions:Array<Region>;
  menuTitles:Array<string>;
  currentRegion:Region;
  currentWidgetType:string;

  ngOnInit(){
    this.title = 'Hot Weather Widget';
    this.menuTitles = ["Hotel","Fishing","Tours","Weather"];
    this.regions = [new Region({
      widgetType:"Hotel",
      address: "Resort Address 1",
      t1:"Sed perspiciatis 1",
      t2:"Et harum quidem 1",
      tel:"+1285 968 685",
      icon1Url:"images/res.jpg",
      icon2Url:"images/r1.jpg",
      mainImage:"http://2phuzf2k922v3tj8nl1kld9lx.wpengine.netdna-cdn.com/wp-content/uploads/2014/03/Lille-Nord-Pas-de-Calais-Region-France.jpg",
      temperatur:new Temperatur("Et harum quidem 1",14,20),
      teddy:new Teddy("Nam libero voluptatem","images/b1.jpg",1000,100)
    }),new Region({
      widgetType:"Fishing",
      address: "Resort Address 2",
      t1:"Sed perspiciatis 2",
      t2:"Et harum quidem 2",
      tel:"+1285 968 000",
      icon1Url:"images/res.jpg",
      icon2Url:"images/r1.jpg",
      mainImage:"http://www.liberty-int.com/Public/france-normal.jpg",
      temperatur:new Temperatur("Et harum quidem 2",22,33),
      teddy:new Teddy("Nam libero voluptatem 2","images/b1.jpg",2000,200)
    }),new Region({
      widgetType:"Tours",
      address: "Resort Address 3",
      t1:"Sed perspiciatis 3",
      t2:"Et harum quidem 3",
      tel:"+1285 968 333",
      icon1Url:"images/res.jpg",
      icon2Url:"images/r1.jpg",
      mainImage:"http://lifewithme.com/wp-content/uploads/2014/06/Arc-De-Triomphe.jpg",
      temperatur:new Temperatur("Et harum quidem 3",33,44),
      teddy:new Teddy("Nam libero voluptatem 3","images/b1.jpg",3000,300)
    })];
    this.currentRegion = this.regions[0];
    this.currentWidgetType = "";
  }

  setCurrentRegion(region){
    this.currentRegion = region;
  }

  setCurrentWidgetType(type) {
    this.currentWidgetType = type;
  }
}
