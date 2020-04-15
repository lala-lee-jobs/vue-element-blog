import Vue from 'vue';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import MarkdownItTitle from 'markdown-it-title';

Vue.use(mavonEditor);
mavonEditor.markdownIt.use(MarkdownItTitle);
