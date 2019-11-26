import movieCard from './movieCard.js';
export default{
    components:{
        movieCard
            },
    template:`
   
    <form>  
    Title: <input v-model="movieTitle" type="text" > 
    <br><br>

    Rating: 1<input v-model="movieRating" type="range" min="0" max="5" value="0">5
    <br><br>

    Genre: <select v-model="movieGenre">
  <option value="Comedi">Comedi</option>
  <option value="Drama">Drama</option>
  <option value="Action">Action</option>
  <option value="Fantasy">Fantasy</option>
  <option value="Horror">Horror</option>
  <option value="Science fiction">Science fiction</option>
  </select>
 

  <br><br>
  Description:
  <br>
  <textarea v-model="movieText" rows = "8" cols = "30" name = "description"></textarea>
  <br><br>
  <button>Clear</button>
  <button v-on:click.prevent="addTitle">Add</button>
  <p>movie:</p>
    </form>

    <div>
   <movieCard v-bind:moviecard="movie"></movieCard>
   </div>
  
    `,
    data(){
        return{
            movieTitle:"",
            movieRating:"",
            movieGenre:"",
            movieText:"",
            movie:""  
        }
    },
    methods:{
        addTitle: function(){
            console.log(this.movieTitle)
            console.log(this.movieRating)
            console.log(this.movieGenre)
            console.log(this.movieText)

            return {
                movie: [this.movieTitle,this.movieRating,this.movieGenre,this.movieText]
            }
        }    
    }
}