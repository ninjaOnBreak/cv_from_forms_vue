<template>
  <div class="form-vertical">
    <div>
      <h2 class="p-4">Employment History (2/3)</h2>
      <form>
        <div class="form-group my-3">
          <label for="formerEmployer">Employer</label>
          <input
            type="text"
            v-model="formerEmployer"
            id="formerEmployer"
            class="form-control"
            @blur="$v.formerEmployer.$touch()"
            :class="{
              'is-invalid': $v.formerEmployer.$error,
              'is-valid': !$v.formerEmployer.$error && $v.formerEmployer.$dirty,
            }"
          />
          <div v-if="$v.formerEmployer.$error" class="invalid-feedback">
            <p v-if="!$v.formerEmployer.required">
              Former employer is required
            </p>
            <p v-if="!$v.formerEmployer.minLength">
              Former employer must be at least 3 characters long
            </p>
          </div>
        </div>

        <div class="form-group my-3">
          <label for="jobTitle">Job title</label>
          <input
            type="text"
            v-model="jobTitle"
            id="jobTitle"
            class="form-control"
            @blur="$v.jobTitle.$touch()"
            :class="{
              'is-invalid': $v.jobTitle.$error,
              'is-valid': !$v.jobTitle.$error && $v.jobTitle.$dirty,
            }"
          />
          <div v-if="$v.jobTitle.$error" class="invalid-feedback">
            <p v-if="!$v.jobTitle.required">Job title is required</p>
            <p v-if="!$v.jobTitle.minLength">
              Job title must be at least 3 characters long
            </p>
          </div>
        </div>

        <div class="form-group my-3">
          <label for="desc">Experience</label>
          <textarea
            type="text"
            v-model="experience"
            id="experience"
            placeholder="e.g. Relevant projects finished in the past"
            rows="6"
            class="form-control"
            @blur="$v.experience.$touch()"
            :class="{
              'is-invalid': $v.experience.$error,
              'is-valid': !$v.experience.$error && $v.experience.$dirty,
            }"
          />
          <div v-if="$v.experience.$error" class="invalid-feedback">
            <p v-if="!$v.experience.required">Experience is required</p>
            <p v-if="!$v.experience.minLength">
              Experience must be at least 30 characters long
            </p>
          </div>
        </div>

        <div class="form-group d-flex justify-content-center p-3">
          <router-link
            tag="button"
            class="btn btn-primary mx-auto"
            :class="{ disabled: checkButton }"
            to="/education"
          >
            Next - Education
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'WorkDataForm',

  computed: {
    checkButton() {
      if (
        this.$v.formerEmployer.$dirty &&
        this.$v.jobTitle.$dirty &&
        this.$v.experience.$dirty
      ) {
        return !this.$v.$anyError ? false : true;
      } else return true;
    },

    formerEmployer: {
      get() {
        return this.$store.state.formData.formerEmployer;
      },
      set(value) {
        this.$store.commit('setFormerEmployer', value);
      },
    },

    jobTitle: {
      get() {
        return this.$store.state.formData.jobTitle;
      },
      set(value) {
        this.$store.commit('setJobTitle', value);
      },
    },

    experience: {
      get() {
        return this.$store.state.formData.experience;
      },
      set(value) {
        this.$store.commit('setExperience', value);
      },
    },
  },

  validations: {
    formerEmployer: { required, minLength: minLength(3) },
    jobTitle: { required, minLength: minLength(3) },
    experience: { required, minLength: minLength(9) },
  },
};
</script>
<style>
.form-vertical {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
</style>
