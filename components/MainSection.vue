<template>
  <div class="main">
    <div class="main__background">
      <div>
        <div class="main__title">Бизнес коучинг</div>
        <div class="main__suptitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. adipisicing
        </div>
      </div>

      <div class="main__info">
        <div class="main__list">
          <div
            v-for="(point, index) in list"
            :key="index"
            class="main__list-point"
          >
            {{ point.text }}
          </div>
        </div>
      </div>

      <div class="main__button">Записаться на пробную сессию</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          text: 'consectetur adipisicing elit',
        },
        {
          text: 'consectetur adipisicing elit',
        },
        {
          text: 'consectetur adipisicing elit',
        },
        {
          text: 'consectetur adipisicing elit',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  max-width: 1920px;
  width: 100%;
  height: 1000px;
  position: relative;
  margin: 0 auto;
  background: url(~@/assets/images/background.png) center no-repeat;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      252.44deg,
      rgba(236, 218, 201, 0.222) 0%,
      rgba(0, 0, 0, 0.6) 43.33%
    );
    padding: 250px 0 75px;
  }

  &__title {
    font-family: Roboto Slab;
    font-size: 76px;
    line-height: 87px;
    font-weight: normal;
    color: #ffffff;
    text-align: center;
  }

  &__suptitle {
    margin: 30px 0;
    text-align: center;
    font-family: Manrope;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
  }

  &__info {
    margin: 150px 0 0 150px;
  }

  &__list {
    &-point {
      position: relative;
      font-family: Manrope;
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      color: #ffffff;
      margin-bottom: 25px;
      padding-left: 25px;

      &:last-child {
        margin-bottom: 0;
      }

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        margin-top: -4px;
        left: 0;
        background: #fff;
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }
  }
  &__button {
    cursor: pointer;
    background: #fea12b;
    color: #fff;
    font-family: Manrope;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    padding: 16px 50px;
    border-radius: 32px;
    max-width: 375px;
    margin: 25px auto 0;
  }
}
</style>
