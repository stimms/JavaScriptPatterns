module Westros.Food{
  export interface IIngredient{
    GetName(): string;
    GetCalories():number;
    GetIronContent():number;
    GetVitaminCContent():number;
  }

  export class SimpleIngredient{

    constructor(public name, public calories, public ironContent, public vitaminCContent){}
    GetName(): string
    {
      return this.name;
    }
    GetCalories():number{
      return this.calories;
    }
    GetIronContent():number{
      return this.ironContent;
    }
    GetVitaminCContent():number
    {
      return this.vitaminCContent;
    }
  }

  export class CompoundIngredient{

    ingredients:IIngredient[] = new Array();
    constructor(public name){

    }

    AddIngredient(ingredient:IIngredient)
    {
      this.ingredients.push(ingredient);
    }

    GetName(): string{
      return this.name;
    }
    GetCalories():number{
      var total = 0;
      for(var i = 0; i< this.ingredients.length; i++)
      {
        total+=this.ingredients[i].GetCalories();
      }
      return total;
    }
    GetIronContent():number{
      var total = 0;
      for(var i = 0; i< this.ingredients.length; i++)
      {
        total+=this.ingredients[i].GetIronContent();
      }
      return total;
    }
    GetVitaminCContent():number{
      var total = 0;
      for(var i = 0; i< this.ingredients.length; i++)
      {
        total+=this.ingredients[i].GetVitaminCContent();
      }
      return total;
    }
  }


}
