<template>
  <div class="programs">
    <div class="programs__wrapper">
      <div class="programs__wrapper-left">
        <div class="programs__title">Наши программы</div>
        <div
          v-for="(program1, index1) in programs1"
          :key="index1"
          class="programs__block"
        >
          <div :class="`programs__block-image ${program1.image}`">
            <div class="programs__block-mask"></div>
          </div>
          <div class="programs__block-title --left-side">
            {{ program1.title }}
          </div>
          <div
            class="programs__block-btn --left-side"
            @click="openImage(program1.btn, program1.title, program1.text)"
          >
            Подробнее
          </div>
        </div>
      </div>

      <div class="programs__wrapper-right">
        <div
          v-for="(program2, index2) in programs2"
          :key="index2"
          class="programs__block"
        >
          <div :class="`programs__block-image ${program2.image} --right`">
            <div class="programs__block-mask"></div>
          </div>
          <div class="programs__block-title --right-side">
            {{ program2.title }}
          </div>
          <div
            class="programs__block-btn --right-side"
            @click="openImage(program2.btn, program2.title, program2.text)"
          >
            Подробнее
          </div>
        </div>
      </div>
    </div>

    <Modal v-model="isImagesPopupOpen">
      <ImagePopup
        @close="isImagesPopupOpen = false"
        :photoPath="photoPath"
        :titlePath="titlePath"
        :textPath="textPath"
      />
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/UI/VModal/VModal'
import ImagePopup from '@/components/TheImagePopup'

export default {
  components: {
    Modal,
    ImagePopup,
  },

  data() {
    return {
      isImagesPopupOpen: false,
      photoPath: null,
      titlePath: null,
      textPath: null,
      programs1: [
        {
          image: '--first-image',
          title: 'Лучшая версия себя',
          text:
            'Программа "Создай свою лучшую версию" раскроет ваш внутренний потенциал, поможет найти свое предназначение. Вы почувствуете прилив энергии и, наконец-то, займетесь своим любимым делом!',
          btn: '1',
        },

        {
          image: '--second-image',
          title: 'Стать счастливым',
          text:
            '"МЕЧТЫ-сбываются, желания-исполняются!"- не ваш девиз? После программы "Как стать счастливым" вашими ключевыми фразами станут : хочу жить, хочу любить, хочу мечтать! Эта "троица" наполнит осознанием своих истинных желаний, внутренней энергией, свободой и силой.',
          btn: '2',
        },

        {
          image: '--third-image',
          title: 'Справиться с потерями в жизни',
          text:
            'Жизнь не доставляет вам удовольствия? Депрессия сдавливает горло? Программа "Как справиться с потерями в жизни" избавит вас навсегда от негативного опыта и переживаний, даст возможность задышать полной грудью.',
          btn: '3',
        },
      ],
      programs2: [
        {
          image: '--fourth-image',
          title: 'Выйти замуж за 90 дней',
          text:
            'Если вы мечтаете с радостью просыпаться на плече любимого, получать удовольствие от жизни вдвоем, пройдите нашу программу "Как выйти замуж за 90 дней" и вы услышите те самые заветные: "Я хочу пройти этот путь вместе с тобой..." от самого лучшего мужчины в вашей жизни.',
          btn: '4',
        },

        {
          image: '--fifth-image',
          title: 'Прибыльный бизнес за 90 дней',
          text:
            '"А жизнь-то налаживается..." У вас не так? Программа "Как создать свой прибыльный бизнес" поможет продумать, подготовить и внедрить крутой бизнес-план(круче только яйца)!',
          btn: '5',
        },

        {
          image: '--sixth-image',
          title: 'Преодоление кризисов',
          text:
            'Программа "Преодоление кризисов" расставит все точки над и в сфере отношений, здоровья, карьеры, денег, превратит проблемы в ресурсы , чтобы желание действовать, идти вперёд всегда сопровождало вас по жизни, как говорится "вижу цель-не вижу препятствий"',
          btn: '6',
        },
      ],
    }
  },

  methods: {
    openImage(image, title, text) {
      this.photoPath = image
      this.titlePath = title
      this.textPath = text
      this.isImagesPopupOpen = true
    },
  },
}
</script>

<style lang="scss" scoped>
.programs {
  width: 100%;
  padding: rem(146px 0 50px);

  &__wrapper {
    max-width: rem(1100px);
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @include for-tablet-horizontal {
      display: block;
    }

    &-left {
      display: flex;
      flex-direction: column;

      @include for-tablet-horizontal {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }

    &-right {
      display: flex;
      flex-direction: column;

      @include for-tablet-horizontal {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }

    @include for-tablet-horizontal {
      max-width: rem(700px);
    }

    @include for-mobile-L {
      max-width: rem(400px);
    }

    @include for-mobile-L {
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
    margin-bottom: rem(150px);

    &::before {
      position: absolute;
      content: '';
      bottom: rem(-10px);
      left: 0;
      background: #252525;
      width: rem(45px);
      height: rem(2px);
    }

    @include for-mobile-L {
      font-size: rem(40px);
      line-height: rem(40px);
    }
  }

  &__block {
    max-width: rem(500px);
    height: rem(500px);
    position: relative;

    @include for-tablet-horizontal {
      width: 100%;
      margin: 0 auto;
    }

    @include for-mobile-L {
      max-width: none;
      box-sizing: border-box;
      padding: rem(0 16px 0);
    }

    &-image {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      width: rem(400px);
      height: rem(300px);

      @include for-mobile-L {
        width: rem(340px);
        height: rem(250px);
      }

      &.--right {
        left: auto;
        right: 0;
      }

      &.--first-image {
        background: url(~@/assets/images/item1.webp) center / contain no-repeat;
      }

      &.--second-image {
        background: url(~@/assets/images/item2.webp) center / contain no-repeat;
      }

      &.--third-image {
        background: url(~@/assets/images/item3.webp) center / contain no-repeat;
      }

      &.--fourth-image {
        background: url(~@/assets/images/item4.webp) center / contain no-repeat;
      }

      &.--fifth-image {
        background: url(~@/assets/images/item5.webp) center / contain no-repeat;
      }

      &.--sixth-image {
        background: url(~@/assets/images/item6.webp) center / contain no-repeat;
      }
    }

    &-mask {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: 10;
      bottom: 0;
      background: #f3f4f6;
      opacity: 0.8;
    }

    &-title {
      position: relative;
      z-index: 11;
      font-family: Oswald;
      font-weight: 300;
      font-size: rem(48px);
      line-height: rem(60px);
      letter-spacing: rem(3.072px);
      color: #252525;

      &.--left-side {
        margin: rem(140px 0 0 100px);
      }

      &.--right-side {
        margin: rem(140px 100px 0 0);
      }
    }

    &-btn {
      position: absolute;
      z-index: 11;
      bottom: rem(140px);
      cursor: pointer;
      border: rem(1px) solid #333333;
      border-radius: rem(12px);
      font-family: Open Sans;
      font-weight: 600;
      font-size: rem(18px);
      line-height: rem(25px);
      letter-spacing: rem(1px);
      padding: rem(6px 16px);
      transition: all 0.2s linear;

      &:hover {
        border-color: #4caf50;
        background: #4caf50;
        color: #fff;
      }

      &.--left-side {
        left: 0;
      }

      &.--right-side {
        right: 0;
      }
    }
  }
}
</style>
