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
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'Главная',
          rout: '#',
        },

        {
          text: 'О нас',
          rout: '#',
        },

        {
          text: 'Программы',
          rout: '#',
        },

        {
          text: 'Оплата',
          rout: '#',
        },

        {
          text: 'Пробная сессия',
          rout: '#',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'sass-rem/_rem.scss';

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

  &__logo {
    font-family: Oswald;
    font-style: normal;
    font-weight: normal;
    font-size: rem(26px);
    line-height: rem(32px);
    color: #ffffff;
  }

  &__menu {
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

      &::before {
        content: '';
        position: absolute;
        bottom: rem(-5px);
        right: 0;
        height: rem(2px);
        width: rem(20px);
        background: #4caf50;
        transition: all 0.3s linear;
      }

      &:hover {
        &::before {
          width: 100%;
        }
      }

      &:last-child {
        margin: 0;
      }
    }
  }
}
</style>
