import { Component, Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: "todo-component",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent {
  public tasks: any[];

  constructor() {
    this.tasks = [];
  }

  addTask(task: string) {
    if (task === "") return;
    this.tasks.push({
      text: task,
      done: false
    });
  }
  removeTask(task: any) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
  toggle(task: any) {
    task.done = !task.done;
  }
}
