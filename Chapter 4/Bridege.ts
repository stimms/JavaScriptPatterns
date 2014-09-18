module Westeros.Religion
{
  export class OldGods{
      prayTo(sacrifice){}
  }

  export class DrownedGod{
    prayTo(humanSacrifice){}
  }

 export class SevenGods{
    prayTo(prayerPurpose){}
  }

  export interface God
  {
    prayTo():void;
  }

  export class OldGodsAdapter implements God{
    _oldGods:OldGods;
    constructor(){
      this._oldGods = new OldGods();
    }
    prayTo(){
      var sacrifice= new Sacrifice();
      this._oldGods.prayTo(sacrifice);
    }
  }

  export class DrownedGodAdapter implements God{
    _drownedGod;
    constructor(){
      this._drownedGod = new DrownedGod();
    }
    prayTo(){
      var sacrifice = new HumanSacrifice();
      this._drownedGod.prayTo(sacrifice);
    }
  }

  export class SevenGodsAdapter implements God{
    _sevenGods;
    public prayerPurposeProvider = new PrayerPurposeProvider();
    constructor(){
      this._sevenGods = new SevenGods();
    }
    prayTo(){
      this._sevenGods.prayTo(this.prayerPurposeProvider.GetPurpose());
    }

  }

  export class PrayerPurposeProvider{
    GetPurpose(){}
    }
  export class Sacrifice{}
export class HumanSacrifice{}

}
