import { DefaultTheme } from 'vitepress';
import { jsSidebar } from './js';
import {cssSidebar} from './css'
import {webpackSidebar} from './webapck'
import {vueSidebar} from './vue'
import { netSidebar } from './net';
import { algorithmSidebar } from './algorithm';
import {browserSidebar} from'./browser'
import { htmlSidebar } from './html';
import { canvasSidebar } from './canvas';
export const sidebar: DefaultTheme.Sidebar = {
  ...htmlSidebar,
  ...cssSidebar,
  ...webpackSidebar,
  ...vueSidebar,
  ...netSidebar,
  ...algorithmSidebar,
  ...browserSidebar,
  ...jsSidebar,
  ...canvasSidebar
};
