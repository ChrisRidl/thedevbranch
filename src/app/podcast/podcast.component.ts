import { Component, OnInit, Input } from '@angular/core';
import { Podcast } from './podcast.model';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.sass']
})
export class PodcastComponent implements OnInit {
  @Input() podcast: Podcast;
  constructor() {
   }

  ngOnInit() {
  }

}
