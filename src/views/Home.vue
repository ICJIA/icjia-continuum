<template>

  <div>

    <introduction />

      <my-body />

    <conclusion />

  </div>

</template>

<script>

    import {
        stripTags, titleCase
    } from '@/utilities'

    import Introduction from '@/components/Introduction'
    import MyBody from '@/components/Body'
    import Conclusion from '@/components/Conclusion'
    import moment from 'moment'


    const description = `There are currently an estimated 2.3 million individuals in U.S. prisons and jails, with 1.5 million meeting DSM-IV medical criteria for addiction. Further, approximately 70 percent of state and 64 percent of federal inmates reported regular drug use prior to imprisonment; about 25 percent of violent offenders in state prisons committed their offenses under the influence of drugs`
    const title = titleCase("PROMISING PRACTICES IN CRIMINAL JUSTICE")
    const created = moment('2017-03-25')
    const type = 'page'
    const status = 'live'

    export default {
        name: 'Home',
        pageData: {
            created,
            description,
            title,
            type,
            status
        },
        mounted() {

            $(function() {
                // Vertical timeline Cody House: https://codyhouse.co/gem/vertical-timeline/
                var timelineBlocks = $('.cd-timeline-block'),
                    offset = 0.8;

                //hide timeline blocks which are outside the viewport
                hideBlocks(timelineBlocks, offset);

                //on scolling, show/animate timeline blocks when enter the viewport
                $(window).on('scroll', function() {
                    (!window.requestAnimationFrame) ?
                    setTimeout(function() {
                        showBlocks(timelineBlocks, offset);
                    }, 100): window.requestAnimationFrame(function() {
                        showBlocks(timelineBlocks, offset);
                    });
                });

                function hideBlocks(blocks, offset) {
                    blocks.each(function() {
                        ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden').removeClass('animated').removeClass('fadeIn');
                    });
                }

                function showBlocks(blocks, offset) {
                    blocks.each(function() {
                        ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in') &&
                            $(this).find('.cd-timeline-content > h2').addClass('animated').addClass('fadeIn') &&
                            $(this).find('.cd-timeline-content > p').addClass('animated').addClass('fadeIn');
                    });
                }
            });


        },

        metaInfo: {
            title: title,
            meta: [{
                vmid: 'description',
                name: 'description',
                content: stripTags(description)
            }]
        },
        components: {

            Introduction,
            MyBody,
            Conclusion

        },
        data() {
            return {
                title,


            }
        },
        methods: {

        }
    }

</script>

<style>

  .sweet-modal-overlay {
      background: rgba(100, 100, 100, 0.9) !important;
  }
  .sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab {
      font-weight: 700 !important;
      font-size: 16px !important;
      text-transform: uppercase !important;
      font-family: 'Lato', sans-serif !important;
  }
  .sweet-modal ul.sweet-modal-tabs li.sweet-modal-tab.active {
      background: #eee !important;
  }
  .btn {
      color: #fff !important
  }
  a:hover {
      cursor: pointer;
  }
  .modal-dialog {
      max-width: 1024px;
  }

</style>
