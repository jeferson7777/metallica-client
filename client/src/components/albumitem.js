const AlbumItem = () => {
  const imageName = [
    'pict-killemall',
    'Ride The Lightning', 
    'Master Of Puppets',
    'Metallica',
    'Load',
    'Reload',
    'Garage Inc',
    'S&M',
    'St. Anger',
    'Death Magnetic'];
  


  return (
    <article className="album">
      <div className={imageName[0]} ></div>
      <h5>KILL 'EM ALL</h5>
    </article>
  );
};

export default AlbumItem;

/*     return(
    {
      music.forEach(function (value, index, array) {
          <h1>{value}</h1>
       })
      }
    );
 */
