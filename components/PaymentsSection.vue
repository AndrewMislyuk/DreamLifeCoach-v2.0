<template>
  <div class="payments">
    <div class="payments__title">Стоимость сессий</div>
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
  max-width: rem(1920px);
  background: #fbfbfb;
  width: 100%;
  padding: rem(129px 0 167px);
}
</style>
