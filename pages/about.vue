<template>
    <div>
        <main>
            <h1>This is the About page</h1>
            <h2>This is a translated greeting:</h2>
            <p>{{ $t('greeting') }}</p>
        </main>
    </div>
</template>

<script>
    export default {
        head() {
            return {title: this.$t('about.title')}
        }
    }
</script>
