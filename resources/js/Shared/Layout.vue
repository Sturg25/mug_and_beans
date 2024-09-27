<template>
    <main>
        <div class="color">
            <header class="ml-10 flex items-center p-2 justify-between"> <!-- Added justify-between -->
                <div class="flex items-center"> <!-- Added wrapper for left side items -->
                    <Link class="w-10 h-10 mb-3" href="/"><img src="/images/logo.png"></Link>
                    <Link class="font-bold ml-9 text-white hover:underline text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);" href="/">Home</Link>
                    <Link class="font-bold ml-6 text-white hover:underline" href="/products">Products</Link>
                    <Link class="font-bold ml-6 text-white hover:underline" href="/about">About</Link>
                    <div class="ml-20">
                        <!-- Your search input can go here -->
                    </div>
                </div>
                
                <div class="flex items-center mr-5"> <!-- Added margin to the right -->
    <div class="text-white ml-20 h-[50px] p-2 rounded-sm hover:border-gray-100 cursor-pointer transition-colors duration-200">
        <Link v-if="$page.props.auth.user" href="/address">
            <div class="flex items-center justify-center">
                <MapMarkerOutlineIcon class="pt-2 -ml-1" fillColor="#f5f5f5" />
                <div>
                    <div class="text-[13px] text-white font-extrabold">
                        <span>Delivery to {{ $page.props.auth.user.name }}</span>
                    </div>
                    <div class="text-[15px] text-white -mt-1.5 font-extrabold">
                        <span v-if="$page.props.auth.address">
                            {{ $page.props.auth.address.city }} {{ $page.props.auth.address.postcode }}
                        </span>
                        <span v-else>Add address</span>
                    </div>
                </div>
            </div>
        </Link>
        <div v-else class="flex items-center justify-center">
            <MapMarkerOutlineIcon class="pt-2 -ml-1" fillColor="#4a3c28" />
            <div>
                <div id="hello" class="text-[13px] text-gray-300 font-extrabold">
                    <span>Hello</span>
                    <div class="text-[15px] text-white -mt-1.5 font-extrabold">Select your address</div>
                </div>
            </div>
        </div>
    </div>

    <div class="ml-20">
        <Link href="/cart" class="relative">
            <span class="absolute top-0 right-[10px] w-[14px] h-[14px] rounded-full bg-gray-900 text-orange-400 flex items-center justify-center font-extrabold text-xs">{{ cartStore.cart.length }}</span>
            <CartMinusIcon fillColor="#FCFCFC" :size="40" class="-mt-0.5" />
        </Link>
    </div>

    <div class="flex ml-15">
    <template v-if="!user">
        <div class="font-bold ml-6 text-white hover:underline" style="color: white;">
            <Link href="/login" :active="$page.component == 'Login'" class="nav-link">Login</Link>
        </div>
        <div class="font-bold ml-6 text-white hover:underline" style="color: white ;">
            <Link href="/register" :active="$page.component == 'Register'" class="nav-link">Register</Link>
        </div>
    </template>
    <template v-else>
        <div class="font-bold ml-6 text-white hover:underline">
            <Link href="/logout" method="post" class="nav-link">Log Out</Link>
        </div>
        <div class="font-bold ml-6 text-white hover:underline">
            <Link href="/profile" :active="$page.component == 'Index'" class="nav-link">{{ user.name }}</Link>
        </div>
    </template>
</div>

</div>

            </header>
        </div>
        <article>
            <slot />
        </article>
    </main>
</template>
<script setup>
import CartMinusIcon from 'vue-material-design-icons/CartMinus.vue';
import MapMarkerOutlineIcon from 'vue-material-design-icons/MapMarkerOutline.vue';
import { Link } from '@inertiajs/vue3';
import { computed, toRefs } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { useCartStore } from '../Store/cart';
const cartStore = useCartStore()
const page = usePage();
const user = computed(() => page.props.auth.user);



</script>
<style scoped>
.color {
    background: linear-gradient(135deg, #b5895f, #d3ad7f, #f0d4b5);
}
#hello{
    margin-top:-1em;
}
</style>
