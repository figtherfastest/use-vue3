<template>
	<div class="about">
		<h1>This is an about page</h1>
		<div>{{ init }}</div>
		<div>{{ countState.count }}</div>
		<div @click="addCount">addCount</div>
		<div @click="minusCount">minusCount</div>
	</div>
</template>
<script>
import { getCurrentInstance, onBeforeMount, ref } from 'vue'
import * as countIndexController from './utils/countIndexController'
export default {
	setup() {
		const init = ref(0)
		const { ctx } = getCurrentInstance()
		onBeforeMount(() => {
			init.value = ctx.$baseHttp
		})
		return {
			init,
			...countIndexController
		}
	}
}
</script>
<style></style>
