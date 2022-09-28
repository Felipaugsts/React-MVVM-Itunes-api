import './ArtistList.css'

export default function ArtistList({ data = [] }) {
  return (
    <div className="card-list">
      {data.map((item, i) => {
        return (
          <div key={i} className="list-item">
            <img src={item.artworkUrl100} alt={item.artworkUrl100} />
            <div className="list-info">
              <div className="title">{item.artistName}</div>
              <div className="album">{item.collectionName}</div>
              <div className="price">USD: {item.collectionPrice}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
