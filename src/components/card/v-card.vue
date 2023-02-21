<template>
    <div class="card">
        <router-link :to="`/${id}`">
            <img :src="avatar" alt="alt" class="card__avatar" />
        </router-link>
        <div class="card__content">
            <h2 class="card__title">{{ title }}</h2>
            <div class="card__subcontent">
                <p class="card__subtitle">{{ subtitle }}</p>
                <span>{{ country }}</span>
                <span>{{ score }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    avatar: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    subtitle: {
        type: String,
        default: '',
    },
    country: {
        type: String,
        default: '',
    },
    score: {
        type: String,
        default: '',
    },
    id: {
        type: Number,
    },
})
</script>

<style lang="less" scoped>
.card {
    display: flex;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 20px;
}

.card__avatar {
    margin-right: 20px;
    cursor: pointer;
}

.card__title {
    margin-bottom: 20px;
}

.card__subtitle {
    margin-bottom: 20px;
}
</style>
