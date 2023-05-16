import{_ as n,p as s,q as a,a1 as e}from"./framework-efe98465.js";const t={},c=e(`<h1 id="scss" tabindex="-1"><a class="header-anchor" href="#scss" aria-hidden="true">#</a> scss</h1><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$gc</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$fs</span></span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>

<span class="token selector">button </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$gc</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$fs</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混入" tabindex="-1"><a class="header-anchor" href="#混入" aria-hidden="true">#</a> 混入</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">br</span><span class="token punctuation">(</span>$<span class="token property">radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> $radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@include</span> <span class="token function">br</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>

<span class="token selector">.button--large</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@include</span> <span class="token function">br</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.error</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.input-error</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@extend</span> .error<span class="token punctuation">;</span></span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[c];function i(l,o){return s(),a("div",null,p)}const r=n(t,[["render",i],["__file","scss.html.vue"]]);export{r as default};
