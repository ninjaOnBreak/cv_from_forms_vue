import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      desc: '',
      formerEmployer: '',
      jobTitle: '',
      experience: '',
    },
  },

  mutations: {
    setFirstName(state, firstName) {
      state.formData.firstName = firstName;
    },
    setLastName(state, lastName) {
      state.formData.lastName = lastName;
    },
    setEmail(state, email) {
      state.formData.email = email;
    },
    setPhone(state, phone) {
      state.formData.phone = phone;
    },
    setDesc(state, desc) {
      state.formData.desc = desc;
    },
    setFormerEmployer(state, formerEmployer) {
      state.formData.formerEmployer = formerEmployer;
    },
    setJobTitle(state, jobTitle) {
      state.formData.jobTitle = jobTitle;
    },
    setExperience(state, experience) {
      state.formData.experience = experience;
    },
  },
});
