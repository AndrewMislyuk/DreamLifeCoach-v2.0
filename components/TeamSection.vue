<template>
  <div class="team">
    <div>
      <div class="team__title">О нас</div>
    </div>
    <div class="team__content">
      <div class="team__block">
        <div class="team__block-image">
          <div class="team__block-title --no-image">No image</div>
        </div>
        <div class="team__block-content">
          <div class="team__block-title">Людмила Негода</div>
          <div class="team__block-text">
            Дипломированный психолог с опытом работы по методу «Позитивная
            психотерапия», сертифицированный бизнес-коуч, трансформационный коуч
            работаю с метафорическими ассоциативными картами.
          </div>
        </div>
      </div>

      <div class="team__block">
        <div class="team__block-image">
          <div class="team__block-title --no-image">No image</div>
        </div>
        <div class="team__block-content">
          <div class="team__block-title">Виктория Коновалова</div>
          <div class="team__block-text">
            Закончила "Школу коучинга" Международный институт интеграционного
            развития Константина Довлатова, курс "Духовная интеграционика" (АНО
            ДПО " МИИР"), лайф-коуч, МАК-коуч, энерго-коуч.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.team {
  background: #fff;
  width: 100%;
  padding: 100px 0;

  &__title {
    font-family: Roboto Slab;
    font-size: 76px;
    line-height: 87px;
    font-weight: normal;
    color: #333;
    text-align: center;
    max-width: 225px;
    margin: 0 auto;
    padding-bottom: 10px;
    border-bottom: 2px solid #fea12b;
  }

  &__content {
    margin-top: 100px;
  }

  &__block {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }

    &-image {
      background: gray;
      width: 500px;
      height: 250px;
      border: 2px solid #696969;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .--no-image {
        font-style: normal;
        font-family: Roboto Slab;
        font-size: 30px;
        line-height: 30px;
        color: #fff;
        text-transform: uppercase;
      }
    }

    &-content {
      font-family: Manrope;
      font-weight: normal;
      margin-left: 25px;
      max-width: 600px;
      width: 100%;
    }

    &-title {
      font-weight: bold;
      font-style: italic;
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 25px;
    }

    &-text {
      color: #696969;
      font-size: 22px;
      line-height: 30px;
    }
  }
}
</style>
