import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatheusDisciplinasService } from '../matheus-disciplinas.service';

@Component({
  selector: 'app-matheus-detalhes',
  templateUrl: './matheus-detalhes.component.html',
  styleUrls: ['./matheus-detalhes.component.css'],
})
export class MatheusDetalhesComponent implements OnInit {
  item;
  constructor(
    public disciplinas: MatheusDisciplinasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.item = this.disciplinas.getLista()[params.get('index')];
    });
  }
}
