import addMovie from './addMovie.js';

export default{

    components:{
addMovie,
    },
    template:`
    <div>
        <h1>Movie rating</h1>
        <addMovie></addMovie>
        
    </div>
    `,
    data(){
        return{
            message: "Whats up?"
        }
    }
}