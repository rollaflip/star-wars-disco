<div>
{films.map((film, index) => {
  return (
    <div key={index}>
      <li key={`title ${index}`}>{film.data.title}</li>
      <li key={`release date ${index}`}>
        {this.dateFormater(film.data.release_date)}
      </li>
    </div>
  );
})}
</div>






