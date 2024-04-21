# vue路由守卫
# 全局路由守卫
1. beforeEach

每次进入路由

2. afterEach
3. beforeResolve
**所有组件内守卫和异步路由组件被解析之后执行，**beforeEach beforeEnter之后 ，afterEach之前
等页面的

离开路由

# 页面级
1. beforeEnter
2. afterEnter

# 组件级
1. beforeRouteEnter
2. beforeRouteUpdate
 当同一源地址，但是携带不同的路由参数时会触发
3. beforeRouteLeave