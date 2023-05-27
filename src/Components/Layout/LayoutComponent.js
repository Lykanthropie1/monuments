import { Layout, Menu, Image } from 'antd';
import {CameraOutlined, HomeOutlined} from "@ant-design/icons";
import React from "react";

import logo from "./assets/gerb_raiona.jpeg";
import AppRouter from '../AppRouter/AppRouter';
import { useNavigate } from 'react-router-dom';

const { Header, Footer } = Layout;
const topics = ["Главная страница", "Памятники"];

function LayoutComponent() {
    const navigate = useNavigate();
    const items = [HomeOutlined, CameraOutlined].map(
        (icon, index) => (
            {
                key: String(index + 1),
                icon: React.createElement(icon),
                label: topics[index]
            }
        )
    );

    const handleMenuClick = (event) => {
        if (event.key === "1") {
            navigate('/');
        } else {
            navigate('/monuments');
        }
    }

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" style={{ marginRight: "10px" }}>
                    <Image width={40} preview={false} src={logo}/>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={items}
                    onClick={handleMenuClick}
                />
            </Header>
            <AppRouter/>
            <Footer style={{ textAlign: 'center' }}>
                Памятники Барышского района ©2023<br></br>
                <div style={{ marginTop: 10 }}>Сайт создан Татьяной Барашковой tatanabaraskova59@gmail.com</div>
            </Footer>
        </Layout>
    );
};

export default LayoutComponent;