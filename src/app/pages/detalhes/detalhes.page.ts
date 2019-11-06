import { Component, OnInit } from '@angular/core';
import { TvService } from "../../providers/tv.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private tv: TvService
  ) { }

  public id = null;
  public session = null;
  public qtsession: number;
  public image = null;
  public nome = null;
  public summary = null;
  public dados = null;
  public elencoList: any = [];

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");

    this.tv.getDetalhes(this.id)
      .subscribe((dados:[{}])=>{
        this.dados = dados;
        this.nome = dados['name'];
        this.image = dados['image']['original'];
        this.summary = dados['summary']
      });

    this.tv.getSession(this.id)
      .subscribe((dados:[{}]) => {
        this.session = dados;
        this.qtsession = dados.length;
        console.log(this.session);
        
        this.tv.getElenco(this.id)
          .subscribe((res) => {
            console.log(res);
            this.elencoList = res;
          })
      });
    
  }
}
