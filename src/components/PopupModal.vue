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
  props: ['showModal'],
};
</script>
  
<template>
  <MDBModal :animation="true" tabindex="-1" :modelValue="showModal" :keyboard="false" :focus="false">
    <MDBModalHeader>
      <MDBModalTitle>
        <slot name="modal-header"></slot>
      </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody @click.stop="">
      <slot name="modal-body"></slot>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="primary"> Close </MDBBtn>
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