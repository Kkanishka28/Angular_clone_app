import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
@ Input() items:{name:String,email:String}={name:'',email:''}
  constructor() { }
  ngOnInit(): void {
  }

}
