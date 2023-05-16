import{_ as n,p as s,q as a,a1 as p}from"./framework-efe98465.js";const t={},o=p(`<h1 id="vue倒计时精确到毫秒" tabindex="-1"><a class="header-anchor" href="#vue倒计时精确到毫秒" aria-hidden="true">#</a> vue倒计时精确到毫秒</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">remainTime</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">timeData</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>remainTime <span class="token operator">=</span> <span class="token number">9999999999999</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">countTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">countTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//毫秒数或使用结束时间减去当前时间得到</span>
      <span class="token keyword">let</span> remainTime <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>remainTime<span class="token punctuation">;</span>
      <span class="token keyword">let</span> h<span class="token punctuation">,</span> m<span class="token punctuation">,</span> s<span class="token punctuation">,</span> d<span class="token punctuation">,</span> ms<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>remainTime <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        d <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>remainTime <span class="token operator">/</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">60</span> <span class="token operator">/</span> <span class="token number">60</span> <span class="token operator">/</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//天</span>
        h <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>remainTime <span class="token operator">/</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">60</span> <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//时</span>
        m <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>remainTime <span class="token operator">/</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//分</span>
        s <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>remainTime <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//秒</span>
        ms <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>remainTime <span class="token operator">%</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//毫秒只保留前一位</span>

        <span class="token comment">//补足两位数</span>
        s <span class="token operator">=</span> s <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> s <span class="token operator">:</span> s<span class="token punctuation">;</span>
        m <span class="token operator">=</span> m <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> m <span class="token operator">:</span> m<span class="token punctuation">;</span>
        h <span class="token operator">=</span> h <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> h <span class="token operator">:</span> h<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//小于0清除定时器重置数据</span>
        h <span class="token operator">=</span> m <span class="token operator">=</span> s <span class="token operator">=</span> d <span class="token operator">=</span> <span class="token string">&quot;00&quot;</span><span class="token punctuation">;</span>
        ms <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>timeData <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">day</span><span class="token operator">:</span> d<span class="token punctuation">,</span>
        <span class="token literal-property property">hours</span><span class="token operator">:</span> h<span class="token punctuation">,</span>
        <span class="token literal-property property">minutes</span><span class="token operator">:</span> m<span class="token punctuation">,</span>
        <span class="token literal-property property">seconds</span><span class="token operator">:</span> s<span class="token punctuation">,</span>
        <span class="token literal-property property">millisecond</span><span class="token operator">:</span> ms<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>remainTime <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>remainTime <span class="token operator">-</span> <span class="token number">30</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","倒计时精确到毫秒.html.vue"]]);export{r as default};
