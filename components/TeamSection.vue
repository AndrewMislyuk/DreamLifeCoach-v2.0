<template>
  <div class="team">
    <div class="team__content">
      <div class="team__info">
        <div class="team__info-image" />
        <div class="team__info-group">
          <div class="team__info-title">
            Людмила
            <div class="--open-sans">Негода</div>
          </div>
          <div class="team__info-text">
            Дипломированный психолог с опытом работы по методу «Позитивная
            психотерапия», сертифицированный бизнес-коуч, трансформационный коуч
            работаю с метафорическими ассоциативными картами.
          </div>
        </div>
      </div>
      <div class="team__block" />
      <div class="team__info --left">
        <div class="team__info-group">
          <div class="team__info-title">
            Виктория
            <div class="--open-sans">Коновалова</div>
          </div>
          <div class="team__info-text">
            Закончила "Школу коучинга" Международный институт интеграционного
            развития Константина Довлатова, курс "Духовная интеграционика" (АНО
            ДПО " МИИР"), лайф-коуч, МАК-коуч, энерго-коуч.
          </div>
        </div>
        <div class="team__info-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'sass-rem/_rem.scss';

.team {
  width: 100%;
  padding: rem(130px 0 115px);

  &__content {
    max-width: rem(1100px);
    width: 100%;
    margin: 0 auto;
    height: rem(600px);
    position: relative;
  }

  &__info {
    max-width: rem(550px);
    width: 100%;
    box-sizing: border-box;
    position: relative;

    &-image {
      position: absolute;
      z-index: 10;
      right: 0;
      top: 0;
      width: rem(250px);
      height: rem(300px);
      background: #f4f4f4;
      opacity: 0.6;
      // background: url() center / contain no-repeat;
    }

    &-group {
      position: relative;
      z-index: 11;
      padding-top: rem(50px);
    }

    &-title {
      font-family: Oswald;
      font-weight: bold;
      font-size: rem(36px);
      line-height: rem(53px);
      letter-spacing: rem(2.304px);
      color: #333333;

      .--open-sans {
        padding: rem(4px 0 32px);
        font-family: Open Sans;
        font-weight: 300;
        font-size: rem(42px);
        line-height: rem(57px);
        letter-spacing: rem(2.688px);
        color: #504e4e;
      }
    }

    &-text {
      position: relative;
      max-width: rem(400px);
      width: 100%;
      margin-left: rem(50px);
      font-family: Open Sans;
      font-weight: 300;
      font-size: rem(15px);
      line-height: rem(25px);
      letter-spacing: rem(1.26px);
      color: #5b5858;

      &::before {
        content: '';
        position: absolute;
        top: rem(15px);
        left: rem(-35px);
        width: rem(20px);
        height: rem(2px);
        background: #353535;
      }
    }

    &.--left {
      position: absolute;
      right: rem(-100px);
      bottom: 5%;

      .team__info-image {
        left: 0;
      }

      .team__info-group {
        padding-top: rem(75px);
        right: -30%;
      }
    }
  }

  &__block {
    position: absolute;
    left: 45%;
    top: 25%;
    width: rem(260px);
    height: rem(350px);
    background: #4caf50;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
}
</style>
