import { Injectable } from '@angular/core';

// Models
import { Video } from "../classes/video";

@Injectable()
export class VideosService {

  private videos: Video[];

  constructor() {
    this.videos = [
      {
        id: 1,
        name: 'ufc 190',
        thumb: 'assets/images/thumbs/ufc190.jpg',
        status: 'available',
        src: 'http://www.webmediasolutionz.com/projects/internal/fight_pass/public/UPS/89/videos/ufc190.mp4'
      },
      {
        id: 2,
        name: 'ufc 195',
        thumb: 'assets/images/thumbs/ufc195.jpg',
        status: 'available',
        src: 'http://www.webmediasolutionz.com/projects/internal/fight_pass/public/UPS/89/videos/ufc195.mp4'
      },
      {
        id: 3,
        name: 'ufc 199',
        thumb: 'assets/images/thumbs/ufc199.jpg',
        status: 'available',
        src: 'http://www.webmediasolutionz.com/projects/internal/fight_pass/public/UPS/89/videos/ufc199.mp4'
      },
      {
        id: 4,
        name: 'ufc 200',
        thumb: 'assets/images/thumbs/ufc200.jpg',
        status: 'unavailable',
        src: ''
      }
    ]
  }

  public getVideos(): Video[] {
    return this.videos;
  }

}
