import { Component } from '@angular/core';
@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {
  mouseDelta: number = 0;
  mouseDownPosition: number | null = null;
   maxDelta = window.innerWidth / 2;
  constructor() { }
  onMouseDown(event: MouseEvent | TouchEvent) {
    if ('clientX' in event) {
      this.mouseDownPosition = (event as MouseEvent).clientX;
    } else {
      this.mouseDownPosition = (event as TouchEvent).touches[0].clientX;
    }
    console.log('Mouse down at:', this.mouseDownPosition);
  }
  onMouseMove(event: MouseEvent | TouchEvent) {
    if (this.mouseDownPosition !== null) {
      const clientX = ('clientX' in event) ? (event as MouseEvent).clientX : (event as TouchEvent).touches[0].clientX;
      this.mouseDelta = this.mouseDownPosition - clientX;
      const percentage = (this.mouseDelta / this.maxDelta) * 100;
      console.log('Mouse moved to:', this.mouseDelta);
      const track = document.getElementById("image-track");
      if (!track) return;
      if (!track.dataset) return;
      const nextPercentageUnconstrained = parseFloat(track.dataset['prevPercentage'] || "0") + (this.mouseDelta / this.maxDelta) * -100;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
      track.style.transform = `translateX(${nextPercentage}%)`;
      track.dataset['percentage'] = nextPercentage.toString();
      const images = Array.from(track.getElementsByClassName("image")) as HTMLElement[];
      for (const image of images) {
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      }
    }
  }
  onMouseUp() {
    this.mouseDelta = 0;
    this.mouseDownPosition = null;
  }
}












