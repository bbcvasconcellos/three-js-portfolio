import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

export const MapCharter = () => {
  const markers = [
    {
      markerOffset: 15, 
      name: "Warsaw",
      country: "Poland",
      coordinates: [21.0122, 52.2297]
    },
    {
      markerOffset: -30,
      name: "Sao Paulo",
      country: "Brazil",
      coordinates: [-46.6396, -23.5558]
    },
    {
      markerOffset: -30,
      name: "Chapeco",
      country: "Brazil",
      coordinates: [-52.6170, -27.0953]
    },
    {
      markerOffset: -30,
      name: "Orlando",
      country: "United States",
      coordinates: [-81.3789, 28.5384]
    }
  ];

  const selectedCountries = markers.map(({ country }) => country);  
  
  return (
    <ComposableMap 
      projection="geoOrthographic"
      projectionConfig={{
        rotate: [40, -28, 36],
        scale: 650
      }}  
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <Geographies 
        geography="/map-features.json"
        fill="#c9c9c9"  
        stroke="#ffffff"
      >
        {({ geographies }) => geographies.map((geo) => (
          <Geography 
            key={geo.rsmKey} 
            geography={geo}
            fill={selectedCountries.includes(geo.properties.name) ? "#c337bf": "#c9c9c9"} 
          />
        ))}
      </Geographies>
      {markers.map(({name, coordinates, markerOffset}) => (
        <Marker 
          key={name} 
          coordinates={[coordinates[0], coordinates[1]]}
        >
          <g
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3"/>
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{
              fontWeight: "bold",
              fontSize: "20",
              fill:"#fff"
            }}
          >
            { name }
          </text>
        </Marker>
      ))}
    </ComposableMap>
  )
}