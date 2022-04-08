import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezervuaro-skaiciuokle',
  templateUrl: './rezervuaro-skaiciuokle.component.html',
  styleUrls: ['./rezervuaro-skaiciuokle.component.css']
})
export class RezervuaroSkaiciuokleComponent implements OnInit {

  public rezervuaras?:number;
  public pildymoGreitis?:number;
  public pildymoLaikas?:number; 
  public rezervuaroUzpildymas:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuoti(){
    if(this.rezervuaras != null && this.pildymoGreitis != null && this.pildymoLaikas != null) {
    this.rezervuaroUzpildymas = Math.round((this.pildymoGreitis * this.pildymoLaikas) * 100 / this.rezervuaras);
  }}

}


100
10
3