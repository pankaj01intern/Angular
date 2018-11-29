import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {


  img:boolean=true;

  Images=[

{
  id: 'I001',
  path:'../assets/pic1.png',
},
{
id: 'I002',
  path:'../assets/pic2.png',
},

{
id: 'I003',
  path:'../assets/pic3.png',
},


{
  id: 'I004',
  path:'../assets/pic1.png',
}
  ]

}