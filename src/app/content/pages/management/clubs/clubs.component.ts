import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../../core/service/http/rest.service';

@Component({
  selector: 'm-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})

export class ClubsComponent implements OnInit {

  private clubs: string[];
  private errorMessage: any;

  constructor(private rest: RestService) { }


  ngOnInit() {
  }

  getClubList() {
    this.rest.getClubList()
      .subscribe(f => {
        this.clubs = f;
      },
        error => this.errorMessage = <any>error);
  }
}

