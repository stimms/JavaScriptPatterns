module Westros.Ruling
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

module Westros.Ruling.Lannister
{
  export class KingJoffery implements Westros.Ruling.IKing{
    makeDecision(){}
    marry(){}
  }

  export class LordTywin implements Westros.Ruling.IHandOfTheKing{
    makeDecision(){}
  }

  export class LannisterFactory implements Westros.Ruling.IRulingFamilyAbstractFactory{
    getKing():IKing{
      return new KingJoffery();
    }
    getHandOfTheKing():IHandOfTheKing{
      return new LordTywin();
    }
  }
}

module Westros.Ruling.Targaryen
{
  export class KingAerys implements Westros.Ruling.IKing{
    makeDecision(){}
    marry(){}
  }

  export class LordConnington implements Westros.Ruling.IHandOfTheKing{
    makeDecision(){}
  }

  export class TargaryenFactory implements Westros.Ruling.IRulingFamilyAbstractFactory{
    getKing():IKing{
      return new KingAerys();
    }
    getHandOfTheKing():IHandOfTheKing{
      return new LordConnington();
    }
  }

}
