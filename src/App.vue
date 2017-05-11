<template>

  <div id="wrapper" >

    <div id="outdated"></div>

<navbar />
<!-- <keep-alive> -->
<transition name="fade">
                      <router-view class="view"></router-view>
                      </transition>

                     <!-- </keep-alive> -->




<my-footer />
</div>
</template>

<script>
import Navbar from '@/components/Sidebar'
import MyFooter from '@/components/Footer'
import metaInfo from '@/meta'


export default {

    name: 'app',
    metaInfo,
    created: function() {
        //console.log(this.$route.path)
    },

    mounted: function() {


        // Select all links with hashes
        $('#sidebar-wrapper a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .not('a.collapse-link')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    var pageOffset = $(this).data("offset") || 0

                    console.log(pageOffset)
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top + pageOffset
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            //$(this).removeClass("active")
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });



        $(window).resize(function() {
            if ($('#wrapper').hasClass("toggled")) {
                $("#wrapper").removeClass("toggled");
            }
        });




        $(function() {

            /////////////////////////////////////////////////////////
            // custom scrollspy for adding 'active' class to sidenav
            /////////////////////////////////////////////////////////
            $("#menu-toggle").click(function(e) {
                e.preventDefault();
                if ($('#wrapper').hasClass("toggled")) {
                    $("#wrapper").removeClass("toggled");
                } else {
                    $("#wrapper").addClass("toggled");
                }
            });


            // Sidebar close helper. This is hacky -- not sure how else to target everything but buttons
            // $('#wrapper').click(function(e) {
            //   var nn = e.target.nodeName
            //   console.log('node: ',nn)
            //   if (nn === 'NAV' || nn === 'DIV' || nn === 'SECTION' || nn === 'P' || nn === 'LI') {
            //     $("#wrapper").removeClass("toggled");
            //   }
            // })

            /////////////////////////////////////////////////////////
            // custom scrollspy for adding 'active' class to sidenav
            /////////////////////////////////////////////////////////
            let sections = $('section')
            let nav = $('nav#sidebar-wrapper')

            // Height of fixed width top nav
            let nav_height = 55

            $(window).on('scroll', function() {
                let cur_pos = $(this).scrollTop();
                sections.each(function() {
                    let top = $(this).offset().top - nav_height,
                        bottom = top + $(this).outerHeight();
                    if (cur_pos >= top && cur_pos <= bottom) {
                        //console.log('Section ID: ', $(this).attr('id'))
                        nav.find('a.section').removeClass('active');
                        nav.find('a.section[href="#' + $(this).attr('id') + '"]').addClass('active');
                    }
                });
            });



            /////////////////////////////////////////////////////////
            // toggle sidenav on startup if browser > 768px
            /////////////////////////////////////////////////////////
            let windowsize = $(window).width();
            if (windowsize > 768) {
                $("#wrapper").addClass("toggled");
            }

            /////////////////////////////////////////////////////////
            // Outdated browser plugin. Thumbs down on anything less than IE11.
            /////////////////////////////////////////////////////////
            outdatedBrowser({
                bgColor: '#f25648',
                color: '#ffffff',
                lowerThan: 'borderImage',
                languagePath: '/static/outdated-browser/outdatedbrowser/lang/en.html'
            })
        });


        // Google Analytics download auto tracking script
        // Automatically tracks clicked links
        // if (typeof jQuery != 'undefined') {
        //     jQuery(document).ready(function($) {
        //         var filetypes = /\.(zip|exe|pdf|doc*|xls*|ppt*|mp3)$/i;
        //         var baseHref = '';
        //         if (jQuery('base').attr('href') != undefined)
        //             baseHref = jQuery('base').attr('href');
        //         jQuery('a').each(function() {
        //             var href = jQuery(this).attr('href');
        //             if (href && (href.match(/^https?\:/i)) && (!href.match(document.domain))) {
        //                 jQuery(this).click(function() {
        //                     var extLink = href.replace(/^https?\:\/\//i, '');
        //                     ga('send', 'event', 'External Link', 'click', extLink);
        //                     if (jQuery(this).attr('target') != undefined && jQuery(this).attr('target').toLowerCase() != '_blank') {
        //                         setTimeout(function() {
        //                             location.href = href;
        //                         }, 200);
        //                         return false;
        //                     }
        //                 });
        //             } else if (href && href.match(/^mailto\:/i)) {
        //                 jQuery(this).click(function() {
        //                     var mailLink = href.replace(/^mailto\:/i, '');
        //                     ga('send', 'event', 'Email Link', 'click', mailLink);
        //                 });
        //             } else if (href && href.match(filetypes)) {
        //                 jQuery(this).click(function() {
        //                     var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
        //                     var filePath = href;
        //                     ga('send', 'event', 'Download Link', 'click-' + extension, filePath);
        //                     if (jQuery(this).attr('target') != undefined && jQuery(this).attr('target').toLowerCase() != '_blank') {
        //                         setTimeout(function() {
        //                             location.href = baseHref + href;
        //                         }, 200);
        //                         return false;
        //                     }
        //                 });
        //             }
        //         });
        //     });
        // }




    },
    components: {
        Navbar,
        MyFooter,
    }
}
</script>

<style lang="scss">

// @import "./scss/base";

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

#wrapper {z-index: -1}
.btn-modal {z-index: 10000}

</style>
