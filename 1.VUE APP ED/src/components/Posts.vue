<template>
    <div class="container">

        <!--<div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">-->
            <!--<div class="col-md-6 px-0">-->
                <!--<h1 class="display-4 font-italic">Title of a longer featured blog post</h1>-->
                <!--<p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>-->
                <!--<p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>-->

            <!--</div>-->
        <!--</div>-->
        <!--<button class="btn btn-primary"> CLICK MEE BOOTSTRAP</button><br>-->
        <div class="text-center">DATA FROM LIVE API!</div>

        <table class="table table-striped mt-5">
            <thead>
            <tr>
                <th scope="col">User_ID</th>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
                <th scope="row"></th>
                <td>{{post.id}}</td>
                <td>{{post.title}}</td>
                <td>{{post.body}}</td>
            </tr>
            </tbody>
        </table>

    </div>

</template>


<script>
    import axios from 'axios'
    //export data of the template
    export default {
        //selector name
        name: 'PostsExample',
        data () {
            return {
                //Data Population
                posts: [

                ]
            }
        },
        created() {
            // console.log('Initiated the Life Cycle')
            axios.get('https://jsonplaceholder.typicode.com/posts').then(posts=>{

                this.posts = posts.data

            });

        }
    }

</script>

<style>

</style>