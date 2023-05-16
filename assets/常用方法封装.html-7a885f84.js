import{_ as n,p as e,q as s,a1 as i}from"./framework-efe98465.js";const a={},l=i(`<h1 id="常用方法封装-vue2" tabindex="-1"><a class="header-anchor" href="#常用方法封装-vue2" aria-hidden="true">#</a> 常用方法封装（vue2）</h1><blockquote><p>消息提示，数据缓存及图片预览</p></blockquote><h5 id="方法封装" tabindex="-1"><a class="header-anchor" href="#方法封装" aria-hidden="true">#</a> 方法封装</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//common/too.js 

//消息提示
 const msg = (str) =&gt; {
  return new Promise((resolve, reject) =&gt; {
    uni.showToast({
      title: str,
      icon: &quot;none&quot;,
      duration: 2000,
      position: &quot;bottom&quot;,
      success: () =&gt; {
        resolve;
      },
    });
  });
};

// 成功提示框
 const successToast = (str) =&gt; {
  return new Promise((resolve, reject) =&gt; {
    uni.showToast({
      title: str,
      icon: &quot;success&quot;,
      duration: 2000,
      success: () =&gt; {
        resolve();
      },
    });
  });
};

// 显示loading 需要配合hideLoading关闭
 const showLoading = (str) =&gt; {
  return new Promise((resolve, reject) =&gt; {
    uni.showLoading({
      title: str,
      success: () =&gt; {
        resolve();
      },
    });
  });
};

// 隐藏loading
 const hideLoading = () =&gt; {
  return new Promise((resolve, reject) =&gt; {
    uni.hideLoading({
      success: () =&gt; {
        resolve();
      },
    });
  });
};

//获取缓存
 const getStorage = (key, sync = true) =&gt; {
  try {
    if (sync) {
      return uni.getStorageSync(key);
    } else {
      let data = &quot;&quot;;
      uni.getStorage({
        key: key,
        success: function (res) {
          data = res.data;
        },
      });
      return data;
    }
  } catch (e) {
    return false;
  }
};

//设置缓存
 const setStorage = (key, value, sync = true) =&gt; {
  try {
    if (sync) {
      return uni.setStorageSync(key, value);
    } else {
      uni.setStorage({
        key: key,
        data: value,
      });
    }
  } catch (e) {}
};

//移除缓存
 const delStorage = (key, sync = true) =&gt; {
  try {
    if (sync) {
      return uni.removeStorageSync(key);
    } else {
      uni.removeStorage({
        key: key,
      });
    }
  } catch (e) {
    return false;
  }
};

//清空缓存
 const clearStorage = (sync = true) =&gt; {
  try {
    if (sync) {
      return uni.clearStorageSync();
    } else {
      uni.clearStorage();
    }
  } catch (e) {
    return false;
  }
};

/**
 * 
 * @param {Arr} imgList 传入图片数组 | 单张图片也要传数组perviewImage([url])
 * @param {Number} index 不传默认从第一张开始显示
 * 
 */
const perviewImage = (imgList, index) =&gt; {
  uni.previewImage({
    current: index,
    urls: imgList,
    indicator: &quot;number&quot;,
    success: function (res) {},
    fail: function (err) {
      console.log(err);
    },
  });
};


export default{
 msg ,
 successToast,
 showLoading,
 hideLoading,
 getStorage,
 setStorage,
 delStorage,
 clearStorage,
 perviewImage
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="挂载全局" tabindex="-1"><a class="header-anchor" href="#挂载全局" aria-hidden="true">#</a> 挂载全局</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//main.js</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>
<span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">&#39;.common/tool&#39;</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>
App<span class="token punctuation">.</span>mpType <span class="token operator">=</span> <span class="token string">&#39;app&#39;</span>

<span class="token comment">//挂载到全局</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$ <span class="token operator">=</span> $<span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>App
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="页面使用" tabindex="-1"><a class="header-anchor" href="#页面使用" aria-hidden="true">#</a> 页面使用</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//this.$.msg(&#39;消息提示&#39;)</span>
<span class="token comment">//this.$.setStorage(&#39;key&#39;,value)</span>
<span class="token comment">//this.$.perviewImage(arr,2)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[l];function v(r,c){return e(),s("div",null,d)}const t=n(a,[["render",v],["__file","常用方法封装.html.vue"]]);export{t as default};
