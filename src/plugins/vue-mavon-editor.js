import Vue from 'vue';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import MarkdownItTitle from 'markdown-it-title';

function markdownItTags(md, level = 6) {
  const originalHeadingOpen = md.renderer.rules.heading_open;
  const mdit = md;
  mdit.renderer.rules.heading_open = (...args) => {
    const [tokens, idx, , env, self] = args;

    if (!env.tags && (level < 6 || tokens[idx].tag === `h${level}`)) {
      env.tags = tokens[idx + 1].children
        .filter((t) => ['code_inline'].includes(t.type))
        .map((item) => item.content);
    }

    // Execute original rule.
    if (originalHeadingOpen) {
      return originalHeadingOpen.apply(this, args);
    }
    return self.renderToken(...args);
  };
}

Vue.use(mavonEditor);
mavonEditor.markdownIt.use(MarkdownItTitle);
mavonEditor.markdownIt.use(markdownItTags);
