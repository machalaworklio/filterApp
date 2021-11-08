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

export default defineComponent({
  name: 'App',
  setup() {
    const data = ref<peopleInterface>(people);

    const balanceSort = computed(() =>
      data.value.filter((obj) => obj.balance >= 3000)
    );

    const ageSort = computed(() => data.value.filter((obj) => obj.age > 30));

    const peopleSort = computed(() =>
      data.value.filter(
        (obj) => obj.gender === 'female' && obj.eyeColor === 'brown'
      )
    );

    const splitName = data.value.map((obj) => obj.name.split(' '));

    const splitSurname = data.value.map((obj) => obj.name.split(' '));

    const splitFriends = data.value.map((obj) => obj.friends.lenght);

    const splitMail = data.value.map((obj) => obj.email.split('@'));

    const dataSplit = [
      {
        firstName: splitName[0],
        lastName: splitSurname[1],
        friends: splitFriends,
        domain: splitMail,
      },
    ];
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
