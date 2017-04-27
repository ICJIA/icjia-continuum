<template lang="html">

  <!-- Bootstrap 4 navbar -->
  <!-- <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse" id="scrollspy-nav">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="javascript:void(0);" v-scroll-to="'#scrollspy-nav'" style="text-transform: uppercase;">Reducing Substance Use Disorder</a>
      <div class="collapse navbar-collapse " id="navbarCollapse">
        <ul class="navbar-nav mr-auto" style="margin-left: 30px; font-size: 16px; font-weight: 700; ">

          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0);" v-scroll-to="{el: '#section-1',offset: -50}">Prevention Programs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0);" v-scroll-to="{el: '#section-2',offset: -50}">Law Enforcement</a>
          </li>

        </ul>

      </div>
    </nav> -->


    <nav class="navbar navbar-inverse navbar-fixed-top" id="navbar">
      <div class="">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="javascript:void(0);" v-scroll-to="'#navbar'" >Reducing Substance Use Disorder</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <!-- <li class="active"><a href="#">Home</a></li> -->
            <li><a class="nav-link" href="javascript:void(0);" v-scroll-to="{el: '#section-1',offset: -50}">Prevention Programs</a></li>
            <li><a class="nav-link" href="javascript:void(0);" v-scroll-to="{el: '#section-2',offset: -50}">Law Enforcement</a></li>
            <li><a href="#contact">Contact</a></li>

          </ul>
          <!-- <ul class="nav navbar-nav navbar-right">
            <li><a href="../navbar/">Default</a></li>
            <li><a href="../navbar-static-top/">Static top</a></li>
            <li class="active"><a href="./">Fixed top <span class="sr-only">(current)</span></a></li>
          </ul> -->
        </div><!--/.nav-collapse -->
      </div>
    </nav>



</template>

<script>
export default {
}
</script>

<style lang="css">

.navbar-toggler-right {

    bottom: 5px;
}

.navbar-brand {text-transform: uppercase;}
a.navbar-brand {color: #fff !important}
</style>
