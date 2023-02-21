<template>
    <div class="wrap">
        <div class="app">
            <div class="app__select">
                <v-select
                    :options="country"
                    label="Filter by country"
                    v-model="selectCountry"
                >
                </v-select>
                <br />
                <v-select
                    :options="score"
                    label="Filter by score"
                    v-model="selectScore"
                ></v-select>
            </div>
            <router-view />
        </div>
    </div>
    <v-footer></v-footer>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import vSelect from '@/components/select/v-select.vue'
import vFooter from '@/components/v-footer.vue'

import { userStore } from '@/stores/users'
const users = userStore()

const selectCountry = ref('All')
const selectScore = ref('All')

const country = ref<string[]>(['All', 'Russia', 'USA'])
const score = ref<string[]>(['All', '>20', '<10'])

watch(selectCountry, () => {
    users.setCountry(selectCountry.value)
})
watch(selectScore, () => {
    users.setScore(selectScore.value)
})

onMounted(() => {
    users.setCountry(selectCountry.value)
    users.setScore(selectScore.value)
})
</script>
<style lang="less" scoped>
.wrap {
    flex: 1 0 auto;
}

.app {
    margin: 50px;
    position: relative;
    display: flex;

    &__select {
        margin-right: 50px;
    }
}

.footer {
    flex: 0 0 auto;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translate(30px, 0);
}

/* Medium Devices, Desktops */
@media only screen and (max-width: 992px) {
    .app {
        flex-direction: column;

        &__select {
            margin-bottom: 30px;
        }
    }
}

/* Small Devices, Tablets */
@media only screen and (max-width: 768px) {
}
</style>
