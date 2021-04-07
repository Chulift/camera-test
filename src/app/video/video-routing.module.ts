import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoLiveComponent } from './video-live/video-live.component';

const routes: Routes = [
  { path: '', component: VideoLiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
