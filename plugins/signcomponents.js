// 用来注册一些组件
import Vue from "vue";
// 有install属性的 Vue.component('使用组件名', 路径名)
// 没有的直接 Vue.use(路径名)
import ContentTip from "~/components/ContentTip";
import ColorFont from "~/components/ColorFont";
// 如自写的组件，注册到全局通过Vue.components
Vue.component("ContentTip", ContentTip);
Vue.component("ColorFont", ColorFont);
// 引入Element-ui则需要通过Vue.use()
