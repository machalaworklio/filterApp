<template>
  <div :class="$style.workspace">
    <div :class="$style.sideBar">
      <button :class="$style.button">
        <span>Sort By</span><span>Balance</span>
      </button>

      <button :class="$style.button">
        <span>Sort By</span><span>Age</span>
      </button>

      <button :class="$style.button">
        <span>Sort By</span><span>Eye Color</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue';
import people from './data/people.json';
import { Person } from './data/peopleInterface.js';

export default defineComponent({
  name: 'App',
  setup() {
    const data = ref<Person[]>(people);

    const balanceSort = computed(() =>
      data.value.filter((obj) => obj.balance >= 3000)
    );

    const ageSort = computed(() => data.value.filter((obj) => obj.age > 30));

    const peopleSort = computed(() =>
      data.value.filter(
        (obj) => obj.gender === 'female' && obj.eyeColor === 'brown'
      )
    );
    const mapped = data.value.map((obj) => {
      return {
        firstName: obj.name.split(' ')[0],
        lastName: obj.name.split(' ')[1],
        friends: obj.friends.length,
        domain: obj.email.split('@')[1],
      };
    });

    const mappedTwo = data.value.map((obj) => {
      return [
        obj.name.split(' ')[1],
        obj.name.split(' ')[0] + ' ' + '(' + obj.age + ')'
      ];
    });
  },
});
</script>

<style lang="scss" module>
.workspace {
  display: flex;
  justify-content: center;
}
.sideBar {
  margin-top: 100px;
}
.button {
  margin-left: 10px;
}
</style>
