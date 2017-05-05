<template lang="html">
  <div class="">
    <!-- Sidebar -->
        <nav id="sidebar-wrapper">
            <ul class="sidebar-nav">


                <li>
                    <a href="#section-0" v-scroll-to="'#section-0'" class="active">Introduction</a>
                    <ul class="subnav">
                      <li style="font-size: 12px">
                        <a href="#defining-evidence-based-practices" v-scroll-to="{el: '#defining-evidence-based-practices',offset: -70}" >Defining EB Practices
                        </a>
                      </li>
                      <li style="font-size: 12px">
                        <a href="#evidence-based-risk-and-protective-factors" v-scroll-to="{el: '#evidence-based-risk-and-protective-factors',offset: -70}" >
                          EB Risk and Protective Factors
                        </a>
                        </li>
                      <li style="font-size: 12px">
                        <a href="#references" v-scroll-to="{el: '#references',offset: -30}" >
                          References
                        </a></li>
                    </ul>
                </li>
                <li>
                    <a href="#section-1" v-scroll-to="{el: '#section-1',offset: -50}" >Prevention Programs</a>
                    <ul class="subnav">
                      <li style="font-size: 12px">
                        <a href="#dsection-1i0" v-scroll-to="{el: '#section-1',offset: -50}" >Intercept 0
                        </a>
                      </li>
                    </ul>
                </li>
                <li>
                    <a href="#section-2" v-scroll-to="{el: '#section-2',offset: -50}" >Law Enforcement</a>
                    <ul class="subnav">
                      <li style="font-size: 12px">
                        <a href="#section-2i1" v-scroll-to="{el: '#section-2',offset: -50}" >Intercept 1
                        </a>
                      </li>
                      <li style="font-size: 12px">
                        <a href="#section-2i1" v-scroll-to="{el: '#section-2i2',offset: -80}" >Intercept 2
                        </a>
                      </li>
                    </ul>
                </li>
                <li>
                    <a href="#conclusion" v-scroll-to="{el: '#conclusion',offset: -50}">Conclusion</a>
                </li>

            </ul>
        </nav>
        <!-- /#sidebar-wrapper -->
        <section class="navbar navbar-inverse navbar-fixed-top" id="topnav">
  <div class="container-fluid">

    <div class="navbar-header">

      <div class="navbar-brand" id="menu-toggle">

        <!-- <button class="hamburger hamburger--arrow" type="button" >
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button> -->
        <span id="burger"><i class="fa fa-1x fa-bars " ></i></span>


        &nbsp;&nbsp;<span class="text-center" id="nav-title">REDUCING SUBSTANCE USE DISORDERS<span id=
          "full-title"> AND RELATED OFFENDING</span></span>
        </div>

    </div>



  </div><!-- /.container-fluid -->
</section>





  </div>

</template>

<script>
export default {

  data () {
    return {
      isActive: true
    }
  },

  methods: {

   },

  mounted() {



$(window).resize(function() {
      if ($('#wrapper').hasClass("toggled")) {
          $("#wrapper").removeClass("toggled");
      }
});


$('ul#sidebar-nav li a').click(function(e) {
        e.preventDefault();
        //$('a').removeClass('active');
        //$(this).addClass('active');
    });



      $(function() {

        $("#menu-toggle").click(function(e) {
          e.preventDefault();
          if ($('#wrapper').hasClass("toggled")) {
              $("#wrapper").removeClass("toggled");
          } else {
            $("#wrapper").addClass("toggled");
          }
        });
      })
    }



}
</script>

<style lang="css">



/* Toggle Styles */

#wrapper {
    padding-left: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled {
    padding-left: 250px;
}

#sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    left: 250px;
    width: 0;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: #000;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
    width: 250px;
}

#page-content-wrapper {
    width: 100%;
    position: absolute;
    padding: 0;
}

#wrapper.toggled #page-content-wrapper {
    position: absolute;
    margin-right: -250px;
}

/* Sidebar Styles */

.sidebar-nav {
    position: absolute;
    top: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 15px;
}

.sidebar-nav li {
    text-indent: 20px;
    line-height: 32px;
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #fff;
}

.sidebar-nav li a:hover {
    text-decoration: none;
    color: #fff;
    background: #bbb
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
    text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
    height: 95px;
    font-size: 16px;
    line-height: 20px;
    background: #fff;
    padding-top: 20px;
}

.sidebar-nav > .sidebar-brand a {
    color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
    color: #fff;
    background: #ccc;
}

@media(min-width:768px) {
    #wrapper {

				padding: 0;
    }

    #wrapper.toggled {
        padding-left: 250px;
    }

    #sidebar-wrapper {
        width: 0;
    }

    #wrapper.toggled #sidebar-wrapper {
        width: 250px;
    }

    #page-content-wrapper {
        padding: 0px;
        position: relative;
    }

    #wrapper.toggled #page-content-wrapper {
        position: relative;
        margin-right: 0;
    }
}


li a.active {color: #fff; background: #999}

.navbar-brand:hover { cursor: pointer; cursor: hand; color: #555 }

.navbar-inverse .navbar-brand:focus, .navbar-inverse .navbar-brand {
    color: #fff;
    background-color: transparent;
    font-weight: 900;
}

ul.subnav {list-style: none; margin-left: 15px; margin-bottom: 10px;}

ul.subnav a {color: #aaa;}


.navbar-brand:hover {color: #aaa !important}

.hamburger {padding: 0; color: #fff !important}
.hamburger-box {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 10px;
}


</style>
