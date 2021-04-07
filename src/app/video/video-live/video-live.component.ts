import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Video } from '../video';
import { VideoGroup } from '../video-group';

@Component({
  selector: 'app-video-live',
  templateUrl: './video-live.component.html',
  styleUrls: ['./video-live.component.scss'],
})
export class VideoLiveComponent implements OnInit {
  videoForm: FormGroup;

  videos: Video[];

  // @ViewChildren('videoPlayer')
  // public videoPlayers: any;

  get videoGroups(): FormArray {
    return this.videoForm.controls.videoGroups as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.videoForm = this.fb.group({
      videoGroups: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addVideoGroup();
  }

  addVideoGroup() {
    let newGroup = this.fb.group(this.createVideoGroup());
    this.videoGroups.push(newGroup);
  }

  createVideoGroup() {
    return {
      index: this.videoGroups.length,
      name: 'Group ' + (+this.videoGroups.length + 1),
    };
  }
}
