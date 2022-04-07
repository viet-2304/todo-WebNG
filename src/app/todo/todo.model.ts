export class Todo {
  public name: string;
  public status: boolean;
  public isEdit: boolean;
  
  constructor(name: string, status: boolean) {
    this.name = name;
    this.status = status;
    this.isEdit = false;
  }
}
