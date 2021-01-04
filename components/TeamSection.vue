<template>
  <div class="team">
    <div class="team__content">
      <div class="team__info">
        <div class="team__info-image">
          <div class="team__info-mask"></div>
        </div>
        <div class="team__info-group">
          <div class="team__info-title">
            Светлана
            <div class="--open-sans">Зайцева</div>
            <!-- Людмила
            <div class="--open-sans">Негода</div> -->
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
            Надежда
            <div class="--open-sans">Кузнецова</div>
            <!-- Виктория
            <div class="--open-sans">Коновалова</div> -->
          </div>
          <div class="team__info-text">
            Закончила "Школу коучинга" Международный институт интеграционного
            развития Константина Довлатова, курс "Духовная интеграционика" (АНО
            ДПО " МИИР"), лайф-коуч, МАК-коуч, энерго-коуч.
          </div>
        </div>
        <div class="team__info-image">
          <div class="team__info-mask"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.team {
  width: 100%;
  padding: rem(130px 0 115px);

  @include for-desktop-hd {
    padding: rem(130px 0 200px);
  }

  @include for-tablet-horizontal {
    padding: rem(130px 0 115px);
  }

  &__content {
    max-width: rem(1100px);
    width: 100%;
    margin: 0 auto;
    height: rem(600px);
    position: relative;

    @include for-tablet-horizontal {
      height: auto;
    }
  }

  &__info {
    max-width: rem(550px);
    width: 100%;
    box-sizing: border-box;
    position: relative;

    @include for-tablet-horizontal {
      position: static;
      display: flex;
      align-items: flex-start;
      margin: rem(0 auto 100px);

      &:last-child {
        margin: 0 auto;
      }
    }

    @include for-mobile-L {
      display: block;
    }

    &-image {
      position: absolute;
      z-index: 10;
      right: 0;
      top: 0;
      width: rem(250px);
      height: rem(300px);
      background: url(~@/assets/images/photo1.png) center / contain no-repeat;

      @include for-tablet-horizontal {
        position: static;
        height: rem(250px);
        margin-right: rem(50px);
      }

      @include for-mobile-L {
        margin: rem(0 auto 25px);
      }
    }

    &-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #f4f4f4;
      opacity: 0.6;

      @include for-tablet-horizontal {
        display: none;
      }
    }

    &-group {
      position: relative;
      z-index: 11;
      padding-top: rem(50px);

      @include for-tablet-horizontal {
        position: static;
        padding: 0;
      }

      @include for-mobile-L {
        margin: 0 auto;
      }
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

      @include for-mobile-L {
        margin-left: rem(50px);
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

        @include for-mobile-L {
          display: none;
        }
      }

      @include for-mobile-L {
        max-width: none;
        width: 100%;
        box-sizing: border-box;
        padding: rem(0 16px 0);
        margin: 0;
      }
    }

    &.--left {
      position: absolute;
      right: rem(-100px);
      bottom: 5%;

      @include for-desktop-hd {
        bottom: rem(-100px);
        right: rem(100px);
      }

      @include for-tablet-horizontal {
        position: static;
      }

      @include for-mobile-L {
        display: flex;
        flex-direction: column;
      }

      .team__info-image {
        left: 0;
        background: url(~@/assets/images/photo2.png) center / contain no-repeat;

        @include for-tablet-horizontal {
          margin: rem(0 0 0 50px);
        }

        @include for-mobile-L {
          order: 1;
          margin: rem(0 auto 25px);
        }
      }

      .team__info-group {
        padding-top: rem(75px);
        right: -30%;
        max-width: rem(400px);

        @include for-tablet-horizontal {
          position: static;
          padding: 0;
        }

        @include for-mobile-L {
          order: 2;
          margin: 0;
        }
      }

      .team__info-title {
        @include for-mobile-L {
          margin-left: rem(50px);
        }
      }

      .team__info-text {
        @include for-mobile-L {
          margin-left: 0;
        }
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

    @include for-tablet-horizontal {
      display: none;
    }
  }
}
</style>
