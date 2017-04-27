<template lang="html">
  <div class="">
    <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        Start Bootstrap
                    </a>
                </li>
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Shortcuts</a>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->
        <nav class="navbar navbar-inverse navbar-static-top">
  <div class="container-fluid">

    <div class="navbar-header">

      <div class="navbar-brand" id="menu-toggle">
        <span ><i class="fa fa-1x fa-bars " style="color: #fff"></i></span>
        &nbsp;&nbsp;<span class="text-center">REDUCING SUBSTANCE USE DISORDERS AND RELATED OFFENDING</span>
        </div>

    </div>



  </div><!-- /.container-fluid -->
</nav>





  </div>

</template>

<script>
export default {

  mounted() {

    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();


//   $(window).resize(function() {
//     delay(function(){
//       if ($('#wrapper').hasClass("toggled")) {
//           $("#wrapper").removeClass("toggled");
//       }
//     }, 0);
// });


$(window).resize(function() {
      if ($('#wrapper').hasClass("toggled")) {
          $("#wrapper").removeClass("toggled");
      }
});

$( "#page-content-wrapper" ).on( "click", function() {

      $("#wrapper").removeClass("toggled");
  
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
}

.sidebar-nav li {
    text-indent: 20px;
    line-height: 40px;
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #999999;
}

.sidebar-nav li a:hover {
    text-decoration: none;
    color: #fff;
    background: rgba(255,255,255,0.2);
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
    text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
    color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
    color: #fff;
    background: none;
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





</style>
