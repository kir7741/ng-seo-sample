import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// RxJs
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReuseStrategySerivce {

  /**
   * 儲存路由的路徑
   *
   * @private
   * @type {object}
   * @memberof ReuseStrategySerivce
   */
  url: string | null = null;

  /**
   * 復用時執行的事件
   *
   * @private
   * @memberof ReuseStrategySerivce
   */
  reuseOnInitEventHandler: null | (() => {}) = null;

  constructor(
    private router: Router
  ) {
    this.regisetrNavigationEnd();
  }

  /**
   * 設定路由復用時執行的事件
   *
   * @param {string} url
   * @param {() => {}} initFunc
   * @memberof ReuseStrategySerivce
   */
  setReuseOnInitEventHandler(url: string, initFunc: () => {}): void {
    this.url = url;
    this.reuseOnInitEventHandler = initFunc;
  }

  /**
   * 註冊導頁結束後的事件
   * (因為路由復用啟用後，無法再執行原Component的OnInit等事件，因此需要註冊在這邊)
   *
   * @private
   * @memberof ReuseStrategySerivce
   */
  private regisetrNavigationEnd(): void {

    this
      .router
      .events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        console.log(event);
        // setTimeout(() => {

          // const path = event.url.split('/');
          // if (
          //   path.length === 3 &&
          //   path[2] === this.url
          // ) {
          //   this.reuseOnInitEventHandler();
          // } else {
          //   if (path.length > 3) {
          //     return;
          //   } else {
          //     ReuseStrategy.deleteStoreData();
          //     this.url = null;
          //     this.reuseOnInitEventHandler  = null;
          //   }
          // }

        // }, 0);
      });

  }

}
