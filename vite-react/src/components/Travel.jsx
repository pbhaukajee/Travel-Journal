import map from "../images/map.png";

export default function Travel(props) {
  return (
    <div className="travel">
      <img src={props.img} alt="cover image" className="travel--image" />
      <div>
        <div className="travel--span">
          <div></div>
          <img src={map} alt="map logo" className="travel--map" />
          <span className="travel--location">{props.location}</span>
          <span>
            <a href={props.googleMapsUrl} className="travel--url">
              View on Google Maps
            </a>
          </span>
        </div>
        <h1 className="travel--title">{props.title}</h1>
        <h3 className="travel--dates">
          {props.startDate}-{props.endDate}
        </h3>
        <p className="travel--description">{props.description}</p>
      </div>
    </div>
  );
}
