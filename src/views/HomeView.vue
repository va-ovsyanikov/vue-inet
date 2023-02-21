<template>
    <v-loader v-if="!users.getUsers.length"></v-loader>
    <div class="app__content" v-else>
        <TransitionGroup name="list" tag="div">
            <div
                class="app__item"
                v-for="(user, index) of users.getUsers"
                :key="index"
            >
                <v-card
                    :avatar="user.avatar"
                    :title="user.title"
                    :subtitle="user.subtitle"
                    :country="user.country"
                    :score="user.score"
                    :id="user.id"
                >
                </v-card>
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import vCard from '@/components/card/v-card.vue'
import vLoader from '@/components/v-loader.vue'
import { userStore } from '@/stores/users'
const users = userStore()

users.fetchUsers()
</script>
