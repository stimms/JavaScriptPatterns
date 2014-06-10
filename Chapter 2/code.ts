module Westeros.Structures {
  export class BaseStructure{

}
  export class Castle extends BaseStructure{
   name;
   constructor(name){
    this.name = name;
    super();
    }
   public Build(){
    console.log("Castle built: " + this.name);
   }
  }
}

var cc = new Westeros.Structures.Castle("Winterfell");
cc.Build();
cc.name = "ss";
