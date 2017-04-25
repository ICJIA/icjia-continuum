<template>
<div>


<section id="section-0" class="page">
Home page

</section>






</div>

</template>

<script>


    const description = `Home`
    const title = "Home"
    const created = '2017-03-26'
    const type  = 'page'
    const status = 'live'


    import { stripTags } from '@/utilities'

    export default {
      name: 'Home',
      pageData:  {
        created,
        description,
        title,
        type,
        status
      },
      mounted () {
        //this.$ga.trackPage('/home', title, window.location.href)
      },

      metaInfo: {
          title: title,
          meta: [
            { vmid: 'description', name: 'description', content: stripTags(description)}
        ]
      },
        components: {


        },
        data () {
          return {
            title
          }
        },
    }
</script>

<style scoped>
#section-0 {background-color: #fff; color: #444; padding-bottom: 10px;}

#section-1 {background-color: #eee; padding-top: 0px; padding-bottom: 50px;}

.section-title a {color: #fff}
.section-title a:hover {text-decoration: none; color: #aaa}
.fp-subhead {margin-top: 30px; padding-bottom: 10px; border-bottom: 1px solid #ccc; margin-bottom: 15px}

</style>
