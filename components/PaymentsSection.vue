<template>
  <div class="payments">
    <div class="payments__title">Оплата</div>

    <div class="payments__content">
      <div
        v-for="(payment, index) in payments"
        :key="index"
        class="payments__block"
      >
        <div class="payments__block-section --gray">
          <div class="payments__block-title">{{ payment.title }}</div>
        </div>
        <div
          v-for="(subtitle, id) in payment.subtitles"
          :key="id"
          class="payments__block-section"
        >
          <div class="payments__block-subtitle">{{ subtitle.title }}</div>
        </div>
        <div class="payments__block-section">
          <a :href="payment.link" class="payments__block-btn">Купить</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payments: [
        {
          title: '$ 50,00',
          subtitles: [
            { title: '1 сессия' },
            { title: 'Пробная сессия' },
            { title: 'Помощь вне сессии' },
          ],
          link: '',
        },

        {
          title: '$ 550,00',
          subtitles: [
            { title: '12 сессий' },
            { title: 'Две сессии в подарок' },
            { title: 'Помощь вне сессии' },
          ],
          link: '',
        },

        {
          title: '$ 1000,00',
          subtitles: [
            { title: '24 сессии' },
            { title: 'Три сессии в подарок' },
            { title: 'Помощь вне сессии' },
          ],
          link: '',
        },

        {
          title: '$ 1500,00',
          subtitles: [
            { title: '36 сессий' },
            { title: 'Три сессии в подарок' },
            { title: 'Постоянное сопровождение' },
          ],
          link: '',
        },

        {
          title: '$ 2000,00',
          subtitles: [
            { title: '48 сессий' },
            { title: 'Четыре сессии в подарок' },
            { title: 'Постоянное сопровождение' },
          ],
          link: '',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'sass-rem/_rem.scss';

.payments {
  background: #fff;
  width: 100%;
  padding: rem(100px 0);

  &__title {
    font-family: Roboto Slab;
    font-size: rem(76px);
    line-height: rem(87px);
    font-weight: normal;
    color: #333;
    text-align: center;
    max-width: rem(300px);
    margin: 0 auto;
    padding-bottom: rem(10px);
    border-bottom: rem(2px) solid #fea12b;
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    max-width: rem(1000px);
    margin: rem(100px auto 0);
  }

  &__block {
    max-width: rem(275px);
    width: 100%;
    border: rem(1px) solid #e3e3e3;
    text-align: center;
    margin-right: rem(25px);

    &:nth-child(3) {
      margin-right: 0;
      margin-bottom: rem(50px);
    }

    &:nth-child(5) {
      margin-right: 0;
    }

    &-section {
      border-bottom: rem(1px) solid #e3e3e3;
      box-sizing: border-box;
      min-height: rem(75px);

      &.--gray {
        background: #f8f8f8;
      }

      &:last-child {
        border: none;
      }
    }

    &-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #727272;
      font-size: rem(55px);
      padding-top: rem(5px);
    }

    &-subtitle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #727272;
      font-size: rem(18px);
      padding-top: rem(28px);
    }

    &-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-decoration: none;
      text-transform: uppercase;
      color: #fea12b;
      font-size: rem(18px);
      padding-top: rem(28px);
    }
  }
}
</style>
