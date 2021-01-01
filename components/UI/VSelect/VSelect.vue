<template>
  <div v-click-outside="onClose" class="v-select__wrap">
    <div
      @click.prevent="onToggle"
      class="v-select"
      :class="{
        '--state-opened': opened,
        '--state-filled': value,
        '--state-disabled': disabled,
        '--type-labeled': label,
        '--type-outline': outline,
      }"
    >
      <div
        class="v-select__field"
        :class="{
          '--placeholder': !value && placeholder,
        }"
      >
        <span>
          {{ formattedValue || placeholder }}
        </span>
      </div>

      <div v-if="label" class="v-select__label">
        {{ label }}

        <template v-if="required"> * </template>
      </div>
    </div>

    <div v-if="opened" class="v-select__options">
      <div
        v-for="option in options"
        :key="`option-${reduceValue(option)}`"
        @click.prevent="onInput(option)"
        class="v-select__options-item"
        :class="{
          '--state-selected': isOptionSelected(option),
        }"
      >
        <v-icon
          v-if="multiple && isOptionSelected(option)"
          icon="check"
          class="v-select__options-icon"
        />

        {{ reduceLabel(option) }}
      </div>
    </div>
  </div>
</template>

<script>
import { without, find } from 'lodash'
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },

  props: {
    value: {
      type: [String, Array, Number],
      default: '',
    },

    label: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    required: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    multiple: {
      type: Boolean,
      default: false,
    },

    outline: {
      type: Boolean,
      default: false,
    },

    reduceLabel: {
      type: Function,
      default: (option) => option,
    },

    reduceValue: {
      type: Function,
      default: (option) => option,
    },

    options: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      opened: false,
    }
  },

  computed: {
    formattedValue() {
      if (this.multiple) {
        return this.value
          .map((item) => {
            const valueObject = find(
              this.options,
              (option) => this.reduceValue(option) === item
            )
            return this.reduceLabel(valueObject)
            // .substr(0,3);
          })
          .join(', ')
      }
      const option = find(
        this.options,
        (currentOption) => this.reduceValue(currentOption) === this.value
      )

      return option ? this.reduceLabel(option) : ''
    },
  },

  methods: {
    isOptionSelected(option) {
      if (this.multiple) {
        return this.value.includes(this.reduceValue(option))
      }
      return this.reduceValue(option) === this.value
    },

    onOpen() {
      this.opened = true
    },

    onClose() {
      this.opened = false
    },

    onToggle() {
      this.opened = !this.opened
    },

    onInput(option) {
      const optionValue = this.reduceValue(option)

      if (this.multiple) {
        if (this.value.includes(optionValue)) {
          this.$emit('input', without(this.value, optionValue))
        } else {
          this.$emit('input', [...this.value, optionValue])
        }
      } else {
        this.onClose()
        this.$emit('input', optionValue)
      }
    },
  },
}
</script>

<style lang="scss" src="./VSelect.scss" scoped></style>
