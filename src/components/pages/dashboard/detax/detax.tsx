import { Button } from "../../..";
import CustomSearchBar from "../../../custom-search/custom-search";
import CustomTable from "../../../custom-table/custom-table";
import DetaxTable from "../../../custom-table/detax-table";
import DashboardLayout from "../../../layouts/dashboard-layout";
import WhiteCard from "../../../white-card/white-card";
import "./detax.scss";

const DashboardDetax = () => {
  return (
    <div>
      <DashboardLayout>
        <h1 className="page-heading"> De'tax</h1>

        <WhiteCard className="my-4 p-0 rounded">
          <div className="d-flex justify-content-between">
            <CustomSearchBar
              boxShadow="none"
              height="auto"
              width="70%"
              text="Search by Name/ Mobile /ID "
            />
            <div className="d-flex align-items-center">
              <Button className="btn-gradiant-blue mx-1 text-white ">
                Send Invitation
              </Button>
            </div>
          </div>
        </WhiteCard>
        <div className="row">
          <div className="col">
            <WhiteCard className="bg-gray p-2">
              <h2 className="text-black text-center mb-0 fw-bold">423</h2>
              <p className="text-black text-center mb-1">All</p>
            </WhiteCard>
          </div>
          <div className="col">
            <WhiteCard className="p-2">
              <h2 className="text-black text-center mb-0 fw-bold">23</h2>
              <p className="text-black text-center mb-1">Enrolment Pending</p>
            </WhiteCard>
          </div>
          <div className="col">
            <WhiteCard className="p-2">
              <h2 className="text-black text-center mb-0 fw-bold">11</h2>
              <p className="text-black text-center mb-1">KYC pendng</p>
            </WhiteCard>
          </div>

          <div className="col">
            <WhiteCard className="p-2">
              <h2 className="text-black text-center mb-0 fw-bold">11</h2>
              <p className="text-black text-center mb-1">Activation Pending</p>
            </WhiteCard>
          </div>
          <div className="col">
            <WhiteCard className="p-2">
              <h2 className="text-black text-center mb-0 fw-bold">1,121</h2>
              <p className="text-black text-center mb-1">Activated</p>
            </WhiteCard>
          </div>
          <div className="col">
            <WhiteCard className="p-2">
              <h2 className="text-black text-center mb-0 fw-bold">102</h2>
              <p className="text-black text-center mb-1">Deactivated</p>
            </WhiteCard>
          </div>
          <div className="col">
            <WhiteCard className="p-2">
              <h2 className="text-black text-center mb-0 fw-bold">17</h2>
              <p className="text-black text-center mb-1">Cancelled</p>
            </WhiteCard>
          </div>
        </div>

        <WhiteCard className="mt-2">
          <DetaxTable />
        </WhiteCard>
      </DashboardLayout>
    </div>
  );
};
export default DashboardDetax;
