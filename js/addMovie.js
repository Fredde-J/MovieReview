import Movie from './Movie.js'
export default{
    
    template:`
   <div>
    <form> 

    Title: <input v-model="movieTitle" type="text" > 
    <br><br>

    Rating: 0<input id="rating" v-model="movieRating" type="range" min="0" max="5" value="0">5/
    <span>{{movieRating}}</span>
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
  <button @click.prevent="clearForm">Clear</button>
  <button v-on:click.prevent="addTitle">Add</button>
    </form>
 
    </div>
    
    `,
    data(){
        return{
            movieTitle:"",
            movieRating:"",
            movieGenre:"",
            movieText:"",  
        }
    },
    methods:{
        addTitle: function(){
            
            let movie = new Movie(
                this.movieTitle,
                this.movieRating,
                this.movieGenre,
                this.movieText,);

            console.log(movie)
            
            this.$emit('newMovie', movie)

            this.clearForm()
        }, 
        clearForm(){
            this.movieTitle ="",
            this.movieRating = "",
            this.movieGenre = "",
            this.movieText = ""

        },  
    }
}