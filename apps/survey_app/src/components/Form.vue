<template>
  <form class="w-full max-w-lg mx-auto">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="fullname">
          Full Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded
        py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="fullname" type="text" placeholder="Vivek">
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email_address">
          Email
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4
        leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email_address" type="text" placeholder="you@email.com">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="phone">
          Phone Number
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded
        py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text"
               placeholder="123-456-7890">
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="occupation">
          Designation
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4
        leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="occupation" type="text" placeholder="Sr Technical Architect">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="org">
          Organization
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded
        py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="org" type="text" placeholder="THE KPOLOGY">
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="experience">
          Professional Experience
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4
        leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="experience" type="number" placeholder="11">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="tech">
          Favourite Technology
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded
        py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="tech" type="text" placeholder="Python">
      </div>
      <button type="submit" class="bg-green-500 hover:bg-cyan-200 text-white hover:text-red-600 font-bold px-4 ml-5 rounded-full">
        Submit
      </button>
      <button type="reset" class="bg-red-500 hover:bg-cyan-200 text-white hover:text-red-600 font-bold px-5 ml-5 rounded-full">
        Reset
      </button>
    </div>

      </form>
</template>

<script>
export default {
  name: "Form"
}
</script>

<style scoped>

</style>
