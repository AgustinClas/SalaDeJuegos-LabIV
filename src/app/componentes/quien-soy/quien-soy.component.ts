import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  img1:string = "../assets/img/gallery/img-1.jpg";
  img2:string = "../assets/img/about/about-1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
