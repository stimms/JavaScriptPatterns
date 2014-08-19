module Login{
  export class CreateUserv1Message implements IMessage{
      constructor(public UserName: string, public FirstName: string, public LastName: string, public EMail: string){
        this.__messageName = "CreateUserv1Message";
      }
      __messageName: string
  }

  export class CreateUserv2Message implements IMessage{
    __messageName: string;
    UserTitle: string;
  }

  export class CreateUserv1tov2Upgrader{
    constructor(public bus: IBus){}
    public processMessage(message: CreateUserv2Message){
      message.__messageName = "CreateUserv1Message";
      delete message.UserTitle;
      this.bus.publish(message);
    }
  }

  export interface IBus{
    publish(IMessage);
  }
  export interface IMessage{
    __messageName: string;
  }
}
