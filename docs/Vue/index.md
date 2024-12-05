## Vue常见知识


### 响应式问题

#### 问题描述

在使用`ant-design-vue`中，涉及到表单数据的更改，期望在提交完API请求后，使得表单的selected rowKeys全部清除。
但是使用`reactive` 或者 `ref` 发现其表单绑定的另外一个响应式对象改变时，表单数据并不会同步更新，具体代码demo如下：

``` vue
<script setup>
import { reactive } from 'vue';
import { ref, computed } from 'vue'

const msg = ref('Hello World!')

const extraTable = reactive({
  rows: [],
  keys: [1, 2, 3, '2121']
})


const rowSelection = reactive({
  rowkeys: extraTable.keys,
})

const handleChange = () => {
  // 不生效
  extraTable.keys = []

  // 生效
  // extraTable.keys.length = 0
}

</script>

<template>
  <h1>{{ rowSelection.rowkeys.join(',') }}</h1>

  <button @click="handleChange">点击改变</button>
</template>

```

#### 问题总结

`reactive` 和 `ref` 只会监听对应的`proxy`变化，如果直接赋值`[]`，那么将会改变原有对象的引用，从而无法触发响应式改变。而使用`.length=0`的操作是在原有响应式对象上进行的改动，会触发其值变化。
