import { Component, OnInit } from '@angular/core';
import { TvService } from "../../providers/tv.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.page.html',
  styleUrls: ['./episodios.page.scss'],
})
export class EpisodiosPage implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private tv: TvService
  ) { }

  public id = null;
  public episodios:any = [];

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');

    this.tv.getEpisodes(this.id)
      .subscribe((res) => {
        this.episodios = res;
      });
  }

}
