<template>
  <transition name="fade">
    <div v-if="value" class="v-modal">
      <div class="v-modal__background" @click="$emit('input', false)" />

      <div class="v-modal__content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" src="./VModal.scss" scoped></style>
