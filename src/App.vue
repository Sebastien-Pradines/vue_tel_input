<template>
  <div id="app">
    <h1>Vue Tel Input Playground</h1>
    <div style="width: 500px; margin: 20px auto;">
      <vue-tel-input v-model="phone" v-bind="bindProps"></vue-tel-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      phone: "0123456789",
      bindProps: {
        mode: "international",
        defaultCountry: "FR",
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: false,
        placeholder: "Enter a phone number",
        required: false,
        enabledCountryCode: false,
        enabledFlags: true,
        preferredCountries: ["AU", "BR"],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: "off",
        name: "telephone",
        maxLen: 25,
        wrapperClasses: "",
        inputClasses: "",
        dropdownOptions: {
          disabledDialCode: false
        },
        inputOptions: {
          showDialCode: false
        }
      }
    };
  }
};
</script>
