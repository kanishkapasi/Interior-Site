import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./project.css";
import projectBg from "../../Images/projectBg.png";
import Table from "../TableImages/Table";
import Footer from "../Footer/Footer";

function Project() {
  const [key, setKey] = useState("Bath Room");
  return (
    <div className="projectContainer">
      {/* Image Section */}
      <div className="image">
        <img src={projectBg} alt="" className="proImage" />
      </div>
      {/* End OF Image Section */}
      <h1 className="text-center mt-5">Project</h1>
      {/* Table Section */}
      <div className="tableContainer">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="table mb-3"
        >
          <Tab eventKey="Bath Room" title="Bath Room" className="tableDetails">
            <Table />
          </Tab>
          <Tab eventKey="Bed Room" title="Profile" className="tableDetails">
            <Table />
          </Tab>
          <Tab eventKey="Kitchen" title="Kitchen" className="tableDetails">
            <Table />
          </Tab>
          <Tab
            eventKey="Living Area"
            title="Living Area"
            className="tableDetails"
          >
            <Table />
          </Tab>
        </Tabs>
      </div>
      {/* End Of table Section */}

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Project;
