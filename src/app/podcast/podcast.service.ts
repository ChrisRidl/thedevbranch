import { Injectable } from '@angular/core';
import { Podcast } from './podcast.model';

@Injectable()
export class PodcastService {

  private heroes: Podcast[] = [
      { id: 0, name: 'Hello world', img: 'test', date: '01/01/2018', description: `I don't know`},
      { id: 1, name: 'Goodbye World', img: 'test', date: '01/01/2018', description: `I don't know`},
      { id: 2, name: 'Sayonara', img: 'test', date: '01/01/2018', description: `I don't know`},
      { id: 3, name: 'Adios!', img: 'test', date: '01/01/2018', description: `I don't know`}
    ];

      constructor() { }

  getPodcasts(): Podcast[] {
    return this.heroes;
  }
}
