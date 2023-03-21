<template><div><h5 id="uniapp阻止页面默认返回" tabindex="-1"><a class="header-anchor" href="#uniapp阻止页面默认返回" aria-hidden="true">#</a> uniapp阻止页面默认返回</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">onBackPress</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//获取上个页面的实例</span>
    <span class="token keyword">let</span> pages <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">let</span> prevPage <span class="token operator">=</span> pages<span class="token punctuation">[</span>pages<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//调用上一个页面的方法或者改变值</span>
    prevPage<span class="token punctuation">.</span>$vm<span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>from <span class="token operator">===</span> <span class="token string">"navigateBack"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">goback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>   
      <span class="token function">goback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
          <span class="token comment">//返回上一页</span>
           uni<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  
               <span class="token literal-property property">delta</span><span class="token operator">:</span> <span class="token number">1</span>  
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>   
      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


