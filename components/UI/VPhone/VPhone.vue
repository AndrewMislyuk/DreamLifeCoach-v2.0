<template>
  <div
    class="v-phone"
    :class="{
      '--active': openList,
      '--wrong': $v.phoneNumber.$error,
      '--success': !$v.phoneNumber.$invalid,
    }"
    v-click-outside="onClose"
  >
    <div class="v-phone__dropdown" @click="openList = !openList">
      <div>{{ countryCode }}</div>
      <div class="v-phone__icon-arrow"></div>
    </div>
    <input
      class="v-phone__field"
      type="text"
      @input="handleInput"
      v-model="$v.phoneNumber.$model"
      v-mask="{
        mask: '99 999 99 99',
        showMaskOnHover: false,
        showMaskOnFocus: false,
      }"
      placeholder="Ваш номер телефона"
      oninput="this.value = this.value.replace(/[^0-9]/g, '')"
    />
    <div class="v-phone__success">
      <i class="fas fa-check"></i>
    </div>
    <div class="v-phone__wrong">
      <i class="fas fa-times"></i>
    </div>
    <div class="v-phone__box">
      <div class="v-phone__fixed">
        <div class="v-phone__icon-search"></div>
        <input class="v-phone__search" v-model="searchCountry" />
      </div>
      <div class="v-phone__list" v-if="country !== null">
        <div
          v-for="(contr, index) in filterCountries"
          :key="index"
          @click="getCode(contr.dialCode)"
          class="v-phone__country"
        >
          <div class="v-phone__country-name">{{ contr.name }}</div>
          <div class="v-phone__country-code">{{ contr.dialCode }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
const Countries = require('../../../countries.json')

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      country: null,
      searchCountry: '',
      phoneNumber: this.value,
      openList: false,
      countryCode: '+380',
    }
  },

  validations: {
    phoneNumber: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
  },

  computed: {
    filterCountries() {
      return this.country.filter((f) =>
        f.name.toLowerCase().includes(this.searchCountry.toLowerCase())
      )
    },
  },

  mounted() {
    this.country = Countries
  },

  methods: {
    onClose() {
      this.openList = false
    },

    getCode(code) {
      this.countryCode = code
      this.openList = false
      this.searchCountry = this.phoneNumber = ''
    },

    handleInput() {
      const fullPhoneNumber = this.countryCode + this.phoneNumber
      this.$emit('input', fullPhoneNumber)
    },
  },
}
</script>

<style lang="scss" scoped src="./VPhone.scss"></style>
