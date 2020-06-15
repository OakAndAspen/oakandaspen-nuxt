<template>
    <footer id="TheFooter"
            class="bg-dark">
        <div class="container py-4">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="row">
                        <div class="col-lg-6">
                            <h3 class="mb-4 t-white">
                                <logo/>
                            </h3>
                            <p class="t-gray">{{$t("footer.text")}}</p>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <h4 class="small-caps font-weight-bold mb-4 t-white">
                                {{$t("footer.title1")}}
                            </h4>
                            <p class="t-gray">
                                {{$t("footer.address.street")}}<br/>
                                {{$t("footer.address.city")}}<br/>
                                {{$t("footer.address.country")}}<br/><br/>
                                <span class="t-green">
                                    {{email}}
                                </span>
                            </p>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <h4 class="small-caps font-weight-bold mb-4 t-white">
                                {{$t("footer.title2")}}
                            </h4>
                            <a :href="facebookLink"
                               class="d-block mb-1 small-caps">
                                <fa :icon='["fab", "facebook-f"]'
                                    class="mr-2"/>
                                <span>Facebook</span>
                            </a>
                            <a :href="linkedInLink"
                               class="d-block mb-1 small-caps">
                                <fa :icon='["fab", "linkedin-in"]'
                                    class="mr-2"/>
                                <span>LinkedIn</span>
                            </a>
                            <a :href="gitHubLink"
                               class="d-block mb-1 small-caps">
                                <fa :icon='["fab", "github-alt"]'
                                    class="mr-2"/>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>

                    <hr class="border-secondary"/>

                    <p class="font-weight-bold text-center my-4">
                        <span class="small-caps">
                            {{$t("footer.copyright.line1")}}
                        </span>
                        <logo/>
                        <br/>
                        <span class="small-caps">
                            copyright {{new Date().getFullYear()}} | {{$t("footer.copyright.line2")}}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import Logo from "~/components/Logo.vue";
    import {email, facebookLink, gitHubLink, linkedInLink} from "~/config/app.js";

    export default {
        name: "TheFooter",
        components: {Logo},
        data() {
            return {
                email,
                facebookLink,
                gitHubLink,
                linkedInLink
            }
        }
    }
</script>

<style>
    #TheFooter p {
        font-size: 0.9em;
    }
</style>
