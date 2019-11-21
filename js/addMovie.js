export default{
    
    template:`
    <form id="Form">  
    Title: <input v-module="movieTitle" type="text" > 
    <br><br>

    Rating: 1<input type="range" min="0" max="5" value="0">5
    <br><br>

    Genre: <select>
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
  <textarea rows = "8" cols = "30" name = "description"></textarea>
  <br><br>
  <button>Clear</button>
  <button v-on:click="addMovie">Add</button>
     
    </form>
  
    `,
    data(){
        return{
            movieTitle:"dawda",
            
        }
    },
    methods: {
        addMovie(){
            console.log(movieTitle.value)

        }
        
    }
}