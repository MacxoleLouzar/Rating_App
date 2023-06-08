import Header from "../Components/Header"
import Table from "../Components/Table"

const TangoPage = () => {
  return (
    <div>
      <Header />
      <div className="card-title mt-5 text-center">
        <h2>Tango Cohort</h2>
      </div>
      <Table />
    </div>
  );
}

export default TangoPage