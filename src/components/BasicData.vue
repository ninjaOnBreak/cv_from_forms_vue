<template>
  <div class="form-vertical">
    <div>
      <h2 class="p-4">First - The Basics (1/3)</h2>
      <form>
        <div class="form-group my-3">
          <label for="firstName">First Name</label>
          <input
            type="text"
            v-model="firstName"
            id="firstName"
            class="form-control"
            @blur="$v.firstName.$touch()"
            :class="{
              'is-invalid': $v.firstName.$error,
              'is-valid': !$v.firstName.$error && $v.firstName.$dirty,
            }"
          />
          <div v-if="$v.firstName.$error" class="invalid-feedback">
            <p v-if="!$v.firstName.required">First Name is required</p>
            <p v-if="!$v.firstName.minLength">
              First Name must be at least 3 characters long
            </p>
          </div>
        </div>

        <div class="form-group my-3">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            v-model="lastName"
            id="lastName"
            class="form-control"
            @blur="$v.lastName.$touch()"
            :class="{
              'is-invalid': $v.lastName.$error,
              'is-valid': !$v.lastName.$error && $v.lastName.$dirty,
            }"
          />
          <div v-if="$v.lastName.$error" class="invalid-feedback">
            <p v-if="!$v.lastName.required">Last Name is required</p>
            <p v-if="!$v.lastName.minLength">
              Last Name must be at least 3 characters long
            </p>
          </div>
        </div>

        <div class="form-group my-3">
          <label for="email">E-mail</label>
          <input
            type="email"
            v-model="email"
            id="email"
            class="form-control"
            @blur="$v.email.$touch()"
            :class="{
              'is-invalid': $v.email.$error,
              'is-valid': !$v.email.$error && $v.email.$dirty,
            }"
          />
          <div v-if="$v.email.$error" class="invalid-feedback">
            <p v-if="!$v.email.required">E-mail is required</p>
            <p v-if="!$v.email.email">Provide a proper e-mail address</p>
          </div>
        </div>

        <div class="form-group my-3">
          <label for="email">Phone number</label>
          <input
            type="number"
            v-model="phone"
            id="phone"
            class="form-control"
            @blur="$v.phone.$touch()"
            :class="{
              'is-invalid': $v.phone.$error,
              'is-valid': !$v.phone.$error && $v.phone.$dirty,
            }"
          />
          <div v-if="$v.phone.$error" class="invalid-feedback">
            <p v-if="!$v.phone.required">Phone Number is required</p>
            <p v-if="!$v.phone.minLength">
              Phone number must be at least 9 characters long
            </p>
          </div>
        </div>

        <div class="form-group my-3">
          <label for="desc">A few words about yourself</label>
          <textarea
            type="text"
            v-model="desc"
            id="desc"
            placeholder="e.g. Passionate programmer that loves video games and pizza..."
            rows="6"
            class="form-control"
            @blur="$v.desc.$touch()"
            :class="{
              'is-invalid': $v.desc.$error,
              'is-valid': !$v.desc.$error && $v.desc.$dirty,
            }"
          />
          <div v-if="$v.desc.$error" class="invalid-feedback">
            <p v-if="!$v.desc.required">Description is required</p>
            <p v-if="!$v.desc.minLength">
              Description must be at least 30 characters long
            </p>
          </div>
        </div>

        <div class="form-group d-flex justify-content-center p-3">
          <router-link
            tag="button"
            class="btn btn-primary mx-auto"
            :class="{ disabled: checkButton }"
            to="/work"
          >
            Next - Experience
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'BasicDataForm',

  computed: {
    checkButton() {
      if (
        this.$v.firstName.$dirty &&
        this.$v.lastName.$dirty &&
        this.$v.email.$dirty &&
        this.$v.phone.$dirty
      ) {
        return !this.$v.$anyError ? false : true;
      } else return true;
    },

    firstName: {
      get() {
        return this.$store.state.formData.firstName;
      },
      set(value) {
        this.$store.commit('setFirstName', value);
      },
    },

    lastName: {
      get() {
        return this.$store.state.formData.lastName;
      },
      set(value) {
        this.$store.commit('setLastName', value);
      },
    },

    email: {
      get() {
        return this.$store.state.formData.email;
      },
      set(value) {
        this.$store.commit('setEmail', value);
      },
    },

    phone: {
      get() {
        return this.$store.state.formData.phone;
      },
      set(value) {
        this.$store.commit('setPhone', value);
      },
    },

    desc: {
      get() {
        return this.$store.state.formData.desc;
      },
      set(value) {
        this.$store.commit('setDesc', value);
      },
    },
  },

  validations: {
    firstName: { required, minLength: minLength(3) },
    lastName: { required, minLength: minLength(3) },
    email: { required, email },
    phone: { required, minLength: minLength(9) },
    desc: { required, minLength: minLength(9) },
  },
};
</script>
<style scoped>
.form-vertical {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
</style>
