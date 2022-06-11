import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-video',
  templateUrl: './footer-video.component.html',
  styleUrls: ['./footer-video.component.css']
})
export class FooterVideoComponent implements OnInit {

  constructor() { 

    console.log('FooterVideoComponent cargado');
  }

  ngOnInit(): void {
  }

}
