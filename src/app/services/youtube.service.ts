import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private url = 'https://www.googleapis.com/youtube/v3/';
  private apikey = 'AIzaSyD3ik9jM7x8H5goBwAvVg4jmcoB6Arm4KI';
  private playlist = 'UUtinbF-Q-fVthA0qrFQTgXQ';
  private nextPageToken = '';

  params = new HttpParams().set('part', 'snippet')
                          .set('maxResults', '10')
                          .set('playlistId', this.playlist)
                          .set('key', this.apikey);

  constructor(public http: HttpClient) { }

  getVideos() {
    const url = `${ this.url }playlistItems`;
    return this.http.get(url, {params: this.params}).pipe( map( (data: any) => {
      this.nextPageToken = data.nextPageToken;

      const videos: any[] = [];
      for (const video of data.items) {
        const snippet = video.snippet;
        videos.push(snippet);
      }

      return videos;
    }));
  }


}
