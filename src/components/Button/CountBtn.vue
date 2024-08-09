<!-- 數量按鈕組件 -->

<script>
export default {
    emits: ['send'],
    data() {
        return {
            count: 1,
        };
    },
    watch: {
        count: {
            handler(newValue) {
                this.$emit('send', newValue);
            },
        },
    },
    methods: {
        // 按下減號
        minus() {
            if (this.count <= 0) {
                return;
            }
            this.count--;
        },
    },
};
</script>

<template>
    <div class="box-container">
        <slot />
        <div class="box">
            <button type="button" class="btn" @click="minus">-</button>
            <div class="btn">{{ count }}</div>
            <button type="button" class="btn" @click="count++">+</button>
        </div>
    </div>
</template>

<style scoped>
.box-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.box {
    display: flex;
}

.btn {
    padding: 4px 12px;
    border: 1px solid #000;
    font-size: 1rem;
    cursor: pointer;
}

.btn:not(div):hover {
    background-color: #000;
    color: #fff;
}
</style>