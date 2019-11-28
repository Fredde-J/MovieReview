import movieCard from './movieCard.js';
export default{
    props:['movies'],
    components:{
        movieCard
            },
    template:`
    <div>
    <movieCard
     v-for="(movie, i) of movies"
     :key="movie.title + i"
     v-bind:movie="movie">
    </movieCard>
    </div>
    `,
    
}