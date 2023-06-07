import React from 'react'
import Header from '../Components/Header'
import Table from '../Components/Table'

const RatingPage = () => {
  return (
    <div>
      <Header />
      <div className="card-title mt-5 text-center">
        <h2>Romeo Cohort</h2>
      </div>
      <Table />
    </div>
  );
}

export default RatingPage