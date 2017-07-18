import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// Services
import { VideosService } from "../../shared/services/videos.service";

// Models
import { Video } from "../../shared/classes/video";

@Component({
  moduleId: module.id,
  selector: 'app-video',
  templateUrl: 'video.component.html',
  styleUrls: ['video.component.scss']
})
export class VideoComponent implements OnInit {

  private videos: Video[];

  private video: Video;

  constructor(private activatedRoute: ActivatedRoute,
              private videosService: VideosService) {}

  ngOnInit() {
    this.videos = this.videosService.getVideos();

    this.activatedRoute
        .params
        .subscribe((params) => {
          this.videos.forEach((video) => {
            if (video.id === parseInt(params['id'])) {
              this.video = video;
            }
          });
        });
  }

}
