<template><div><p>封装组合式函数</p>
<!-- more -->
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//hooks/useGetListData.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onLoad<span class="token punctuation">,</span> onReachBottom<span class="token punctuation">,</span> onPullDownRefresh <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@dcloudio/uni-app'</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">fun</span> //请求方法
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">params</span> 请求参数
 * <span class="token keyword">@returns</span> 
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useGetListData</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> listData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> loadStatus <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> isNoData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  searchParams<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>searchParams<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token operator">...</span>params <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      uni<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 请求列表数据
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">isRefresh</span>
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">isRefresh <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isRefresh<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      listData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      searchParams<span class="token punctuation">.</span>value<span class="token punctuation">.</span>page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      isNoData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isNoData<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    loadStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'loading'</span><span class="token punctuation">;</span>
    <span class="token function">fun</span><span class="token punctuation">(</span>searchParams<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> code<span class="token punctuation">,</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> data<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token number">10000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          listData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>listData<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token operator">...</span>res<span class="token punctuation">.</span>list<span class="token punctuation">]</span><span class="token punctuation">;</span>
          loadStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'over'</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>searchParams<span class="token punctuation">.</span>value<span class="token punctuation">.</span>page <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>list<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            loadStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'firstNoMore'</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>max_page <span class="token operator">===</span> searchParams<span class="token punctuation">.</span>value<span class="token punctuation">.</span>page<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            loadStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'noMore'</span><span class="token punctuation">;</span>
            isNoData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            searchParams<span class="token punctuation">.</span>value<span class="token punctuation">.</span>page<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          listData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          loadStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'noMore'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        listData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        loadStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'over'</span><span class="token punctuation">;</span>  
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * list 列表数据
   * loadStatus 数据加载装填 loading 加载中 over 请求加载中  firstNoMore没有数据  noMore 没有更多数据
   * getList 请求列表函数
   * 
   */</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">list</span><span class="token operator">:</span> listData<span class="token punctuation">,</span> loadStatus<span class="token punctuation">,</span> getList <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useGetListData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/hooks/useGetListData.js'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getListData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/index'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//默认onLoad  onPullDownRefresh onReachBottom会自动进行处理数据</span>
<span class="token comment">//第一个参数为请求数据的函数</span>
<span class="token comment">//传入的第二个参数必须是对象形式，如需动态参数值必须是响应式的数据</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> list<span class="token punctuation">,</span> loadStatus<span class="token punctuation">,</span> getList <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useGetListData</span><span class="token punctuation">(</span>getListData<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span>name<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//在需要手动处理的时候只需要调用getList()</span>
<span class="token keyword">const</span> <span class="token function-variable function">changeTabs</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//修改请求参数后</span>
  <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


