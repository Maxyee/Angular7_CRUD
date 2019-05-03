import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { VideoComponent } from './videos/video/video.component';
import { VideoListComponent } from './videos/video-list/video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
