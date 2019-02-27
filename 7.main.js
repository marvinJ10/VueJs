Vue.component('message',{
    props: ['title', 'body'],

    //show delete button
    data(){
        return {
            isVisible: true
        };
    },
    template:
        `
 <article class="message is-primary" v-show="isVisible">
  <div class="message-header">
    <p> {{title}} </p>

    <button class="delete" aria-label="delete" @click="hideModal"></button>

  </div>
  <div class="message-body">
   {{body}}
  </div>
    </article>
    `,
    methods: {
        hideModal(){
            this.isVisible = false;
        }
    }


});


new Vue({
    el:'#root',

});
