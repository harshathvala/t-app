import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes =[
      { id:11, name: 'goku'},
      { id:12, name: 'saitama'},
      { id:13, name: 'ciel'},
      { id:14, name: 'zoro'},
      { id:15, name: 'kanekie'},
      { id:16, name: 'izzo'},
      { id:17, name: 'spider-man'},
      { id:18, name: 'frieghtfull-four'},
      { id:19, name: 'genos'},
      { id:20, name: 'mysterio'}
    ];
    return { heroes };
  }
  genId( heroes: Hero[]): number{
    return heroes.length > 0 ?
    Math.max(...heroes.map(hero => hero.id)) + 1:11;
  }
}
