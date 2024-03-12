<script setup lang="ts">
import {computed, ref} from "vue";
import { usePostsStore } from "@/stores/posts";
import { storeToRefs } from "pinia";
import UiSelect from "@/components/Ui/UiSelect.vue";
import UiCard from "@/components/Ui/UiCard.vue";

const postsStore = usePostsStore();

const { fetchPosts, fetchUsers} = postsStore;
const { posts, users } = storeToRefs(postsStore);

Promise.all([
  fetchPosts(),
  fetchUsers()
]);

const filterValue = ref<number>(0);

const getOptionsForSelect = computed<IOption[]>(() => {
  return users.value.map((item) => {
    return {
      label: item.name,
      value: item.id
    }
  })
})
</script>

<template>
  <div class="container py-4">
    <ui-select
      v-model="filterValue"
      class="mx-auto mb-3"
      :options="getOptionsForSelect"
      @change="fetchPosts(filterValue)"
    />

    <section>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ui-card
          v-for="post in posts"
          :key="post.id"
        >
          <h3 class="text-lg mb-2 text-blue-700">
            {{ post.title }}
          </h3>

          <p class="text-sm">
            {{ post.body }}
          </p>
        </ui-card>
      </div>
    </section>
  </div>
</template>
