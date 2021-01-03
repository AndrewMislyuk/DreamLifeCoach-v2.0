<template>
  <div class="popup">
    <div class="popup__cross" @click="$emit('close')" />
    <img
      class="popup__image"
      :src="require(`@/assets/images/item${photoPath}.webp`)"
    />
    <div class="popup__title">{{ titlePath }}</div>
    <div class="popup__text">{{ textPath }}</div>
    <div class="popup__close" @click="$emit('close')">Закрыть</div>
  </div>
</template>

<script>
export default {
  props: {
    photoPath: {
      type: String,
      default: '',
    },

    titlePath: {
      type: String,
      default: '',
    },

    textPath: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.popup {
  width: rem(600px);
  padding: rem(50px);
  box-sizing: border-box;
  position: relative;

  @include for-tablet-horizontal {
    width: rem(500px);
  }

  &__cross {
    position: absolute;
    right: rem(5px);
    top: rem(5px);
    width: rem(25px);
    height: rem(25px);
    border: rem(1px) solid #333333;
    border-radius: 50%;
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover {
      border-color: #f81111;
      background: #f81111;

      &::after,
      &::before {
        background: #ffffff;
      }
    }

    &::after,
    &::before {
      content: '';
      position: absolute;
      width: rem(2px);
      height: rem(15px);
      top: 50%;
      left: 50%;
      margin-left: rem(-1px);
      margin-top: rem(-7.5px);
      background: #333333;
    }

    &::after {
      transform: rotate(140deg);
    }

    &::before {
      transform: rotate(40deg);
    }
  }

  &__image {
    display: block;
    width: rem(500px);
    margin: rem(0 auto 15px);

    @include for-tablet-horizontal {
      width: rem(300px);
    }
  }

  &__title {
    font-family: Oswald;
    font-weight: bold;
    font-size: rem(30px);
    line-height: rem(50px);
    letter-spacing: rem(3.072px);
    color: #252525;
    margin-bottom: rem(10px);

    @include for-tablet-horizontal {
      font-size: rem(25px);
      line-height: rem(40px);
    }
  }

  &__text {
    font-family: Open Sans;
    font-weight: normal;
    font-size: rem(18px);
    line-height: rem(22px);
    letter-spacing: rem(1.008px);
    color: #333333;
    margin-bottom: rem(40px);

    @include for-tablet-horizontal {
      font-size: rem(16px);
      line-height: rem(18px);
    }
  }

  &__close {
    cursor: pointer;
    font-family: Oswald;
    font-weight: bold;
    font-size: rem(18px);
    line-height: rem(22px);
    color: #252525;
    padding: rem(6px 0 8px);
    border-radius: rem(8px);
    text-align: center;
    width: rem(100px);
    border: rem(1px) solid #333333;
    transition: all 0.2s linear;

    &:hover {
      color: #ffffff;
      background: #f81111;
      border-color: #f81111;
    }
  }
}
</style>
