import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() url;
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  revertImage() {
    this.onChange.emit();
  }

}
