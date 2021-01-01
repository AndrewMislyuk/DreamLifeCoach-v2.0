<template>
  <div class="programs">
    <div class="programs__title">Программы</div>

    <div class="programs__content">
      <div
        v-for="(program, index) in programs"
        :key="index"
        class="programs__block"
      >
        <div class="programs__block-image">
          <img
            :src="require(`@/assets/images/item${program.image}.webp`)"
            alt="photo"
          />
        </div>

        <div>
          <div class="programs__block-title">{{ program.title }}</div>
          <div class="programs__block-text">{{ program.text }}</div>
          <div class="programs__block-button">Подробнее</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      programs: [
        {
          image: '1',
          title: 'Лучшая версия себя',
          text:
            'Программа "Создай свою лучшую версию" раскроет ваш внутренний потенциал, поможет найти свое предназначение. Вы почувствуете прилив энергии и, наконец-то, займетесь своим любимым делом!',
        },

        {
          image: '2',
          title: 'Стать счастливым',
          text:
            '"МЕЧТЫ-сбываются, желания-исполняются!"- не ваш девиз? После программы "Как стать счастливым" вашими ключевыми фразами станут : хочу жить, хочу любить, хочу мечтать! Эта "троица" наполнит осознанием своих истинных желаний, внутренней энергией, свободой и силой.',
        },

        {
          image: '3',
          title: 'Справиться с потерями в жизни',
          text:
            'Жизнь не доставляет вам удовольствия? Депрессия сдавливает горло? Программа "Как справиться с потерями в жизни" избавит вас навсегда от негативного опыта и переживаний, даст возможность задышать полной грудью.',
        },

        {
          image: '4',
          title: 'Выйти замуж за 90 дней',
          text:
            'Если вы мечтаете с радостью просыпаться на плече любимого, получать удовольствие от жизни вдвоем, пройдите нашу программу "Как выйти замуж за 90 дней" и вы услышите те самые заветные: "Я хочу пройти этот путь вместе с тобой..." от самого лучшего мужчины в вашей жизни.',
        },

        {
          image: '5',
          title: 'Прибыльный бизнес за 90 дней',
          text:
            '"А жизнь-то налаживается..." У вас не так? Программа "Как создать свой прибыльный бизнес" поможет продумать, подготовить и внедрить крутой бизнес-план(круче только яйца)!',
        },

        {
          image: '6',
          title: 'Преодоление кризисов',
          text:
            'Программа "Преодоление кризисов" расставит все точки над и в сфере отношений, здоровья, карьеры, денег, превратит проблемы в ресурсы , чтобы желание действовать, идти вперёд всегда сопровождало вас по жизни, как говорится "вижу цель-не вижу препятствий"',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'sass-rem/_rem.scss';

.programs {
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
    max-width: rem(475px);
    margin: 0 auto;
    padding-bottom: rem(10px);
    border-bottom: rem(2px) solid #fea12b;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: rem(1000px);
    width: 100%;
    margin: rem(100px auto 0);
  }

  &__block {
    font-family: Manrope;
    font-weight: normal;
    display: flex;
    margin-top: rem(50px);
    align-items: flex-start;

    &:first-child {
      margin-top: 0;
    }

    &-image {
      margin-right: rem(50px);
    }

    &-title {
      font-weight: bold;
      font-style: italic;
      font-size: rem(30px);
      line-height: rem(30px);
      margin-bottom: rem(25px);
    }

    &-text {
      color: #696969;
      font-size: rem(18px);
      line-height: rem(22px);
      margin-bottom: rem(50px);
    }

    &-button {
      background: #fea12b;
      color: #fff;
      padding: rem(10px 32px);
      width: rem(85px);
      border-radius: rem(16px);
      cursor: pointer;
    }
  }
}
</style>
