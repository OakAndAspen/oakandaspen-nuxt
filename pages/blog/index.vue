<template>

</template>

<script>
    export default {
        name: "BlogIndex",
        created() {
            let articles = this.$t('blog.articles');
            let max = 1;
            for (let a of articles) if (a.number > max) max = a.number;
            this.$router.push("/blog/" + max);
        }
    }
</script>
