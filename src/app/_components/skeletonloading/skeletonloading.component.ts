import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'skeletonloading',
  templateUrl: './skeletonloading.component.html',
  styleUrls: ['./skeletonloading.component.scss']
})
export class SkeletonLoadingComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() config: SkeletonLoadingConfig = new SkeletonLoadingConfig();
  constructor() { }

  ngOnInit() {
  }
}

export class SkeletonLoadingConfig {
  hasBackground: boolean;
  loadingItemHeight: string;
  animatedBackgroundHeight: string;
  template: string;
  constructor(hasBackground: boolean = false, template: string = null,loadingItemHeight: string = null, animatedBackgroundHeight: string = null) {
    this.hasBackground = hasBackground;
    this.template = template;
    this.loadingItemHeight = loadingItemHeight;
    this.animatedBackgroundHeight = animatedBackgroundHeight;
  }
}
