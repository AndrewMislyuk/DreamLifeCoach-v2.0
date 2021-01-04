<template>
  <div class="main">
    <div class="main__background">
      <div>
        <!-- <div class="main__title">Бизнес коучинг</div> -->
        <div class="main__title">Психологические сессии</div>
        <div class="main__suptitle">
          Преодолеваем жизненные трудности вместе
        </div>
      </div>

      <a href="#contacts" class="main__button">Записаться на пробную сессию</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.main {
  max-width: rem(1920px);
  width: 100%;
  height: rem(1000px);
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
      177.86deg,
      #000000 -11.81%,
      rgba(0, 0, 0, 0.4) 82.48%
    );
    padding: rem(150px 0 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__title {
    font-family: Oswald;
    font-weight: 500;
    font-size: rem(72px);
    line-height: rem(107px);
    letter-spacing: rem(4.608px);
    color: #ffffff;
    text-align: center;

    @include for-mobile-L {
      font-size: rem(40px);
      line-height: rem(40px);
    }
  }

  &__suptitle {
    margin: rem(24px 0);
    text-align: center;
    font-family: Open Sans;
    font-weight: normal;
    font-size: rem(20px);
    line-height: rem(27px);
    letter-spacing: rem(1.28px);
    color: #ffffff;

    @include for-mobile-L {
      font-size: rem(18px);
      line-height: rem(20px);
    }
  }

  &__button {
    text-decoration: none;
    cursor: pointer;
    border: rem(1px) solid #fff;
    color: #fff;
    font-family: Oswald;
    font-weight: bold;
    font-size: rem(20px);
    line-height: rem(27px);
    padding: rem(16px 50px);
    border-radius: rem(16px);
    max-width: rem(375px);
    margin: rem(150px auto 0);
    transition: all 0.3s linear;

    &:hover {
      background: #fff;
      color: #504e4e;
    }
  }
}
</style>
