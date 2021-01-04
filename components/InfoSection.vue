<template>
  <div class="info">
    <div class="info__wrapper">
      <div class="info__title">Мы предлагаем</div>

      <div class="info__content">
        <div v-for="(item, index) in items" :key="index" class="info__block">
          <div class="info__block-header">
            <div class="info__block-title">{{ item.title }}</div>
            <div class="info__block-icon">
              <div :class="item.icon"></div>
            </div>
          </div>
          <div class="info__block-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'fas fa-ban --first-icon',
          title: 'ПРОГРАММА ОГРАНИЧЕНИЙ',
          text:
            'Проработка негативных убеждений, которые блокируют приток денег, любви.',
        },
        {
          icon: 'fas fa-child --second-icon',
          title: 'РАБОТА С ДЕТСКИМИ УСТАНОВКАМИ',
          text:
            'Проработка болезненных, проблемнных, жизненных ситуаций в прошлом, которые влияют на ваше будущее.',
        },
        // {
        //   icon: 'fas fa-hands-helping',
        //   title: '"ПОМОГИ СЕБЕ САМ"',
        //   text:
        //     'Быть в ресурсном состоянии, находить счастье и радость в простых вещах.',
        // },
        {
          icon: 'fas fa-bullseye --third-icon',
          title: 'ПОСТАНОВКА ЦЕЛЕЙ',
          text: 'Понять свои истинные желания и способы их реализовать.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.info {
  width: 100%;
  padding: rem(129px 0 136px);
  background: #fbfbfb;

  &__wrapper {
    max-width: rem(1100px);
    margin: 0 auto;

    @include for-tablet-horizontal {
      max-width: rem(700px);
    }

    @include for-mobile-L {
      max-width: rem(400px);
    }

    @include for-mobile-M {
      max-width: rem(350px);
    }
  }

  &__title {
    font-family: Oswald;
    font-weight: bold;
    font-size: rem(48px);
    line-height: rem(71px);
    letter-spacing: rem(3.072px);
    color: #252525;
    position: relative;
    margin-bottom: rem(94px);

    &::before {
      position: absolute;
      content: '';
      width: rem(45px);
      height: rem(2px);
      background: #252525;
      bottom: rem(-10px);
      left: 0;
    }

    @include for-mobile-L {
      font-size: rem(40px);
      line-height: rem(40px);
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include for-tablet-horizontal {
      flex-wrap: wrap;
    }
  }

  &__block {
    background: #ffffff;
    width: rem(350px);
    height: rem(300px);
    box-sizing: border-box;
    padding: rem(50px 48px 35px 44px);
    transition: all 0.1 linear;
    border-bottom: 3px solid #fff;

    @include for-tablet-horizontal {
      width: 75%;
      margin: rem(0 auto 50px);

      &:last-child {
        margin: 0 auto;
      }
    }

    &:hover {
      border-color: #70bf73;

      .info__block-icon {
        color: #70bf73;
      }
    }

    &-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: rem(36px);
    }

    &-title {
      max-width: rem(100px);
      font-family: Oswald;
      font-weight: 300;
      font-size: rem(20px);
      line-height: rem(30px);
      letter-spacing: rem(1.28px);
      text-transform: uppercase;
      color: #252525;
      position: relative;

      &::before {
        position: absolute;
        content: '';
        left: 0;
        bottom: rem(-5px);
        width: rem(35px);
        height: rem(2px);
        background: #252525;
      }
    }

    &-text {
      font-family: Open Sans;
      font-weight: normal;
      font-size: rem(12px);
      line-height: rem(25px);
      letter-spacing: rem(1.008px);
      color: #777777;
    }

    &-icon {
      background: #ffffff;
      box-shadow: 0px 0px 20px #dbdbdb;
      width: rem(50px);
      height: rem(50px);
      border-radius: 50%;
      position: relative;
      transition: all 0.1s linear;

      .--first-icon,
      .--second-icon,
      .--third-icon {
        position: absolute;
        font-size: rem(25px);
        left: 50%;
        top: 50%;
        margin-top: rem(-12px);
      }

      .--first-icon {
        margin-left: rem(-12px);
      }

      .--second-icon {
        margin-left: rem(-10px);
      }

      .--third-icon {
        margin-left: rem(-12px);
      }
    }
  }
}
</style>
