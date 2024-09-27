<template>
    <Head>
        <title>About</title>
    </Head>
    <!-- component -->
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">


<section class="relative pt-16 bg-blueGray-50">
<div class="container mx-auto">
  <div class="flex flex-wrap items-center">
    <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg" id="background">
        <img alt="..." src="../images/imgAbout.jpg">
        <blockquote class="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
          </svg>
          <h4 class="text-xl font-bold text-white text-shadow">
            Brewed to Perfection, Just for You!
        </h4>
        <p class="text-md font-light mt-2 text-white text-shadow">
            Welcome to a coffee lover's paradise! Our place isn’t just about damn good coffee; it’s about creating unforgettable moments. From chill catch-ups with friends to tackling that work project, we’ve got the perfect vibe and the caffeine to keep you going. Dive into a world of flavor and let’s make some memories!
        </p>
        </blockquote>
      </div>
    </div>

    <div class="w-full md:w-6/12 px-4" id="article">
        <h2 class="text-shadow">About Us</h2>
        <div id="line"></div>
        <p class="text-shadow">
            Here at Mug & Beans Co., where we’re all about serving up high-quality coffee that hits the spot. Our beans are sourced from the best places around the world and roasted in-house to bring out unique flavors you won’t forget. Whether you’re into a smooth latte or a refreshing cold brew, we’ve got you covered.
            But it’s not just about the coffee; we’re also a community hub. Our cozy space is perfect for catching up with friends, getting some work done, or enjoying a quiet moment with a good book. So come on in, say hi to our friendly baristas, and let us fuel your day!
        </p>
        <div id="icons">
            <a class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>
                        <a class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                </path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
        </div>
    </div>
  </div>
</div>
<!-- component -->
<footer class="dark:bg-gray-900" id="footer">
    <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
    <div class="sm:col-span-2">
        <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white" 
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);">
            Subscribe to our newsletter to get updates.
        </h1>

        <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
            <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-[#f5e3d3] border rounded-lg 
            dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" 
            placeholder="Email Address" style="color: black;">

            <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#6b4c3a] rounded-lg hover:bg-[#5b3d30] focus:ring focus:ring-[#5b3d30] focus:ring-opacity-80">
                Subscribe
            </button>
        </div>
    </div>

    <div>
            <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white" 
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);">Quick Links
        </h1>
        <div class="flex flex-col items-start mt-5 space-y-2">
            <a href="/" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
            <a href="/products" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Products</a>
            <a href="/about" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">About</a>
        </div>
    </div>
</div>


        <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700">

        <div class="flex items-center justify-between">
            <a href="#">
                <img class="w-10 h-10 mb-3" src="/images/logo.png" alt="">
            </a>

            <div class="flex -mx-2">
                <a class="text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
                <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</footer>
</section>
</template>

<script>
import Layout from '../Shared/Layout.vue';

export default{
   layout:Layout
}
</script>

<style scoped>
#background{
    background-color:#d3ad7f;
}
#color{
    color:#d3ad7f;
}
#article h2{
    margin-top:-5em;
    margin-bottom:5em;
    text-align:center;
    font-size:20px;
    font-weight: bold;
}
#line{
    background: #d3ad7f;
    width: 65px;
    height: 3px;
    margin: 0 auto;
    margin-top: -6em;
    margin-bottom: 6em;

}
#article p{
    text-align:center;
    line-height: 2em;
}
#footer{
    background: linear-gradient(135deg, #b5895f, #d3ad7f, #f0d4b5);
}
#icons{
    display:flex;
    align-items:center;
    justify-content: center;
    margin-top:5em;
}
#icons a{
    margin-right:1em;
    padding:2em;
}
.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adjust values as needed */
}
</style>
