<template>
  <div class="info">
    <div class="info__title">Мы предлагаем</div>
    <div class="info__content">
      <div v-for="(item, index) in items" :key="index" class="info__block">
        <div class="info__block-icon">
          <i :class="`${item.icon} --icon-position`"></i>
        </div>
        <div class="info__block-title">{{ item.title }}</div>
        <div class="info__block-text">{{ item.text }}</div>
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
          icon: 'fas fa-ban',
          title: 'ПРОГРАММА ОГРАНИЧЕНИЙ',
          text:
            'Проработка негативных убеждений, которые блокируют приток денег, любви.',
        },
        {
          icon: 'fas fa-child',
          title: 'РАБОТА С ДЕТСКИМИ УСТАНОВКАМИ',
          text:
            'Проработка болезненных, проблемнных, жизненных ситуаций в прошлом, которые влияют на ваше будущее.',
        },
        {
          icon: 'fas fa-hands-helping',
          title: '"ПОМОГИ СЕБЕ САМ"',
          text:
            'Быть в ресурсном состоянии, находить счастье и радость в простых вещах.',
        },
        {
          icon: 'fas fa-bullseye',
          title: 'ПОСТАНОВКА ЦЕЛЕЙ',
          text: 'Понять свои истинные желания и способы их реализовать.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'sass-rem/_rem.scss';

.info {
  width: 100%;
  padding: rem(100px 0);
  background: #272e6d;

  &__title {
    font-family: Roboto Slab;
    font-size: rem(76px);
    line-height: rem(87px);
    font-weight: normal;
    color: #fff;
    text-align: center;
    max-width: rem(650px);
    margin: 0 auto;
    padding-bottom: rem(10px);
    border-bottom: rem(2px) solid #e84545;
  }

  &__content {
    margin-top: rem(100px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  &__block {
    max-width: rem(300px);
    width: 100%;
    margin-right: rem(75px);
    font-family: Manrope;
    font-weight: normal;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      .info__block-icon {
        border-color: #e84545;
        color: #e84545;
      }
    }

    &-icon {
      border: rem(3px) solid #fff;
      color: #fff;
      font-size: rem(60px);
      width: rem(100px);
      height: rem(100px);
      margin: rem(0 auto 25px);
      border-radius: 50%;
      transition: all 0.2s linear;

      .--icon-position {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: rem(20px);
      }
    }

    &-title {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      color: #fff;
      font-size: rem(20px);
      line-height: rem(28px);
      margin-bottom: rem(15px);
    }

    &-text {
      color: #e2e2e2;
      font-size: rem(16px);
      line-height: rem(20px);
      text-align: justify;
    }
  }
}
</style>
