import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// Services
import { VideosService } from "../../shared/services/videos.service";

// Models
import { Video } from "../../shared/classes/video";

@Component({
  moduleId: module.id,
  selector: 'app-videos',
  templateUrl: 'videos.component.html',
  styleUrls: ['videos.component.scss']
})
export class VideosComponent implements OnInit {

  private videos: Video[];

  constructor(private videosService: VideosService) {}

  ngOnInit() {
    this.videos = this.videosService.getVideos();
  }

}
