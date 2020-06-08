<template>
    <span class="Badge badge b-green t-white small-caps mr-2 mb-1 p-1">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: "Badge"
    }
</script>

<style>
    .Badge {
        font-size: 0.9em;
    }
</style>
