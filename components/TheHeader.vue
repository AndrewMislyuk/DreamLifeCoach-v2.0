<template>
  <div class="header">
    <div class="header__logo">DreamLifeCoach</div>
    <div class="header__menu">
      <a
        v-for="(link, index) in links"
        :key="index"
        class="header__menu-link"
        :href="link.rout"
      >
        {{ link.text }}
      </a>
    </div>
    <div class="header__burger" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'Главная',
          rout: '#main',
        },

        {
          text: 'О нас',
          rout: '#team',
        },

        {
          text: 'Программы',
          rout: '#program',
        },

        {
          text: 'Оплата',
          rout: '#payments',
        },

        {
          text: 'Пробная сессия',
          rout: '#contacts',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.4);
  padding: rem(25px 90px 25px 125px);

  @include for-mobile-L {
    padding: rem(25px 25px 25px 25px);
  }

  &__logo {
    font-family: Oswald;
    font-style: normal;
    font-weight: normal;
    font-size: rem(26px);
    line-height: rem(32px);
    color: #ffffff;
  }

  &__menu {
    @include for-tablet-horizontal {
      display: none;
    }

    &-link {
      text-decoration: none;
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: rem(16px);
      line-height: rem(21px);
      letter-spacing: rem(1.94px);
      color: #ffffff;
      margin-right: rem(35px);
      position: relative;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        bottom: rem(-5px);
        right: 0;
        height: rem(2px);
        width: 100%;
        background: #4caf50;
        transition: all 0.3s linear;
        opacity: 0;
      }

      &:hover {
        &::before {
          opacity: 1;
        }
      }

      &:last-child {
        margin: 0;
      }
    }
  }

  &__burger {
    display: none;
    width: rem(20px);
    height: rem(9px);
    cursor: pointer;
    background: url(~@/assets/images/burger.svg?inline) center / contain
      no-repeat;

    @include for-tablet-horizontal {
      display: block;
    }
  }
}
</style>
