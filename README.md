## 移动端皮肤使用方式(目前支持九种皮肤、两种主题)
### 移动端皮肤文件路径 ```/src/components/TcCommonView/theme/```

#### 皮肤
1. 默认主题--cyan
2. 天际蓝--skyblue
3. 魅力紫--purple
4. 活力橙--orange
5. 高端灰--gray
6. 法国洋红--magenta
7. 甸子蓝--tsblue
8. 螺甸紫--smpurple
9. 极客蓝--geekBlue

#### 主题
1. 默认--tint
2. 暗黑--diablo

### 使用方式

1. 引入组件并注册。 路径 ```/src/components/TcCommonView/TcCommonView.vue```
2. 在页面的顶层用TcCommonView组件包裹。
  ```
	<template>
		<TcCommonView>
			  /**
			   * 在这里写页面结构
			   */
		</TcCommonView>
	</template>
	
  ```
3. scss中使用使用主题背景色：```background:var(--primary)```

## 国际化使用方式(目前支持三种语言：中文、英文、繁体字)
### 国际化文件路径 ```/src/i18n/lang```
1. 中文--cn.js
2. 英文--en.js
3. 繁体字--tc.js
### 使用方式举例
* 文件包中的"登录"：
1. computed 声明
```
  computed: {
    i18n() {
      return this.$t('user');
    },
  },
```
2. template标签内
```
	<template>
		<TcCommonView>
				{{ i18n.login }}
		</TcCommonView>
	</template>
	
```
3. script内

```
data () {
	return {
		user: this.$t('user')
	}
}
```
