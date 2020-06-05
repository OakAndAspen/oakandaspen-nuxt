<template>
    <div>
        <main>
            <h1>This is the Home page</h1>
            <h2>This is a translated message:</h2>
            <p>{{ $t('carousel[0].subtitle') }}</p>
        </main>
    </div>
</template>

<script>
    export default {
        head() {
            return {title: this.$t('carousel[0].subtitle')}
        }
    }
</script>
