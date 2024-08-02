<script setup lang="ts">
import {onMounted, ref} from "vue";

const user = ref({
  email: null,
  name: "",
  password: "",
  isStudent: true,
});

const submit = async () => {
  const response = await fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  });
  console.log(response);
}
</script>

<template>
  <div class="m-4 mt-10 flex flex-col items-center sm:w-auto">
    <div class="w-full sm:w-96">
      <div>
        <h2 class="text-3xl font-bold text-center text-primary">
          Register
        </h2>
      </div>
      <div class="flex flex-col gap-2 mt-6">
        <label class="input input-bordered flex items-center gap-2">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
          >
            <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
            />
            <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
            />
          </svg>
          <input
              v-model="user.email"
              type="text"
              class="grow"
              :placeholder="
                            user.isStudent ? 'University Email' : 'Email'
                        "
          />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
          >
            <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
            />
          </svg>
          <input
              v-model="user.name"
              type="text"
              class="grow"
              placeholder="Name"
          />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
          >
            <path
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd"
            />
          </svg>
          <input
              v-model="user.password"
              type="password"
              class="grow"
              placeholder="Password"
          />
        </label>
        <label class="label font-semibold">
          <span class="label-text">I'm a student</span>
          <input
              v-model="user.isStudent"
              type="checkbox"
              class="toggle toggle-primary"
              checked
          />
        </label>
      </div>
      <div class="flex flex-col justify-center items-center mt-10">
        <button class="btn btn-primary no-animation min-w-52" @click="submit" type="submit">
          Register
        </button>
        <div class="mt-5">
          or
          <router-link
              to="/auth/login"
              class="link link-primary font-semibold"
          >Log In
          </router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
