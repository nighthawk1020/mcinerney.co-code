import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SongSearchType } from './song-search-type';
import { EventEmitter } from 'events';


@Component(
  {
    selector: 'mcinerney-dev-song-search',
    templateUrl: 'song-search.html'
  }
)
export class SongSearchComponent implements OnInit {
  @Input()
  options: SongSearchType;

  @Output()
  inputChanges = new EventEmitter();

  myControl = new FormControl();

  ngOnInit() {
    this.myControl.valueChanges.subscribe((value: string) => {
      this.inputChanges.emit(value);
    })
  }
}