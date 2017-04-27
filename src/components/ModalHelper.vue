<template lang="html">
<div class="modalHelper">
  <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background: #aaa; color: #fff">
          <h5 class="modal-title" >
            <slot name="title"></slot></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <!-- <button type="button" v-on:click="printModal()" id="btn-print" class="btn btn-primary" >Print</button> -->
          <a class="btn btn-primary" >Download PDF</a>
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  methods: {
    // printModal: function (event) {
    //   console.log(this.$el.querySelector('.modal-body'))
    //
    // }
  },

  props: ['id'],


}
</script>

<style lang="css">

.modal-title {font-family: 'Lato', sans-serif; font-weight: 700; text-transform: uppercase;}
button.btn:hover {cursor: pointer; cursor: hand;}

</style>
