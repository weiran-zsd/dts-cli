(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{2568:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return p},meta:function(){return s}});var o=e(6864),r=e(4730),i=(e(7294),e(3905)),a=["components"],s={name:"Customization",tableOfContents:{depth:0,children:[{depth:1,slug:"#customization",title:"Customization",children:[{depth:2,slug:"#rollup",title:"Rollup",children:[{depth:3,slug:"#example-adding-postcss",title:"Example: Adding Postcss"}]},{depth:2,slug:"#babel",title:"Babel"},{depth:2,slug:"#jest",title:"Jest"},{depth:2,slug:"#eslint",title:"ESLint"}]}]}},l={meta:s};function p(n){var t=n.components,e=(0,r.Z)(n,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customization"},"Customization"),(0,i.kt)("h2",{id:"rollup"},"Rollup"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u2757\u26a0\ufe0f\u2757 Warning"),": ",(0,i.kt)("br",null),"\nThese modifications will override the default behavior and configuration of DTS. As such they can invalidate internal guarantees and assumptions. These types of changes can break internal behavior and can be very fragile against updates. Use with discretion!")),(0,i.kt)("p",null,"DTS uses Rollup under the hood. The defaults are solid for most packages (Formik uses the defaults!). However, if you do wish to alter the rollup configuration, you can do so by creating a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"dts.config.js")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"dts.config.ts"),") at the root of your project like so:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"dts.config.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!\n/**\n * @type {import('dts-cli').DtsConfig}\n */\nmodule.exports = {\n  // This function will run for each entry/format/env combination\n  rollup(config, options) {\n    return config; // always return a config.\n  },\n};\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const defineConfig = require('dts-cli').defineConfig;\n\nmodule.exports = defineConfig({\n  // This function will run for each entry/format/env combination\n  rollup: (config, options) => {\n    return config; // always return a config.\n  },\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"dts.config.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { defineConfig } from 'dts-cli';\n\nexport default defineConfig({\n  rollup: (config, options) => {\n    return config; // always return a config.\n  },\n});\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," object contains the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface DtsOptions {\n  // path to file\n  input: string;\n  // Name of package\n  name: string;\n  // JS target\n  target: 'node' | 'browser';\n  // Module format\n  format: 'cjs' | 'umd' | 'esm' | 'system';\n  // Environment\n  env: 'development' | 'production';\n  // Path to tsconfig file\n  tsconfig?: string;\n  // Is error extraction running?\n  extractErrors?: boolean;\n  // Is minifying?\n  minify?: boolean;\n  // Is this the very first rollup config (and thus should one-off metadata be extracted)?\n  writeMeta?: boolean;\n  // Only transpile, do not type check (makes compilation faster)\n  transpileOnly?: boolean;\n}\n")),(0,i.kt)("h3",{id:"example-adding-postcss"},"Example: Adding Postcss"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const postcss = require('rollup-plugin-postcss');\nconst autoprefixer = require('autoprefixer');\nconst cssnano = require('cssnano');\n\nmodule.exports = {\n  rollup(config, options) {\n    config.plugins.push(\n      postcss({\n        plugins: [\n          autoprefixer(),\n          cssnano({\n            preset: 'default',\n          }),\n        ],\n        inject: false,\n        // only write out CSS for the first bundle (avoids pointless extra files):\n        extract: !!options.writeMeta,\n      })\n    );\n    return config;\n  },\n};\n")),(0,i.kt)("h2",{id:"babel"},"Babel"),(0,i.kt)("p",null,"You can add your own ",(0,i.kt)("inlineCode",{parentName:"p"},".babelrc")," to the root of your project and DTS will ",(0,i.kt)("strong",{parentName:"p"},"merge")," it with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/weiran-zsd/dts-cli/blob/master/src/babelPluginTsdx.ts"},"its own Babel transforms")," (which are mostly for optimization), putting any new presets and plugins at the end of its list."),(0,i.kt)("h2",{id:"jest"},"Jest"),(0,i.kt)("p",null,"You can add your own ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.config.js")," to the root of your project and DTS will ",(0,i.kt)("strong",{parentName:"p"},"shallow merge")," it with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/weiran-zsd/dts-cli/blob/master/src/createJestConfig.ts"},"its own Jest config"),"."),(0,i.kt)("h2",{id:"eslint"},"ESLint"),(0,i.kt)("p",null,"You can add your own ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," to the root of your project and DTS will ",(0,i.kt)("strong",{parentName:"p"},"deep merge")," it with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/weiran-zsd/dts-cli/blob/master/src/createEslintConfig.ts"},"its own ESLint config"),"."))}p.isMDXComponent=!0;var u={editThisPagePath:"docs/pages/customization.mdx"};for(var c in u)window[c]=u[c]},203:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customization",function(){return e(2568)}])},6864:function(n,t,e){"use strict";function o(){return o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},o.apply(this,arguments)}e.d(t,{Z:function(){return o}})},4730:function(n,t,e){"use strict";function o(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}e.d(t,{Z:function(){return o}})}},function(n){n.O(0,[774,888,179],(function(){return t=203,n(n.s=t);var t}));var t=n.O();_N_E=t}]);