<template>
  <div class="footer">
    <div class="footer__socials">
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.href"
        class="footer__socials-link"
        target="_blank"
      >
        <div :class="`${link.icon} --icon`" />
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
          icon: 'fab fa-instagram',
          href: 'https://www.instagram.com/liudmilanegoda/',
        },

        {
          icon: 'fab fa-facebook-square',
          href: 'https://www.facebook.com/LiudmilaNegoda',
        },

        {
          icon: 'fab fa-telegram',
          href: 'https://web.telegram.org/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'sass-rem/_rem.scss';

.footer {
  background-color: #2e2e2e;
  color: #fff;
  padding: rem(50px 0);

  &__socials {
    max-width: rem(300px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-link {
      color: #fff;
      font-size: rem(25px);
      width: rem(50px);
      height: rem(50px);
      border-radius: 50%;
      border: 1px solid #fff;
      cursor: pointer;
      position: relative;
      transition: all 0.2s linear;

      &:hover {
        border-color: #4caf50;
        color: #4caf50;
      }

      .--icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: rem(-14px);
        margin-left: rem(-11px);
      }
    }
  }
}
</style>
