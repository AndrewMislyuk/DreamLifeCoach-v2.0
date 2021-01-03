<template>
  <div class="payments">
    <div class="payments__wrapper">
      <div class="payments__title">Стоимость сессий</div>

      <div class="payments__content">
        <div
          v-for="(payment, index) in payments"
          :key="index"
          class="payments__block"
        >
          <div class="payments__block-title">{{ payment.title }}</div>
          <div class="payments__list">
            <div
              v-for="(subtitle, index) in payment.subtitles"
              :key="index"
              class="payments__list-paragraph"
            >
              {{ subtitle.title }}
            </div>
          </div>
          <a :href="payment.link" class="payments__block-btn" target="_blank"
            >Оплатить</a
          >
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
          link: 'https://secure.wayforpay.com/button/b67e3b237c71c',
        },

        {
          title: '$ 550,00',
          subtitles: [
            { title: '12 сессий' },
            { title: 'Две сессии в подарок' },
            { title: 'Помощь вне сессии' },
          ],
          link: 'https://secure.wayforpay.com/button/b83be86a23832',
        },

        {
          title: '$ 1000,00',
          subtitles: [
            { title: '24 сессии' },
            { title: 'Три сессии в подарок' },
            { title: 'Помощь вне сессии' },
          ],
          link: 'https://secure.wayforpay.com/button/bab79ecf6dce9',
        },

        {
          title: '$ 1500,00',
          subtitles: [
            { title: '36 сессий' },
            { title: 'Три сессии в подарок' },
            { title: 'Постоянное сопровождение' },
          ],
          link: 'https://secure.wayforpay.com/button/b9930d3b3dad2',
        },

        {
          title: '$ 2000,00',
          subtitles: [
            { title: '48 сессий' },
            { title: 'Четыре сессии в подарок' },
            { title: 'Постоянное сопровождение' },
          ],
          link: 'https://secure.wayforpay.com/button/bc1ad060c458c',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'sass-rem/_rem.scss';

.payments {
  background: #fbfbfb;
  width: 100%;
  padding: rem(129px 0 167px);

  &__wrapper {
    max-width: rem(1100px);
    margin: 0 auto;
  }

  &__title {
    font-family: Oswald;
    font-weight: bold;
    font-size: rem(48px);
    line-height: rem(71px);
    letter-spacing: rem(3.072px);
    color: #252525;
    position: relative;
    margin-bottom: rem(74px);

    &::before {
      content: '';
      position: absolute;
      bottom: rem(-20px);
      left: 0;
      background: #252525;
      width: rem(45px);
      height: rem(2px);
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__block {
    background: #ffffff;
    max-width: rem(200px);
    height: rem(325px);
    box-sizing: border-box;
    padding: rem(25px 44px 35px 25px);
    position: relative;

    &-title {
      font-family: Oswald;
      font-weight: 300;
      font-size: rem(24px);
      line-height: rem(30px);
      letter-spacing: rem(1.28px);
      text-transform: uppercase;
      color: #252525;
      margin-bottom: rem(45px);
      position: relative;

      &::before {
        position: absolute;
        content: '';
        left: 0;
        bottom: rem(-10px);
        background: #252525;
        width: rem(35px);
        height: rem(2px);
      }
    }

    &-btn {
      display: block;
      text-decoration: none;
      position: absolute;
      left: 50%;
      bottom: rem(30px);
      margin-left: rem(-60px);
      border: rem(1px) solid #333333;
      color: #333;
      border-radius: rem(12px);
      font-family: Open Sans;
      font-weight: 600;
      font-size: rem(16px);
      line-height: rem(20px);
      letter-spacing: rem(1px);
      padding: rem(6px 16px);
      transition: all 0.2s linear;

      &:hover {
        border-color: #4caf50;
        background: #4caf50;
        color: #fff;
      }
    }
  }

  &__list {
    &-paragraph {
      font-family: Open Sans;
      font-weight: normal;
      font-size: rem(12px);
      line-height: rem(20px);
      letter-spacing: rem(1.008px);
      color: #777777;
      position: relative;
      padding-left: rem(20px);
      margin-bottom: rem(16px);

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        position: absolute;
        content: '';
        width: rem(7px);
        height: rem(7px);
        background: #333;
        border-radius: 50%;
        top: rem(5px);
        left: 0;
      }
    }
  }
}
</style>
