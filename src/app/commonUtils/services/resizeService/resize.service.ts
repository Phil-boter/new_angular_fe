import {
  Component,
  DoCheck,
  Injectable,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';

@Injectable({
  providedIn: 'root',
})
export class ResizeService implements DoCheck, OnDestroy {
  public refresh: boolean = true;
  public width!: number;
  public height!: number;
  private readonly viewportChange = this.viewportRuler
      .change(200)
      .subscribe(() => this.refresh && this.ngZone.run(() => this.setSize()));

  constructor(
      private readonly viewportRuler: ViewportRuler,
      private readonly ngZone: NgZone
  ) {
      // change happens well, on change. The first load is not a change, so we get the values here too. (You can use `startWith` operator too.)
      this.setSize();
  }

  ngOnInit(): void {}

  // This is just for showing how high performance this solution is.
  ngDoCheck() {
      console.log('viewport change');
  }
  // Never forget to unsubscribe!
  ngOnDestroy() {
      this.viewportChange.unsubscribe();
  }

  private setSize() {
      const { width, height } = this.viewportRuler.getViewportSize();
      this.width = width;
      this.height = height;
  }

  public isMobile(): boolean {
      if (this.width > 1025) {
          return false;
      }
      return true;
  }

  public isLandscape(): boolean {
      if (this.width + 50 > this.height) {
          return true;
      }
      return false;
  }
}
