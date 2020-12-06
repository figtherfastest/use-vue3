import { reactive } from 'vue'
let countState = reactive({
	count: 0
})
function addCount() {
	countState.count++
}

// 减少count
function minusCount() {
	countState.count--
}
export { countState, addCount, minusCount }
