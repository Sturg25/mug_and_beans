<template>
    <Head>
        <title>Register</title>
    </Head>
    <div class="flex justify-center items-center min-h-screen bg-gray-200" style="background: url('/images/login-bg.jpg'); background-size: cover;">
        <div class="w-full max-w-md p-6 rounded-md shadow-lg" style="background: linear-gradient(to top left, #b5895f, #d3ad7f, #f0d4b5);">
            <h1 class="text-2xl font-bold mb-4 text-center text-gray-800">Registration</h1>
            <form @submit.prevent="submit" method="POST" action="/register">
                <div class="mb-4">
                    <label for="name" class="block mb-1 font-bold text-gray-800">Name:</label>
                    <input v-model="form.name" type="text" name="name" id="name" required
                        class="border border-gray-300 w-full px-4 py-3 rounded-md focus:outline-none focus:border-blue-500 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md">
                    <div v-if="errors.name" class="font-bold text-red-500">{{ errors.name }}</div>
                </div>
                <div class="mb-4">
                    <label for="email" class="block mb-1 font-bold text-gray-800">Email Address:</label>
                    <input v-model="form.email" type="email" name="email" id="email" required
                        class="border border-gray-300 w-full px-4 py-3 rounded-md focus:outline-none focus:border-blue-500 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md">
                    <div v-if="errors.email" class="font-bold text-red-500">{{ errors.email }}</div>
                </div>
                <div class="mb-4">
                    <label for="password" class="block mb-1 font-bold text-gray-800">Password:</label>
                    <input v-model="form.password" type="password" name="password" id="password" required
                        class="border border-gray-300 w-full px-4 py-3 rounded-md focus:outline-none focus:border-blue-500 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md">
                    <!-- <div v-if="errors.password" class="font-bold text-red-500">{{ errors.password }}</div> -->
                </div>
                <div class="mb-4">
                    <label for="password_confirmation" class="block mb-1 font-bold text-gray-800">Confirm Password:</label>
                    <input v-model="form.password_confirmation" type="password" name="password_confirmation"
                        id="password_confirmation" required
                        class="border border-gray-300 w-full px-4 py-3 rounded-md focus:outline-none focus:border-blue-500 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md">
                    <!-- <div v-if="errors.password_confirmation" class="font-bold text-red-500">{{ errors.password_confirmation }}</div> -->
                    <div v-if="errors.password" class="font-bold text-red-500">{{ errors.password }}</div>
                </div>
                <div class="text-center">
                    <button type="submit"
                        class="bg-[#6b4c3a] text-white px-12 py-2 rounded-md hover:bg-[#7a5c4b] focus:outline-none focus:bg-[#7a5c4b] transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { router } from '@inertiajs/vue3';
defineProps({ errors: Object });
let form = reactive({
    'name': '',
    'email': '',
    'password': '',
    'password_confirmation': ''
});
let submit = () => {
    router.post('/register', form);
};
</script>
