<template>
    <the-page-layout page-code="blog">
        <div class="row">
            <div class="col-md-8 order-2 order-md-1 pr-4 border-right text-center mb-4">
                <h2 class="t-dark">{{article.title}}</h2>
                <i>Blog #{{article.number}} - {{article.date}}</i>
                <hr/>
                <div class="text-justify" id="BlogMarkdown">
                    # My markdown
                    Some text
                    - Some
                    - bullet
                    - list
                </div>
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
    import moment from "moment";
    import ThePageLayout from "~/layouts/ThePageLayout.vue";

    export default {
        name: "BlogPage",
        components: {ThePageLayout},
        computed: {
            article() {
                let id = this.$route.params.id;
                let articles = this.$t('blog.articles');
                let article = articles.find(a => parseInt(a.number) === parseInt(id));
                article.date = moment(article.date).format("DD.MM.YYYY");
                return article;
            }
        }
    }
</script>
