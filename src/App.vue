/** * @Author: WangYe * @Date: 2020-9-23 10:19:07 * @Email: wangjacker@163.com */
<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'uview-ui/index.scss';
</style>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	mpType: 'app',
	onLaunch() {
		console.log('App Launch');
	},
	onShow() {
		console.log('App Show');
	},
	onHide() {
		console.log('App Hide');
	}
});
</script>
