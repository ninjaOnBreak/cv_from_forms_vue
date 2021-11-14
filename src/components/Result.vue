<template>
  <div class="container">
    <div class="d-flex flex-column align-items-center cv-box">
      <h3>{{ useFirstName }} {{ useLastName }}</h3>
      <hr class="w-50 mx-auto m-3" />
      <p>E-mail: {{ useEmail }}</p>
      <p>Phone: {{ usePhone }}</p>
      <p>{{ useDesc }}</p>
      <hr class="w-50 mx-auto m-3" />
      <p>Worked at: {{ useFormerEmployer }}</p>
      <p>Job title: {{ useJobTitle }}</p>
      <p>Experience: {{ useExperience }}</p>
      <hr class="w-50 mx-auto m-3" />
      <p>Learned at: {{ useSchool }}</p>
      <p>{{ useDegree }}</p>
      <p>What I learned: {{ useEducation }}</p>
      <p>I like: {{ useHobby }}</p>
      <button class="btn btn-primary mx-auto my-5">Download PDF</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      useFirstName: (state) => state.formData.firstName,
      useLastName: (state) => state.formData.lastName,
      useEmail: (state) => state.formData.email,
      usePhone: (state) => state.formData.phone,
      useDesc: (state) => state.formData.desc,
      useFormerEmployer: (state) => state.formData.formerEmployer,
      useJobTitle: (state) => state.formData.jobTitle,
      useExperience: (state) => state.formData.experience,
      useSchool: (state) => state.formData.school,
      useDegree: (state) => state.formData.degree,
      useEducation: (state) => state.formData.education,
      useHobby: (state) => state.formData.hobby,
    }),
  },
};
</script>

<style scoped>
.cv-box {
  margin: 30px;
}
</style>
