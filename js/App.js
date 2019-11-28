import addMovie from './addMovie.js';
import movieList from './movieList.js';

export default{

    components:{
addMovie,
movieList
    },
    template:`
    <div>
        <h1>Movie reviewer</h1>
        <addMovie @newMovie="onNewMovie"></addMovie>
        <br>
        <movieList :movies="movies"></movieList>
        
    </div>
    `,
    data(){
        return{
         movies: []  
        }
    },
    methods: {
        onNewMovie(movie){
            this.movies.push(movie)
            console.log()

        }
    }
}