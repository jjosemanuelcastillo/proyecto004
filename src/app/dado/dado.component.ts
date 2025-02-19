import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css',
})
export class DadoComponent {
  //puede recibir información desde el componente padre
@Input() valor: number = 1;
  
}
