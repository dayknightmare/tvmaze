import { Component } from '@angular/core';
import { TvService } from '../providers/tv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private tv: TvService, private router: Router) { }

  public listaShow: Array<object>;
  public listaCompleta: Array<object>;
  public busca: string = '';

  ionViewDidEnter() {
    this.tv.getShows().subscribe((dados: [{}]) => {
      
      this.listaShow = dados;
      this.listaCompleta = dados;
    });
  }
  filtrar() {
    this.listaShow = this.tv.filtrarItens(this.listaCompleta, this.busca);
  }
}
