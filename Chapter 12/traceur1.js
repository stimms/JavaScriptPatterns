class BaseStructure {
  constructor() {
      console.log("Structure built");
  }
}

class Castle extends BaseStructure {
 constructor(name){
  this.name = name;
  super();
  }
 Build(){
  console.log("Castle built: " + this.name);
 }
}
