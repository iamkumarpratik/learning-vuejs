<template>
  <div>
    <div v-show="showSuccessMessage" class="flex justify-center">
      <success-message />
    </div>
    <div v-show="showErrorDialog" class="flex justify-center">
      <error-occured />
    </div>

    <div v-show="showSpinner">
      <spinner />
    </div>
    <form v-show="showForm" class="w-full max-w-lg mx-auto">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="fullname"
          >
            Full Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="fullname"
            type="text"
            placeholder="Vivek"
            v-model="form.name"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email_address"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email_address"
            type="text"
            placeholder="you@email.com"
            v-model="form.email"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="phone"
          >
            Phone Number
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="phone"
            type="text"
            placeholder="123-456-7890"
            v-model="form.mobile"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="occupation"
          >
            Designation
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="occupation"
            type="text"
            placeholder="Sr Technical Architect"
            v-model="form.occupation"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="org"
          >
            Organization
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="org"
            type="text"
            placeholder="THE KPOLOGY"
            v-model="form.organization"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="experience"
          >
            Professional Experience
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="experience"
            type="number"
            placeholder="11"
            v-model="form.years_of_exp"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="tech"
          >
            Favourite Technology
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="tech"
            type="text"
            placeholder="Python"
            v-model="form.favourite_tech"
          />
        </div>
        <button
          type="reset"
          @click="submitForm"
          class="bg-green-500 hover:bg-cyan-200 text-white hover:text-red-600 font-bold px-4 ml-5 rounded-full"
        >
          Submit
        </button>
        <button
          type="reset"
          class="bg-red-500 hover:bg-cyan-200 text-white hover:text-red-600 font-bold px-5 ml-5 rounded-full"
          @click="restFormData"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import SuccessMessage from "./SuccessMessage";
import ErrorOccured from "./ErrorOccured";
import Spinner from "./Spinner";
import axios from "axios";
export default {
  components: {
    SuccessMessage,
    ErrorOccured,
    Spinner,
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        mobile: null,
        occupation: null,
        organization: null,
        years_of_exp: null,
        favourite_tech: null,
      },

      apiResponse: null,
      showSuccessMessage: false,
      showForm: true,
      showErrorDialog: false,
      showSpinner: false,
    };
  },

  name: "Form",

  methods: {
    restFormData() {
      Object.keys(this.form).forEach((key) => {
        this.form[key] = null;
      });
    },

    async submitForm() {
      try {
        this.showForm = false;
        this.showSpinner = true;
        const response = await axios.post(
          "http://localhost:5000/survey/create",
          this.$data.form
        );
        this.apiResponse = response;
        if (this.apiResponse["data"].status === "success") {
          this.showSpinner = false;

          this.showSuccessMessage = true;
        }
      } catch (err) {
        this.showSpinner = false;
        this.showForm = false;
        this.showErrorDialog = true;
      }
    },
  },
};
</script>

<style scoped></style>
