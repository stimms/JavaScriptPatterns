module Westros
{
  export class Wall{

    private static _instance:Wall = null;
    private height:number = 0;
    constructor(){
       if(Wall._instance)
        throw new Error("This is a singleton, use getInstance to get an instance");
      Wall._instance = this;
    }
    public setHeight(height:number){
      this.height=height;
    }

    public getStatus(){
      console.log("Wall is " + this.height + " meters tall");
    }
    public static getInstance():Wall{
      if(!Wall._instance)
      {
        Wall._instance = new Wall();
      }

      return Wall._instance;

    }
  }
}

var wall = Westros.Wall.getInstance();
wall.setHeight(10);
var wall2 = Westros.Wall.getInstance();
wall2.getStatus();
var wall3 = new Westros.Wall();
wall3.getStatus();
