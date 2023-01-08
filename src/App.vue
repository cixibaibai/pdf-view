<template>
  <div id="app">
    <h2>首页</h2>
    <div id="demo"></div>
  </div>
</template>

<script>
  import axios from "axios";
  import Pdfh5 from 'pdfh5'
  import 'pdfh5/css/pdfh5.css' 
  export default {
    name: 'App',
    data() {
      return {
        pdfUrl: '',
        pdfh5: null
      }
    },
    created() {
      this.getPdfFile();
    },
    methods: {
      getPdfFile() {
        axios.get("/api/preview/getFile", {
          responseType: 'blob'
        }).then(
          response => {
            this.pdfUrl = window.URL.createObjectURL(new Blob([response.data], {type: "application/pdf"}));
            this.pdfh5 = new Pdfh5("#demo", {
              pdfurl: this.pdfUrl
            })
          }
        )
      }
    }
  }
</script>

<style>

</style>