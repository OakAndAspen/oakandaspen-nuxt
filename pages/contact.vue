<template>
    <the-page-layout page-code="contact">
        <div class="row">
            <div class="col-md-8 mb-4">
                <the-contact-form/>
            </div>
            <div class="col-md-4 mb-4">
                <div>
                    <h4 class="t-dark font-weight-bold">
                        {{$t('contact.title1')}}
                    </h4>
                    <p class="py-4">
                        {{$t('footer.address.street')}}<br/>
                        {{$t('footer.address.city')}}<br/>
                        {{$t('footer.address.country')}}
                    </p>
                    <h4 class="t-dark font-weight-bold">
                        {{$t('contact.title2')}}
                    </h4>
                    <p class="py-2 t-green">
                        {{email}}
                    </p>
                    <p>{{$t('contact.text')}}</p>
                </div>
            </div>
        </div>
    </the-page-layout>
</template>

<script>
    import TheContactForm from "~/components/TheContactForm.vue";
    import ThePageLayout from "~/layouts/ThePageLayout.vue";
    import {email} from "../app.config.js";

    export default {
        name: "Contact",
        components: {TheContactForm, ThePageLayout},
        data() {
            return {
                email
            }
        }
    }
</script>
