export default{
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    template:`
        <section class="movieCardContainer">
            <section class="movieCard">
                <section class="section movieTitleRating">
                    <p class="sectionP">{{ }}</p>
                    <p class="sectionP">{{  }}/5</p>
                </section>
                <section class="section genreMovieCard">
                    <p class="sectionP">{{ }}</p>
                </section>
                <section class="section desc">
                    <p>Description: {{  }}</p>
                </section>
            </section>
        </section>
    `,
}
