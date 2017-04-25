<template lang="html">
  <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Fixed navbar</a>
      <div class="collapse navbar-collapse " id="navbarCollapse">
        <ul class="navbar-nav mr-auto" >
          <li class="nav-item active">
            <a class="nav-link" href="javascript:void(0);" v-scroll-to="'#section-0'">Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0);" v-scroll-to="{el: '#section-1',offset: -50}">Section 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0);" v-scroll-to="{el: '#section-2',offset: -50}">Section 2</a>
          </li>

        </ul>

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
</style>
