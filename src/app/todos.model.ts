import { Todo } from './todo/todo.model';

export class Todos {
  private listTodo: Todo[];

  inItData(): Todo[] {
    const data = JSON.parse(localStorage.getItem('todos')!);
    this.listTodo = data;
    return data;
  }

  addToDo(newTodo: Todo): void {
    this.listTodo.push(newTodo);
    this.saveData();
  }

  updateStatus(index: number): void {
    this.listTodo[index].status = !this.listTodo[index].status;
    this.saveData();
  }

  deleteTodo(index: number): void {
    this.listTodo.splice(index, 1);
    this.saveData();
  }

  private saveData() {
    localStorage.setItem('todos', JSON.stringify(this.listTodo));
  }

  toDoLeft(): number {
    return this.listTodo.filter((todo) => !todo.status).length;
  }

  checkToDoLeft(): boolean {
    return this.listTodo.filter((todo) => todo.status).length > 0;
  }

  checkIfToDo(): boolean {
    return this.listTodo.length > 0;
  }

  clearTodos(): void {
    this.listTodo = this.listTodo.filter((todo) => !todo.status);
    this.saveData();
  }

  getTodosComplete(): Todo[] {
    return this.listTodo.filter((todo) => todo.status);
  }

  getTodosActive(): Todo[] {
    return this.listTodo.filter((todo) => !todo.status);
  }

  getAllTodos(): Todo[] {
    return this.listTodo;
  }

  updateName(): void {
    this.saveData();
  }

  completeAllTodo(): void {
    this.listTodo.forEach((element) => {
      element.status = true;
    });
  }

  activeAllToDo(): void {
    this.listTodo.forEach((element) => {
      element.status = false;
    });
  }
}
