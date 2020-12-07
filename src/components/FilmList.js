import Film from './Film';

const FilmList = ({films})=>{

    const filmList = films.map( film =>{
        return (
            <Film name = {film.name}key = {film.id}>{film.url}</Film> 
        );
    });
    return (
        <>
        <h2>this is the film list</h2>
        <ul>
            {filmList}
        </ul>
        </>
    )
};

export default FilmList;