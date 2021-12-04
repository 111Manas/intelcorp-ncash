import DashboardLayout from "../../../layouts/dashboard-layout";
import WhiteCard from "../../../white-card/white-card";
import "./home.scss";

const Home = () => {
  return (
    <DashboardLayout>
      <h3 className="mb-3 mt-2 page-heading"> Overview</h3>
      <div className="row">
        <div className="col-lg-7 col-xl-8 col-xxl-8">
          <WhiteCard>
            <h4 className="page-heading"> De'tax</h4>
          </WhiteCard>
          <WhiteCard>
            <h4 className="page-heading"> Transaction</h4>
          </WhiteCard>
        </div>
        <div className="col-lg-5 col-xl-4 col-xxl-4">
          <WhiteCard>
            <h4 className="page-heading"> Employee</h4>
          </WhiteCard>

          <WhiteCard>
            <h4 className="page-heading"> Claims</h4>
          </WhiteCard>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Home;
