import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";

const TestSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <Menu>
          <MenuItem className="menu1">
            <h2>QUICKPAY</h2>
          </MenuItem>
          <MenuItem> Dashboard </MenuItem>
          <MenuItem> Invoices </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Timeline Chart </MenuItem>
            <MenuItem> Bubble Chart </MenuItem>
          </SubMenu>
          <SubMenu label="Wallets">
            <MenuItem>Current Wallet</MenuItem>
            <MenuItem>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem> Transactions </MenuItem>
          <SubMenu label="Settings">
            <MenuItem> Account </MenuItem>
            <MenuItem> Privacy </MenuItem>
            <MenuItem> Notifications </MenuItem>
          </SubMenu>
          <MenuItem> Logout </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default TestSidebar;
