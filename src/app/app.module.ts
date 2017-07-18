import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Routing
import { routing } from './app.routing';

// Services
import { VideosService } from "./shared/services/videos.service";

// Components
import { AppComponent } from './app.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoComponent } from './components/video/video.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [
    VideosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
