<template lang="html">
  <div class="">
    <!-- Sidebar -->
        <nav id="sidebar-wrapper">
            <ul class="sidebar-nav">


                <li>
                    <a   href="#section-0" class="section">Introduction</a>
                    <ul class="subnav">
                      <li style="font-size: 12px">
                        <a href="#defining-evidence-based-practices" data-offset="-65">Defining EB Practices
                        </a>
                      </li>
                      <li style="font-size: 12px">
                        <a   href="#evidence-based-risk-and-protective-factors" data-offset="-70">
                          EB Risk and Protective Factors
                        </a>
                        </li>
                      <li style="font-size: 12px">
                        <a    href="#references" data-offset="-90" >
                          References
                        </a></li>
                    </ul>
                </li>
                <li>
                    <a    href="#section-1" data-offset="-50" class="section">Prevention Programs</a>
                    <ul class="subnav">
                      <li style="font-size: 12px">
                        <a    href="#section-1i0" data-offset="-95" >Intercept 0
                        </a>
                      </li>
                    </ul>
                </li>
                <li>
                    <a    href="#section-2" data-offset="-50" class="section">Law Enforcement</a>
                    <ul class="subnav">
                      <li style="font-size: 12px">
                        <a    href="#section-2i1" data-offset="-95" >Intercept 1
                        </a>
                      </li>
                      <li style="font-size: 12px">
                        <a href="#section-2i2" data-offset="-95">Intercept 2
                        </a>
                      </li>
                    </ul>
                </li>

                <li>
                    <a    href="#section-3" data-offset="-50" class="section">Jails/Courts</a>
                    <ul class="subnav">
                      <li style="font-size: 12px">
                        <a    href="#section-3i3" data-offset="-95" >Intercept 3
                        </a>
                      </li>

                    </ul>
                </li>


                <li>
                    <a    href="#section-4" data-offset="-50" class="section">Institutions and Reentry</a>
                    <ul class="subnav">
                      <li style="font-size: 12px">
                        <a    href="#section-4i4" data-offset="-95" >Intercept 4
                        </a>
                      </li>

                    </ul>
                </li>


                <li>
                    <a    href="#section-5" data-offset="-50" class="section">Community Corrections</a>
                    <ul class="subnav">
                      <li style="font-size: 12px">
                        <a    href="#section-5i5" data-offset="-95" >Intercept 5
                        </a>
                      </li>

                    </ul>
                </li>




                <li>
                    <a    href="#conclusion" data-offset="-50" class="section">Conclusion</a>
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
    background: #555
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


li a.active {color: #fff; background: #333}

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

*:focus {
    outline: none;
}




</style>
