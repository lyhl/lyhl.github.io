#### uniapp scroll-view组件点击居中显示

```js
<template>
  <view v-if="list">
    <scroll-view class="scroll-view" scroll-x scroll-with-animation :scroll-left="scrollLeft">
      <view class="scroll-view-item" v-for="(item, index) in list" :key="item.id" @click="changeTabs(index)">
        <text :class="{ active: index == current }">{{ item.title }}</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      scrollLeft: 0, //当前滚动条位置
      scrollW: 0, //scroll的宽度
      current: 0, // 当前索引
    };
  },
  onLoad() {
    this.getData();
  },
  methods: {
    /**
     * 获取数据
     */
    async getData() {
      const { list } = await this.getList();
      this.list = list;
      //初始化list
      this.$nextTick(() => {
        this.initScrollList();
      });
    },

    /**
     * 模拟数据
     */
    getList() {
      return new Promise((resolve, reject) => {
        let list = [];
        for (let i = 0; i < 10; i++) {
          list.push({
            id: i,
            title: `索引${i}`,
          });
        }
        resolve({ list });
      });
    },

    /**
     * 获取滚动条宽度并设置子项距离左边的宽度
     */
    initScrollList() {
      const query = uni.createSelectorQuery().in(this);
      query
        .select(".scroll-view")
        .boundingClientRect((data) => {
          this.scrollW = data.width;
        })
        .exec();
      query
        .selectAll(".scroll-view-item")
        .boundingClientRect((data) => {
          data.forEach((item, i) => {
            this.list[i].left = item.left;
            this.list[i].width = item.width;
          });
        })
        .exec();
    },

    /**
     * 切换索引
     */
    changeTabs(index) {
      this.current = index;
      this.scrollLeft = this.list[index].left - this.scrollW / 2 + this.list[index].width / 2;
    },
  },
};
</script>

<style>
.scroll-view {
  width: 100vw;
  background-color: #ccc;
  height: 54rpx;
  padding-top: 10rpx;
  white-space: nowrap;
}
.scroll-view-item {
  display: inline-block;
  padding: 0 10px;
  color: #666;
  font-size: 28rpx;
  font-weight: 601;
}
.scroll-view-item .active {
  color: blue;
}
</style>
