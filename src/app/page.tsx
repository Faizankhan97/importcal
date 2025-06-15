import { PlusOutlined } from "@ant-design/icons";
import home from "../assets/images/home.png";
import flowbite from "../assets/images/flowbite.png";
import fluent from "../assets/images/fluent.png";
import copy from "../assets/images/Copy.png";
import bell from "../assets/images/bell.png";
import settings from "../assets/images/Settings.png";
import arrow from "../assets/images/arrow.png";
import info from "../assets/images/info.png";
import { Divider, Tabs } from "antd";
import Image from "next/image";
import Billing from "./components/Billing";

export default function Home() {
  const items = [
    {
      key: "1",
      label: "Company",
      children: "",
    },
    {
      key: "2",
      label: "Billing",
      children: <Billing />,
    },
    {
      key: "3",
      label: "Team",
      children: "",
    },
    {
      key: "4",
      label: "Notifications",
      children: "",
    },
    {
      key: "5",
      label: "API Keys",
      children: "",
    },
  ];
  return (
    <div className="main flex">
      <div className="bg-white left_wrap">
        <button className="generte">
          <PlusOutlined />
          Generate report
        </button>
        <div className="flex flex-col justify-between height_wrap">
          <div>
            <h4>Your Workspace</h4>
            <ul>
              <li className="flex">
                <Image src={home} alt="home" />
                <p>My Dashoard</p>
              </li>
              <li className="flex">
                <Image src={copy} alt="copy" />
                <p>My reports</p>
              </li>
            </ul>
            <Divider />
            <h4>Coming soon pages </h4>
            <ul>
              <li className="flex">
                <Image src={flowbite} alt="flowbite" />
                <p>World terif Map</p>
              </li>
              <li className="flex">
                <Image src={fluent} alt="fluent" />
                <p>Products HTS Cla....</p>
              </li>
            </ul>
            <Divider />
            <h4>Others</h4>
            <ul className="border-0">
              <li className="flex">
                <Image src={bell} alt="bell" />
                <p>Notifications</p>
              </li>
              <li className="flex">
                <Image style={{ opacity: 1 }} src={settings} alt="settings" />
                <p style={{ opacity: 1 }}>Settings</p>
              </li>
            </ul>
          </div>
          <div>
            <button className="arrow">
              <Image style={{ opacity: 1 }} src={arrow} alt="arrow" />
            </button>
            <h4 className="help flex">
              <Image src={info} alt="info" />
              Help Center
            </h4>
          </div>
        </div>
      </div>
      <div className="right_wrap">
        <Tabs defaultActiveKey="2" items={items} />
      </div>
    </div>
  );
}
