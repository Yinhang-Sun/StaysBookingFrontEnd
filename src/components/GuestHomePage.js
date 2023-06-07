import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

class GuestHomePage extends React.Component {
    render() {
        return(
            <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
                <TabPane tab="Search Stays" key="1">
                    Search Stays content 
                </TabPane>
                <TabPane tab="My Reservations" key="2">
                    My Reservations Content 
                </TabPane>
            </Tabs>
        );
    }
}

export default GuestHomePage;