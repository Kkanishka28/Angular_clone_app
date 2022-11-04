import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // parent to child
  userDetails=[
    {name:'kanis',email:'kanis@test.com'},
    {name:'Peter',email:'peter@test.com'},
    {name:'sam',email:'sam@test.com'},
    {name:'ash',email:'ash@test.com'}
  ]
// Todo List
  list:any[]=[]
  addTask(item:string){
    console.log(item)
this.list.push({id:this.list.length,name:item})
console.log(this.list)
  }
  removeTask(id:number){
console.log(id);
this.list=this.list.filter(item=>item.id!==id)
console.log(this.list);

  }
// child to parent
  data=10;
  updateChild(){
    this.data=Math.floor(Math.random()*10)
  }

//  Pipes
heading="pipes heading working "
}

