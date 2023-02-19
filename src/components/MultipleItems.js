import React from 'react'
import Items from "../components/Items";
import '../index.css';

function MultipleItems() {   
     return (
    <>
    <div className='row g-0'>
        <div className='col-lg-3 col-md-6'>
    <Items
      name="Wireless Earbuds"
      price="$89.00"
      description="Best Battery Life, Made in India"
      stars={4}
      reviews={121}
    />

    <Items
      name="Smartwatch"
      price="$149.00"
      description="Fitness Tracking, Heart Rate Monitor, Sleep Tracking"
      stars={3}
      reviews={76}
    />

    <Items
      name="Bluetooth Speaker"
      price="$99.00"
      description="Waterproof, 20W Output, 12 Hours Playtime"
      stars={5}
      reviews={42}
    />
    </div>
    </div>
    </>
  )
}

export default MultipleItems
