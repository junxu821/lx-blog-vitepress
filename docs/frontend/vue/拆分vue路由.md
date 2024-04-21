# 拆分vue路由
# 1.webpack构建的项目：
原理利用webpack批量导入函数require.context()

约定以.routes.js结尾的是每个模块的路由

```javascript
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const files = require.context('./', false, /\.routes.js$/)
// 把每个模块的默认暴露取出来
const constantRoutes = files.keys().map((key) => files(key).default)
const createRouter = () => new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
```
### 2.vite构建的项目
那么在vue3+vite+ts中，如何找到对应的方法呢？就可以使用 import.meta.globEage或者 import.meta.glob方法了。

import.meta.glob 为动态导入，构建时，会分离为独立的 chunk;而import.meta.globEager为直接引入。

```typescript
const utilFuns: any = {};
const files = import.meta.globEager('./*.ts');
Object.keys(files).forEach((fileName) => {
    const name = fileName.replace(/\.\/|\.ts/g, '');
    utilFuns[name] = files[fileName].default;
});
export default utilFuns;

```
```typescript
import { createRouter, createWebHashHistory,RouteRecordRaw } from "vue-router";
//createWebHistory:history路由
import {filesInf} from '../types/routerModel'
const history = createWebHashHistory()
const routes: Array<RouteRecordRaw> = [];
const files:filesInf = import.meta.glob('./*.routes.ts',{ eager: true });
Object.keys(files).forEach((fileName) => {
  routes.push(files[fileName].default) ;
});
const router = createRouter({
  history,
  routes
})
export default router
```
```typescript
import {RouteRecordRaw } from "vue-router";
interface routeDefault{
    default:RouteRecordRaw,
    [propName:string]:unknown
  }
 export interface filesInf {
    [propName:string]:routeDefault
  }
```


