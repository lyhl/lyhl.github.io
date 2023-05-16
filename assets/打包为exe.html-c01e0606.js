import{_ as n,p as a,q as s,a1 as e}from"./framework-efe98465.js";const t={},i=e(`<h1 id="打包为exe" tabindex="-1"><a class="header-anchor" href="#打包为exe" aria-hidden="true">#</a> 打包为exe</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 安装依赖</span>
pip install pyinstaller 

<span class="token operator">//</span>打包命令
Pyinstaller <span class="token operator">-</span>F main<span class="token punctuation">.</span>py
Pyinstaller <span class="token operator">-</span>F <span class="token operator">-</span>w main<span class="token punctuation">.</span>py 不带控制台
Pyinstaller <span class="token operator">-</span>F <span class="token operator">-</span>w <span class="token operator">-</span>i xxx<span class="token punctuation">.</span>ico main<span class="token punctuation">.</span>py 自定义图标

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[i];function o(p,c){return a(),s("div",null,l)}const d=n(t,[["render",o],["__file","打包为exe.html.vue"]]);export{d as default};
