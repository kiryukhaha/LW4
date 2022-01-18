 <template>
   <div id = "app">
  <Header v-bind="headerParams"/>
  <router-view />
   </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      headerParams: {
        variant: "3336",
        group: "P3233",
        firstName: "Ievlev",
        lastName: "Kirill"
      }
    }
  }
}
</script>

 <style>
 body {

   color: white;



   background: #000;
 }


 </style>
