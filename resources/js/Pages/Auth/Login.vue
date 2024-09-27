<template>
    <Head>
        <title>LogIn</title>
    </Head>
    <div class="flex justify-center items-center min-h-screen bg-gray-200" style="background: url('/images/login-bg.jpg'); background-size: cover;">
        <div class="w-full max-w-md p-6 rounded-md shadow-lg" style="background: linear-gradient(to top left, #b5895f, #d3ad7f, #f0d4b5);">
            <h1 class="text-2xl font-bold mb-4 text-center text-gray-800">Login</h1>
            <form @submit.prevent="submit">
                <div class="mb-4">
                    <label for="email" class="block mb-1 font-bold text-gray-800">Email Address:</label>
                    <input v-model="form.email" type="email" name="email" id="email" required
                        class="border border-gray-300 w-full px-4 py-3 rounded-md focus:outline-none focus:border-blue-500 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md">
                </div>
                <div class="mb-4">
                    <label for="password" class="block mb-1 font-bold text-gray-800">Password:</label>
                    <input v-model="form.password" type="password" name="password" id="password" required
                        class="border border-gray-300 w-full px-4 py-3 rounded-md focus:outline-none focus:border-blue-500 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md">
                </div>
                <div class="mb-4 text-center">
                    <button type="submit"
                        class="bg-[#6b4c3a] text-white px-12 py-2 rounded-md hover:bg-[#7a5c4b] focus:outline-none focus:bg-[#7a5c4b] transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md">Log in</button>
                </div>
            </form>
            <div class="text-center mt-4 border-t border-gray-300 pt-4">
                <p class="mb-2 font-bold text-gray-800">Don't have an account?</p>
                <a href="/register" class="text-white hover:text-[#d1c6b8] transition duration-300 ease-in-out hover:underline">Register Here</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';

let form = useForm({
    email: '',
    password: ''
});

let submit = () => {
    form.post('/login');
}
</script>
