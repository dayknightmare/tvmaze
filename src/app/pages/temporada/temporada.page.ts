import { Component, OnInit } from '@angular/core';
import { TvService } from "../../providers/tv.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-temporada',
  templateUrl: './temporada.page.html',
  styleUrls: ['./temporada.page.scss'],
})
export class TemporadaPage implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private tv: TvService
  ) { }
  
  public id = null;
  public temporadas:any = [];

  ngOnInit() {

    this.id = this.router.snapshot.paramMap.get("id");

    this.tv.getSession(this.id)
      .subscribe((res) => {
        
        this.temporadas = res;
        
      });

  }

}
