import{_ as t,M as e,p,q as i,R as n,t as s,N as o,a1 as c}from"./framework-efe98465.js";const l={},u=n("h1",{id:"pinia",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pinia","aria-hidden":"true"},"#"),s(" pinia")],-1),r={href:"https://pinia.vuejs.org/zh/getting-started.html",target:"_blank",rel:"noopener noreferrer"},k=c(`<h3 id="持久化存储" tabindex="-1"><a class="header-anchor" href="#持久化存储" aria-hidden="true">#</a> 持久化存储</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//https://seb-l.github.io/pinia-plugin-persist/advanced/custom-key.html</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">import</span> piniaPluginpersistedstate <span class="token keyword">from</span> <span class="token string">&#39;pinia-plugin-persist&#39;</span>

<span class="token comment">//main.ts</span>
<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPluginpersistedstate<span class="token punctuation">)</span>

<span class="token comment">// 因为状态管理使用的是setup的方式构建所以我们重写一个$reset并挂载到pinia中</span>
pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> store <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>$state<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    store<span class="token punctuation">.</span><span class="token function-variable function">$reset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        store<span class="token punctuation">.</span><span class="token function">$patch</span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(v,m){const a=e("ExternalLinkIcon");return p(),i("div",null,[u,n("p",null,[n("a",r,[s("pinia官网"),o(a)])]),k])}const h=t(l,[["render",d],["__file","pania.html.vue"]]);export{h as default};