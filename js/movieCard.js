export default{
    props: ['movie'],
        
    template:`
    <div>
    <form>
       <P>{{movie.title}}</P>
       <p>{{movie.rating}}/5</p>
       <p>{{movie.genre}}</p>
       <p>{{movie.desc}}</p>
  
    </form>
    </div>
    `,
    
    data(){
        return{
          
        }

    },
}
