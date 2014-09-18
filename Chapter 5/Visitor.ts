module Westeros.Army{

	export interface IMemberOfArmy{
		visit(visitor: IVisitor);
		printName();
		_type: string;
	}

	export class Knight implements IMemberOfArmy{
		_type = "Westeros.Army.Knight";
		printName()
		{
			console.log("Knight");
		}
		visit(visitor:IVisitor)
		{
			visitor.visit(this);
		}
	}
	export class FootSoldier implements IMemberOfArmy{
		_type = "Westeros.Army.FootSoldier";
		printName()
		{
			console.log("FootSoldier");
		}
		visit(visitor:IVisitor)
		{
			visitor.visit(this);
		}
	}
	export class Archer implements IMemberOfArmy{
		_type = "Westeros.Army.Archer";
		printName()
		{
			console.log("Archer");
		}
		visit(visitor:IVisitor)
		{
			visitor.visit(this);
		}
	}
	export class Lord implements IMemberOfArmy{
		_type = "Westeros.Army.Lord";
		printName()
		{
			console.log("Lord");
		}
		visit(visitor:IVisitor)
		{
			visitor.visit(this);
		}
	}

	export class IfExample{
		Execute()
		{
			var collection = [];
			collection.push(new Knight());
			collection.push(new FootSoldier());
			collection.push(new Lord());
			collection.push(new Archer());

			for(var i = 0; i< collection.length; i++)
			{
				if(collection[i]._type == 'Westeros.Army.Knight')
					collection[i].printName();
				else 
					console.log("No match");
			}
		}
	}

	export interface IVisitor{
		visit(memberOfArmy: IMemberOfArmy);
	}

	export class VisitorExample{
		Execute(){
			var collection = [];
			collection.push(new Knight());
			collection.push(new FootSoldier());
			collection.push(new Lord());
			collection.push(new Archer());
			var visitor = new SelectiveNamePrinterVisitor();
			for(var i = 0; i< collection.length; i++)
			{
				collection[i].visit(visitor);
			}
		}
	}

	class SelectiveNamePrinterVisitor implements IVisitor{
		public visit(memberOfArmy: IMemberOfArmy)
		{
			if(memberOfArmy._type == "Westeros.Army.Knight")
			{
				this.VisitKnight(memberOfArmy);
			}
			else{
				console.log("Not a knight");
			}
		}

		VisitKnight(memberOfArmy: IMemberOfArmy)
		{
			memberOfArmy.printName();
		}
	}
}

var b = new Westeros.Army.VisitorExample();
b.Execute();
