<template lang="html">
<div class="modalHelper">


  <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span style="font-weight: 900" aria-hidden="true" >X</span></button>
        <h4 class="modal-title" style="padding: 5px"><slot name="title"></slot></h4>
      </div>
      <div class="modal-body" style="padding-top: 80px; padding-left: 35px; padding-right: 35px;">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
          <a class="btn btn-primary" :href="pdf" :download="parseFilename(pdf)"><i class="fa fa-file-pdf-o" aria-hidden="true">&nbsp;&nbsp;</i>Download PDF</a>
        <button type="button" class="btn btn-primary btn-modal" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



</div>
</template>

<script>
export default {

  methods: {

    parseFilename (pdf) {
      // strip path -- leave filename for PDF download
      return pdf.split('\\').pop().split('/').pop();
    }
  },

  mounted() {

    $(function() {

      $('.pop-modal1, .pop-modal2, .pop-modal3').click(function (e) {
        // Prevent footnote click in modal
        e.preventDefault();
      })

      // Display reference in Bootstrap popover
      $('.pop-modal1, .pop-modal2, .pop-modal3').popover({
        trigger: 'hover',
        placement: 'auto top',
        html: true,
        title: '<strong>REFERENCE</strong>',
        content: function getFootnote() {
          var el = $(this).attr('href')
          //console.log('Hover el: ', el)
          //console.log('test: ',$(el).text())
          return $(el).text()
        }
      });






});


  },



  props: ['id','pdf'],


}
</script>

<style lang="css">
button.close {color: #000 !important}
.modal-header {background: #aaa; color: #fff}
.modal-title {font-family: 'Lato', sans-serif; font-weight: 700; text-transform: uppercase;}
button.btn:hover {cursor: pointer; cursor: hand;}
.pop-modal1,
.pop-modal2,
.pop-modal3,
.pop-modal4,
.pop-modal5 {position: relative; top: -0.5em; font-size: 80%;}


</style>
