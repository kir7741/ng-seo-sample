import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

/**
 * ref url:[https://stackoverflow.com/questions/43490265/routereusestrategy-in-child-module]
 *
 * @export
 * @class ReuseStrategy
 * @implements {RouteReuseStrategy}
 */
export class ReuseStrategy implements RouteReuseStrategy {

  /**
   * 頁面 key 值的儲存堆疊
   *
   * @static
   * @type {string[]}
   * @memberof ReuseStrategy
   */
  static pageStack: string[] = [];

  /**
   * 儲存路由資料的物件
   *
   * @static
   * @type {{ [key: string]: DetachedRouteHandle }}
   * @memberof ReuseStrategy
   */
  static handlers: { [key: string]: DetachedRouteHandle } = {};

  /**
   * 路由是否存取資料
   *
   * @static
   * @memberof ReuseStrategy
   */
  static shouldDetachRoute = false;

  /**
   * 路由是否拿取資料
   *
   * @static
   * @memberof ReuseStrategy
   */
  static shouldAttachRoute = false;

  constructor() {
  }

  /**
   * 移除路由儲存的資料
   *
   * @static
   * @memberof ReuseStrategy
   */
  static deleteStoreData(): void {
    ReuseStrategy.handlers = {};
    ReuseStrategy.pageStack = [];
    ReuseStrategy.shouldDetachRoute = false;
    ReuseStrategy.shouldAttachRoute = false;
  }

  /**
   * 判斷是否使用覆用策略
   *
   * @param {ActivatedRouteSnapshot} future
   * @param {ActivatedRouteSnapshot} current
   * @returns {boolean}
   * @memberof ReuseStrategy
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    console.log(future);
    console.log(current);
    return !!future.data.shouldReuse;
  }

  /**
   * 判斷離開頁面時是否儲存資料，回傳 true 時，觸發 store 函式
   *
   * @param {ActivatedRouteSnapshot} route - 當前路由
   * @returns {boolean}
   * @memberof ReuseStrategy
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !!route.data.shouldReuse && ReuseStrategy.shouldDetachRoute;
  }

  /**
   * 當路由離開時，會觸發此方法
   *
   * @param {ActivatedRouteSnapshot} route - 當前路由
   * @param {DetachedRouteHandle} handle - 路由的暫存資料
   * @memberof ReuseStrategy
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {

    // 將目前路由內容暫存起來
    if (route.data.shouldReuse && handle) {

      ReuseStrategy.pageStack.push(route.data.key);

      const key = ReuseStrategy.pageStack.lastIndexOf(route.data.key);

      if (key > -1) {
        ReuseStrategy.handlers[key] = handle;
      }

    }

  }

  /**
   * 當路由進入時，可判斷是否還原路由的暫存內容
   *
   * @param {ActivatedRouteSnapshot} route - 當前路由
   * @returns {boolean}
   * @memberof ReuseStrategy
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {

    if (route.data.shouldReuse && ReuseStrategy.shouldAttachRoute) {
      const key = ReuseStrategy.pageStack.lastIndexOf(route.data.key);
      return key > -1;
    } else {
      return false;
    }

  }

  /**
   * 從路由的記憶體中取得對應的暫存內容
   *
   * @param {ActivatedRouteSnapshot} route - 當前路由
   * @returns {DetachedRouteHandle}
   * @memberof ReuseStrategy
   */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {

    if (
      route.data.shouldReuse &&
      ReuseStrategy.shouldAttachRoute
    ) {
      const key = ReuseStrategy.pageStack.lastIndexOf(route.data.key);
      const routeHandle = ReuseStrategy.handlers[key];

      if (routeHandle) {
        ReuseStrategy.pageStack.pop();
        delete ReuseStrategy.handlers[key];
      }

      return key > -1 ? ReuseStrategy.handlers[key] : null;

    }

    return null;

  }

}
