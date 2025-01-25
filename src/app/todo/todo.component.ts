import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, NgClass],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  tasks: { title:string, isCompleted: boolean} [] = []
  taskTitle: string = "";

  addTask(taskTitle: string) {
    let task = { title:taskTitle, isCompleted: false}
    this.tasks.push(task);
    console.log(this.tasks)
    this.taskTitle = ""
  }

  deleteTask(index:number) {
    this.tasks.splice(index, 1)

  }

  completeTask(index: number) {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }
}
