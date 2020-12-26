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
.info {
  width: 100%;
  padding: 100px 0;
  background: #272e6d;

  &__title {
    font-family: Roboto Slab;
    font-size: 76px;
    line-height: 87px;
    font-weight: normal;
    color: #fff;
    text-align: center;
    max-width: 650px;
    margin: 0 auto;
    padding-bottom: 10px;
    border-bottom: 2px solid #e84545;
  }

  &__content {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  &__block {
    max-width: 300px;
    width: 100%;
    margin-right: 75px;
    font-family: Manrope;
    font-weight: normal;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      .info__block-icon {
        border-color: #e84545;
      }
    }

    &-icon {
      border: 3px solid #fff;
      width: 100px;
      height: 100px;
      margin: 0 auto 25px;
      border-radius: 50%;
      transition: all 0.2s linear;
    }

    &-title {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      color: #fff;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 15px;
    }

    &-text {
      color: #e2e2e2;
      font-size: 16px;
      line-height: 20px;
      text-align: justify;
    }
  }
}
</style>
