import{_ as n,p as s,q as a,a1 as e}from"./framework-efe98465.js";const i={},l=e(`<h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1><h3 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//查看您本地仓库中的所有分支</span>
git branch

<span class="token comment">//查看本地和远端</span>
git branch <span class="token operator">-</span>a

<span class="token comment">//切换分支</span>
git checkout <span class="token operator">&lt;</span>branch<span class="token operator">-</span>name<span class="token operator">&gt;</span>

<span class="token comment">//创建并切换分支</span>
git checkout <span class="token operator">-</span>b <span class="token keyword">new</span><span class="token operator">-</span>branch

<span class="token comment">//合并分支 首先切换到目标分支再进行合并</span>
git checkout master
git merge feature<span class="token operator">-</span>branch

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标准提交流程" tabindex="-1"><a class="header-anchor" href="#标准提交流程" aria-hidden="true">#</a> 标准提交流程</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//克隆项目</span>
git clone 项目地址
<span class="token comment">//初始化项目</span>
git init 

<span class="token comment">//将新增的文件进行跟踪</span>
git add <span class="token punctuation">.</span>

<span class="token comment">// 输入提交的内容系信息</span>
git commit  <span class="token operator">-</span>m<span class="token string">&quot;提交信息&quot;</span>

<span class="token comment">//获取最新提交</span>
git pull

<span class="token comment">//推送到远端</span>
git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="贮藏" tabindex="-1"><a class="header-anchor" href="#贮藏" aria-hidden="true">#</a> 贮藏</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//添加到贮藏区</span>
git stash save <span class="token string">&quot;message&quot;</span>

<span class="token comment">//贮藏列表</span>
git stash list

<span class="token comment">//应用最新贮藏</span>
git stash apply
git stash pop <span class="token comment">//应用并删除</span>

<span class="token comment">//应用第几个</span>
git stash apply stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除git仓库" tabindex="-1"><a class="header-anchor" href="#删除git仓库" aria-hidden="true">#</a> 删除git仓库</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>ls <span class="token operator">-</span>a
rm <span class="token operator">-</span>rf <span class="token punctuation">.</span>git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[l];function c(t,r){return s(),a("div",null,d)}const o=n(i,[["render",c],["__file","常用命令.html.vue"]]);export{o as default};
