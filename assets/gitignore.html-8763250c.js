import{_ as e,p as a,q as i,a1 as n}from"./framework-efe98465.js";const s={},d=n(`<h1 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件" aria-hidden="true">#</a> 忽略文件</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>根目录创建 <span class="token punctuation">.</span>gitignore 文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>忽略规则</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 注释
*.a       # 忽略所有以.a为扩展名的文件    
!lib.a    # 但是名为lib.a的文件或目录不要忽略，即使前面设置了对*.a的忽略
/TODO     # 只忽略此目录下的TODO文件，子目录中的TODO文件不忽略
build/    # 忽略所有build目录下的文件，但如果是名为build的文件则不忽略
doc/*.txt # 忽略文件如doc/notes.txt，但是文件如doc/server/arch.txt不忽略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[d];function l(r,c){return a(),i("div",null,t)}const u=e(s,[["render",l],["__file","gitignore.html.vue"]]);export{u as default};
