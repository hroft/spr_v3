import React from 'react';
import './CardItemMain.css';

export default function CardItemMain(props) {
  return (
    <React.Fragment>
      {props.data
        .filter(function(data) {
          return data.type === props.ptype;
        })
        .map(row => (
          <div className="card" key={row.id}>
              <img className="card-img-top" src= {"/static/images/card/" + row.foto} />
            <div className="card-body">
              <h5 className="card-title">{row.name}</h5>
              <div className="card-text text-left">
                <p><i className="fas fa-map-marker"></i>  {row.location}</p>
                <p><i className="fas fa-info-circle"></i>
{row.contact}</p>
                <p><i className="fas fa-clock"></i>{row.time}</p>
              </div>
              <a href={row.more} className={row.more ? 'btn btn-success active' : 'btn btn-success disabled'
              }>Подробнее</a>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
}
