import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Card = ({ name, description, image, imageOnLeft }) => {
    return (
      <div className="container-fluid mb-3 border">
        <div className="row g-0">
          <div className={`col-md-6 ${imageOnLeft ? 'order-1' : 'order-2'}`}>
            <img 
              src={image} 
              className="img-fluid rounded-start" 
              alt={name} 
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
          
          {/* Content Column - order depends on imageOnLeft prop */}
          <div className={`col-md-6 ${imageOnLeft ? 'order-2' : 'order-1'}`}>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Card
