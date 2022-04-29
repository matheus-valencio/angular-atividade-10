import { Component, OnInit } from '@angular/core';
import { MatheusDisciplinasService } from '../matheus-disciplinas.service';

@Component({
  selector: 'app-matheus-lista',
  templateUrl: './matheus-lista.component.html',
  styleUrls: ['./matheus-lista.component.css'],
})
export class MatheusListaComponent implements OnInit {
  constructor(public disciplinas: MatheusDisciplinasService) {}

  ngOnInit() {}
}
