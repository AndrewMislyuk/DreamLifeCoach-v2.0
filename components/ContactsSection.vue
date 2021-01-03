<template>
  <div class="contacts">
    <div class="contacts__wrapper">
      <div class="contacts__title">Обратная связь</div>

      <div class="contacts__content">
        <form @submit.prevent="sendForm" class="contacts__form">
          <div
            class="contacts__form-input"
            :class="{
              '--wrong': $v.name.$error,
              '--success': !$v.name.$invalid,
            }"
          >
            <input
              type="text"
              v-model.trim="$v.name.$model"
              placeholder="Как к вам обращаться?"
            />

            <div class="contacts__form-success">
              <i class="fas fa-check"></i>
            </div>
            <div class="contacts__form-wrong">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <div
            class="contacts__form-input"
            :class="{
              '--wrong': $v.email.$error,
              '--success': !$v.email.$invalid,
            }"
          >
            <input
              type="text"
              v-model.trim="$v.email.$model"
              placeholder="Ваш email"
            />

            <div class="contacts__form-success">
              <i class="fas fa-check"></i>
            </div>
            <div class="contacts__form-wrong">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <div class="contacts__form-phone">
            <Phone v-model.trim="phone" />
          </div>

          <div
            class="contacts__form-select"
            :class="{
              '--wrong': $v.course.$error,
              '--success': !$v.course.$invalid,
            }"
          >
            <Select
              v-model="$v.course.$model"
              :options="list"
              placeholder="Какой курс вас заинтересовал?"
            />
          </div>

          <div
            class="contacts__form-textarea"
            :class="{
              '--wrong': $v.notation.$error,
              '--success': !$v.notation.$invalid,
            }"
          >
            <textarea
              v-model.trim="$v.notation.$model"
              placeholder="Удобный способ связи(Viber/Telegram/WhatsApp)"
            ></textarea>

            <div class="contacts__form-success">
              <i class="fas fa-check"></i>
            </div>
            <div class="contacts__form-wrong">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <button
            class="contacts__form-btn"
            type="submit"
            :class="{ '--disabled': $v.$invalid }"
            :disabled="$v.$invalid"
          >
            Отправить
          </button>
        </form>
        <div class="contacts__info">
          <div class="contacts__info-title">Контакты для связи</div>
          <div class="contacts__info-data">
            <div class="contacts__info-icon">
              <span class="fas fa-phone-square-alt" />
            </div>
            Телефон: (+380)-68-160-35-22
          </div>
          <div class="contacts__info-data">
            <div class="contacts__info-icon">
              <span class="fas fa-envelope" />
            </div>
            Почта: ludmila23kr@gmail.com Почта: pochta@gmail.com
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import Select from '@/components/UI/VSelect/VSelect'
import Phone from '@/components/UI/VPhone/VPhone'

export default {
  components: {
    Select,
    Phone,
  },

  data() {
    return {
      name: '',
      email: '',
      phone: '',
      course: '',
      notation: '',
      list: [
        'Лучшая версия себя',
        'Стать счастливым',
        'Справиться с потерями в жизни',
        'Выйти замуж за 90 дней',
        'Прибыльный бизнес за 90 дней',
        'Преодоление кризисов',
      ],
    }
  },

  validations: {
    name: { required, minLength: minLength(3), maxLength: maxLength(20) },
    email: { email, required },
    phone: { required, minLength: minLength(6), maxLength: maxLength(20) },
    course: { required },
    notation: { required, minLength: minLength(3) },
  },

  methods: {
    sendForm() {
      if (!this.$v.$invalid) {
        console.log(
          this.name,
          this.email,
          this.phone,
          this.course,
          this.notation
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'sass-rem/_rem.scss';

.contacts {
  width: 100%;
  padding: rem(125px 0);

  &__wrapper {
    max-width: rem(1100px);
    margin: 0 auto;

    @include for-tablet-horizontal {
      max-width: rem(700px);
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

    &::before {
      position: absolute;
      content: '';
      background: #252525;
      left: 0;
      bottom: rem(-20px);
      width: rem(45px);
      height: rem(2px);
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: rem(100px auto 0);
    max-width: rem(1000px);

    @include for-tablet-horizontal {
      max-width: rem(700px);
      flex-wrap: wrap;
    }
  }

  &__form {
    width: 70%;

    @include for-tablet-horizontal {
      width: 100%;
      margin: rem(0 auto 75px);
    }

    &-input {
      position: relative;
      margin-bottom: rem(15px);
      width: rem(500px);

      .contacts__form-success {
        position: absolute;
        top: 50%;
        color: #4caf50;
        margin-top: rem(-10px);
        right: rem(-20px);
        opacity: 0;
      }

      .contacts__form-wrong {
        position: absolute;
        top: 50%;
        color: #f81111;
        margin-top: rem(-10px);
        right: rem(-20px);
        opacity: 0;
      }

      &.--success {
        .contacts__form-success {
          opacity: 1;
        }

        input {
          border-color: #4caf50;

          &:focus {
            border-color: #4caf50;
          }
        }
      }

      &.--wrong {
        .contacts__form-wrong {
          opacity: 1;
        }

        input {
          border-color: #f81111;

          &:focus {
            border-color: #f81111;
          }
        }
      }

      input {
        width: 100%;
        height: rem(50px);
        border: rem(1px) solid #ececec;
        color: #333;
        padding: rem(0 25px 0);
        font-size: rem(20px);
        font-family: Monrope;

        &:focus {
          outline: none;
          border-color: #252525;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 8px rgba(233, 209, 102, 0.6);
        }

        &::placeholder {
          color: #818181;
        }
      }
    }

    &-select {
      margin-bottom: rem(15px);
      width: rem(552px);
      box-sizing: border-box;

      &.--wrong {
        border: rem(1px) solid #f81111;
      }

      &.--success {
        border: rem(1px) solid #4caf50;
      }
    }

    &-phone {
      margin-bottom: rem(15px);
      width: rem(552px);
    }

    &-textarea {
      position: relative;
      width: rem(500px);

      .contacts__form-success {
        position: absolute;
        top: 8%;
        color: #4caf50;
        right: rem(-20px);
        opacity: 0;
      }

      .contacts__form-wrong {
        position: absolute;
        top: 8%;
        color: #f81111;
        right: rem(-20px);
        opacity: 0;
      }

      &.--success {
        .contacts__form-success {
          opacity: 1;
        }

        textarea {
          border-color: #4caf50;

          &:focus {
            border-color: #4caf50;
          }
        }
      }

      &.--wrong {
        .contacts__form-wrong {
          opacity: 1;
        }

        textarea {
          border-color: #f81111;

          &:focus {
            border-color: #f81111;
          }
        }
      }

      textarea {
        width: 100%;
        height: rem(200px);
        border: rem(1px) solid #ececec;
        color: #333;
        padding: rem(15px 25px 0);
        font-size: rem(20px);
        font-family: Monrope;
        resize: none;

        &:focus {
          outline: none;
          border-color: #252525;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 8px rgba(233, 209, 102, 0.6);
        }

        &::placeholder {
          color: #818181;
        }
      }
    }

    &-btn {
      margin-top: rem(20px);
      outline: none;
      border: none;
      color: #252525;
      background: #fff;
      border: 1px solid #252525;
      box-sizing: border-box;
      font-size: rem(20px);
      padding: rem(12px 20px);
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: #4caf50;
        color: #fff;
      }

      &.--disabled {
        opacity: 0.6;
        cursor: default;

        &:hover {
          background: #fff;
          color: #252525;
        }
      }
    }
  }

  &__info {
    width: 40%;

    @include for-tablet-horizontal {
      width: 100%;
    }

    &-title {
      font-family: Roboto Slab;
      font-size: rem(30px);
      line-height: rem(30px);
      font-weight: bold;
      color: #333;
      width: rem(325px);
      padding-bottom: rem(10px);
      border-bottom: rem(2px) solid #4caf50;
      margin-bottom: rem(50px);
    }

    &-data {
      color: #818181;
      font-size: rem(18px);
      line-height: rem(18px);
      font-family: Manrope;
      margin-bottom: rem(20px);
      display: flex;
      align-items: center;
      justify-content: flex-start;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &-icon {
      margin-right: rem(15px);
    }
  }
}
</style>
