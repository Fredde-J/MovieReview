export default{
    props: ['movie'],
        
    template:`
    <div class="movie-card">
    <form @click="removeMovie" >
       <P>{{movie.title}}</P>
       <p>Rating:{{movie.rating}}/5</p>
       <p>{{movie.genre}}</p>
       <p>{{movie.text}}</p>
  
    </form>
    </div>
    `,
methods: {
    removeMovie(){
        this.$emit('removeMovie',this.movie)
    }
}
}
