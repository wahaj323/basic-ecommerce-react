import React from 'react';
import Card from "../cards/Card.jsx";

const Cards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 w-full p-8">
      {/* Flex container to align cards in a row */}
      <h1 className='text-center text-4xl text-amber-50 mb-6'>Our Products</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <Card
          key="1"
          imageURL="https://images.anandtech.com/doci/15080/Basilisk-Ultimate-678_678x452.jpg"
          name="Basilisk Ultimate wireless gaming mouse"
          description="The Basilisk Ultimate is a high-performance wireless gaming mouse designed for precision and comfort."
          price="80"
        />
        <Card
          key="2"
          imageURL="https://images.anandtech.com/doci/15080/Basilisk-Ultimate-678_678x452.jpg"
          name="Basilisk Ultimate wireless gaming mouse"
          description="The Basilisk Ultimate is a high-performance wireless gaming mouse designed for precision and comfort."
          price="80"
        />
        <Card
          key="3"
          imageURL="https://images.anandtech.com/doci/15080/Basilisk-Ultimate-678_678x452.jpg"
          name="Basilisk Ultimate wireless gaming mouse"
          description="The Basilisk Ultimate is a high-performance wireless gaming mouse designed for precision and comfort."
          price="80"
        />
        <Card
          key="3"
          imageURL="https://images.anandtech.com/doci/15080/Basilisk-Ultimate-678_678x452.jpg"
          name="Basilisk Ultimate wireless gaming mouse"
          description="The Basilisk Ultimate is a high-performance wireless gaming mouse designed for precision and comfort."
          price="80"
        />
        <Card
          key="3"
          imageURL="https://images.anandtech.com/doci/15080/Basilisk-Ultimate-678_678x452.jpg"
          name="Basilisk Ultimate wireless gaming mouse"
          description="The Basilisk Ultimate is a high-performance wireless gaming mouse designed for precision and comfort."
          price="80"
        />
        <Card
          key="3"
          imageURL="https://images.anandtech.com/doci/15080/Basilisk-Ultimate-678_678x452.jpg"
          name="Basilisk Ultimate wireless gaming mouse"
          description="The Basilisk Ultimate is a high-performance wireless gaming mouse designed for precision and comfort."
          price="80"
        />
      </div>
    </div>
  );
};

export default Cards;