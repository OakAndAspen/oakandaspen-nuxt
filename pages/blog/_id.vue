<template>
    <the-page-layout page-code="blog">
        <div id="Blog" class="row">
            <div class="col-md-8 order-2 order-md-1 pr-4 border-right text-center mb-4">
                <h2 class="t-dark">{{article.title}}</h2>
                <i>Blog #{{article.number}} - {{article.date}}</i>
                <hr/>
                <div class="text-justify" v-html="content"/>
            </div>
            <div class="col-md-4 pl-4 mb-4 order-1 order-md-2">
                <h4 class="t-dark text-center mb-4">
                    {{$t('blog.title')}}
                </h4>
                <p class="text-justify">
                    {{$t('blog.text')}}
                </p>
                <h4 class="t-dark text-center mb-4">
                    Archive
                </h4>
                <ul class="list-unstyled">
                    <li v-for="a of $t('blog.articles')" :key="a.number"
                        class="my-2">
                        <nuxt-link :to="localePath('/blog/' + a.number)">
                            Blog #{{a.number}} - {{a.title}}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </the-page-layout>
</template>

<script>
    import ThePageLayout from "~/layouts/ThePageLayout.vue";
    import {getMetadata} from "~/utils/utils.js";

    export default {
        name: "Blog",
        components: {ThePageLayout},
        computed: {
            article() {
                let id = this.$route.params.id;
                let articles = this.$t('blog.articles');
                let article = articles.find(a => parseInt(a.number) === parseInt(id));
                if (!article) this.$router.push("/blog");
                return article;
            }
        },
        async asyncData({params}) {
            let response = await import("~/assets/articles/blog" + params.id + ".md");
            return {
                content: response.default,
            };
        },
        data() {
            return {
                content: "<p>Loading...</p>"
            };
        },
        head() {
            return getMetadata({
                title: this.article.title,
                description: "Blog #" + this.article.number + " - Oak&Aspen",
                keywords: (this.article.title + " blog Oak and Aspen").replace(/ /gi, ", "),
                type: "blog"
            });
        }
    }
</script>

<style>
    #Blog img {
        width: 100%;
    }
</style>
