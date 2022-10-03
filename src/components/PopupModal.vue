<script>
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from 'mdb-vue-ui-kit';
export default {
  components: {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
  },
  props: ['showModal', 'haveSave'],
};
</script>
  
<template>
  <MDBModal :animation="true" tabindex="-1" :modelValue="showModal" :keyboard="false" :focus="false">
    <MDBModalHeader @click.stop="" :close="false">
      <MDBModalTitle class="w-100">
        <div class="w-100 d-flex justify-content-between">
          <slot name="modal-header"></slot>
          <span @click="$emit('closeModal')">&times;</span>
        </div>
      </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody @click.stop="">
      <slot name="modal-body"></slot>
    </MDBModalBody>
    <MDBModalFooter @click.stop="">
      <MDBBtn v-if="haveSave" color="primary" @click="$emit('saveModal')"> Lưu </MDBBtn>
      <MDBBtn :color="!haveSave ? 'primary' : 'secondary'" @click="$emit('closeModal')"> Đóng </MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>
<style>
.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}
</style>