import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private videos: any[];

  constructor( public yts: YoutubeService) {
    this.yts.getVideos().subscribe( videos => {
      console.log(videos);
      this.videos = videos;
    });
   }

  ngOnInit() {
  }

}
