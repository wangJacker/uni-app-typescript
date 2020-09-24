<template>
	<view class="content">
		<image class="logo" src="../../static/logo.png"></image>
		<view>
			<text class="title a">{{ title }}</text>
		</view>
		<u-button type="success" @click="handleClick">主要按钮</u-button>
		{{ vuex_user.name }}{{ vuex_version }}
	</view>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { component } from 'vue/types/umd';
@Component
export default class Index extends Vue {
	private title: string = 'hello words!';

	created() {
		console.log(45);
	}

	handleClick() {
		if (this.vuex_user.name === '明月') {
			this.$u.vuex('vuex_user.name', '二狗子');
		} else {
			this.$u.vuex('vuex_user.name', '明月');
		}
	}

	mounted() {
		console.log(this);
		console.log(this.$u.type);
		console.log(this.vuex_version);
	}
}
// export default Vue.extend({
// 	data() {
// 		return {
// 			title: 'Hello'
// 		};
// 	},
// 	onLoad() {},
// 	methods: {}
// });
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.a {
		color: red;
	}
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin: 200rpx auto 50rpx auto;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
