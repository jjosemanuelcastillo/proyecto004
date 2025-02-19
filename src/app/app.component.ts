import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto004';
  valor1!:number;
  valor2!:number;
  valor3!:number;
  resultado!:string;
  lanzarDado(){
  this.valor1 = this.generarAleatorio();
  this.valor2 = this.generarAleatorio();
  this.valor3 = this.generarAleatorio();
  }
  comprobarResultadoJuego(){
    if((this.valor1 == this.valor2)&&(this.valor1 == this.valor3)&&(this.valor2 == this.valor3)){
      this.resultado = "Ganaste";
    }else{
      this.resultado = "Perdiste"; 
    }
    return this.resultado;
  }
  generarAleatorio(){
    return Math.floor(Math.random() * 6) + 1;
  }
}
