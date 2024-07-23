"use client";
import { employees, tasks } from "./constants";
import Content from "./Content";
import Grid from "./Grid";
import Layout from "./Layout";
import Line from "./Line";
import Sidebar from "./Sidebar";
import TimeLine from "./TimeLine";

const Planner = () => {
  return (
    <Layout sidebarItems={employees}>
      <TimeLine />
      <Sidebar
        data={employees}
        renderSidebarItem={(employee) => employee.name}
      />
      <Content data={tasks} renderContentItem={(task) => task.referenceId} />

      <Line />
      <Grid />
    </Layout>
  );
};

export default Planner;
