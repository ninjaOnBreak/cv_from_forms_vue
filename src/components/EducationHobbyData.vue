<template>
  <div class="form-vertical">
    <div>
      <h2 class="p-4">Education and Hobby (3/3)</h2>
      <form>
        <div class="form-group my-3">
          <label for="school">Name of the school/university, etc.</label>
          <input
            type="text"
            v-model="school"
            id="school"
            class="form-control"
            @blur="$v.school.$touch()"
            :class="{
              'is-invalid': $v.school.$error,
              'is-valid': !$v.school.$error && $v.school.$dirty,
            }"
          />
          <div v-if="$v.school.$error" class="invalid-feedback">
            <p v-if="!$v.school.required">
              Name of the school/university, etc. is required
            </p>
            <p v-if="!$v.school.minLength">
              Name of the school/university, etc. must be at least 3 characters
              long
            </p>
          </div>
        </div>

        <div class="form-group my-3">
          <label for="jobTitle">Degree/name of the course</label>
          <input
            type="text"
            v-model="degree"
            id="degree"
            class="form-control"
            @blur="$v.degree.$touch()"
            :class="{
              'is-invalid': $v.degree.$error,
              'is-valid': !$v.degree.$error && $v.degree.$dirty,
            }"
          />
          <div v-if="$v.degree.$error" class="invalid-feedback">
            <p v-if="!$v.degree.minLength">
              Degree/name of the course must be at least 3 characters long
            </p>
          </div>
        </div>

        <div class="form-group my-3">
          <label for="desc">Education description</label>
          <textarea
            type="text"
            v-model="education"
            id="education"
            placeholder="e.g. Gained skills, speciality..."
            rows="6"
            class="form-control"
            @blur="$v.education.$touch()"
            :class="{
              'is-invalid': $v.education.$error,
              'is-valid': !$v.education.$error && $v.education.$dirty,
            }"
          />
          <div v-if="$v.education.$error" class="invalid-feedback">
            <p v-if="!$v.education.required">
              Education description is required
            </p>
            <p v-if="!$v.education.minLength">
              Education description must be at least 9 characters long
            </p>
          </div>
        </div>

        <div class="form-group my-3">
          <label for="jobTitle">Hobby or interests</label>
          <input
            type="text"
            v-model="hobby"
            id="hobby"
            class="form-control"
            @blur="$v.hobby.$touch()"
            :class="{
              'is-invalid': $v.hobby.$error,
              'is-valid': !$v.hobby.$error && $v.hobby.$dirty,
            }"
          />
          <div v-if="$v.hobby.$error" class="invalid-feedback">
            <p v-if="!$v.hobby.minLength">
              Hobby/interests must be at least 3 characters long
            </p>
          </div>
        </div>

        <div class="form-group d-flex justify-content-center p-3">
          <router-link
            tag="button"
            class="btn btn-primary mx-auto"
            :class="{ disabled: checkButton }"
            to="/summary"
          >
            Next - Summary
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'EducationHobbyDataForm',

  computed: {
    checkButton() {
      if (this.$v.school.$dirty && this.$v.education.$dirty) {
        return !this.$v.$anyError ? false : true;
      } else return true;
    },

    school: {
      get() {
        return this.$store.state.formData.school;
      },
      set(value) {
        this.$store.commit('setSchool', value);
      },
    },

    degree: {
      get() {
        return this.$store.state.formData.degree;
      },
      set(value) {
        this.$store.commit('setDegree', value);
      },
    },

    education: {
      get() {
        return this.$store.state.formData.education;
      },
      set(value) {
        this.$store.commit('setEducation', value);
      },
    },

    hobby: {
      get() {
        return this.$store.state.formData.hobby;
      },
      set(value) {
        this.$store.commit('setHobby', value);
      },
    },
  },

  validations: {
    school: { required, minLength: minLength(3) },
    degree: { minLength: minLength(3) },
    education: { required, minLength: minLength(9) },
    hobby: { minLength: minLength(3) },
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
