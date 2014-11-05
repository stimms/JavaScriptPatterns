module Westeros.Transportation{

  export class Fleet {
    public ship: Ship[];
    public admiral: Admiral;
    public supplyCoordinator: SupplyCoordinator;

    public setDestination( destination: string){
      //pass commands to a series of ships, admirals and whoever else needs it
    }

    public resupply(){

    }

    public attack(destination: string){
      //attack a city
    }

    //various other actions...
  }

  export class Ship{
    TurnLeft(){}
    TurnRight(){}
    GoForward(){}

  }

  export class Admiral{

  }

  export class SupplyCoordinator{

  }
}

module Azure.Settings{
  export interface SettingSaver{
    Save(settings: Settings);
    Retrieve():Settings;
  }
  export interface Settings{}
}
