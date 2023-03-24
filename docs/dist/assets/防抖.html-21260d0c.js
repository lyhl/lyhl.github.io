import{_ as n,p as s,q as a,a1 as p}from"./framework-efe98465.js";const t={},e=p(`<h1 id="防抖函数" tabindex="-1"><a class="header-anchor" href="#防抖函数" aria-hidden="true">#</a> 防抖函数</h1><p>只在最后一次调用之后过了一段时间再执行，而不是每次事件触发都会立即执行。</p><h3 id="封装函数" tabindex="-1"><a class="header-anchor" href="#封装函数" aria-hidden="true">#</a> 封装函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 函数接受两个参数 
 * <span class="token keyword">@param</span> <span class="token parameter">func</span>  需要执行的函数
 * <span class="token keyword">@param</span> <span class="token parameter">delay</span> 等待的时间
 * immediate 是否需要先执行一次
 * <span class="token keyword">@returns</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> immediate <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timerId<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> callNow <span class="token operator">=</span> immediate <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>timerId<span class="token punctuation">;</span>

    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      timerId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//ts</span>
<span class="token keyword">function</span> debounce<span class="token operator">&lt;</span><span class="token constant">F</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">func</span><span class="token operator">:</span> <span class="token constant">F</span><span class="token punctuation">,</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  immediate <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> Parameters<span class="token operator">&lt;</span><span class="token constant">F</span><span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token literal-property property">timerId</span><span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> setTimeout<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">this</span><span class="token operator">:</span> unknown<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> Parameters<span class="token operator">&lt;</span><span class="token constant">F</span><span class="token operator">&gt;</span></span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> callNow <span class="token operator">=</span> immediate <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>timerId<span class="token punctuation">;</span>

    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerId<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      timerId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","防抖.html.vue"]]);export{r as default};
