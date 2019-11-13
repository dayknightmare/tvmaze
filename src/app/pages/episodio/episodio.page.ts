import { Component, OnInit } from '@angular/core';
import { TvService } from "../../providers/tv.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.page.html',
  styleUrls: ['./episodio.page.scss'],
})
export class EpisodioPage implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private tv: TvService
  ) { }

  public id = null;
  public data:any = [];

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');

    this.tv.getEpisode(this.id)
      .subscribe((res) => {
        this.data = res;    
      });
  }

}
