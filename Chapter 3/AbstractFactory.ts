module Westeros.Ruling
{
  export interface IKing
  {
    makeDecision();
    marry();
  }

  export interface IHandOfTheKing
  {
    makeDecision();
  }

  export interface IRulingFamilyAbstractFactory{
    getKing():IKing;
    getHandOfTheKing():IHandOfTheKing;
  }
}

module Westeros.Ruling.Lannister
{
  export class KingJoffery implements Westeros.Ruling.IKing{
    makeDecision(){}
    marry(){}
  }

  export class LordTywin implements Westeros.Ruling.IHandOfTheKing{
    makeDecision(){}
  }

  export class LannisterFactory implements Westeros.Ruling.IRulingFamilyAbstractFactory{
    getKing():IKing{
      return new KingJoffery();
    }
    getHandOfTheKing():IHandOfTheKing{
      return new LordTywin();
    }
  }
}

module Westeros.Ruling.Targaryen
{
  export class KingAerys implements Westeros.Ruling.IKing{
    makeDecision(){}
    marry(){}
  }

  export class LordConnington implements Westeros.Ruling.IHandOfTheKing{
    makeDecision(){}
  }

  export class TargaryenFactory implements Westeros.Ruling.IRulingFamilyAbstractFactory{
    getKing():IKing{
      return new KingAerys();
    }
    getHandOfTheKing():IHandOfTheKing{
      return new LordConnington();
    }
  }

}
