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
 @media all and (min-width:1240px) {


   body {

     color: white;


     background: #000;
   }
 }
 @media all and (min-width:799px) and (max-width:1239px){

   body{
     display:flex;
     justify-content: center;
     align-items: center;
     text-align: center;
     color: white;
     background: #000;

   }


 }
 @media all  and (max-width:718px){

   body{
     display:flex;
     justify-content: center;
     align-items: center;
     text-align: center;
     color: white;
     background: #000;

   }


 }

 </style>
