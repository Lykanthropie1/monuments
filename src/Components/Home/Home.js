import { Card, Row, Col, Layout, Image } from 'antd';

import baryshI from "./assets/background.jpeg";

const {Content} = Layout;

function Home() {
    return (
        <Content className="site-layout" style={{ padding: '0 50px'}}>
            <Row gutter={24}>
                <Col span={2}>
                </Col>
                <Col span={20}>
                    <Card title="Главная страница" className='card' bordered={false}>
                        <h1 className='center'><b>Приветствую Вас на сайте, посвященному памятникам Барышского района!</b></h1>
                        <h3>Мало кто знает, но в Барышском районе, моей малой Родине, есть не мало памятников, представляющих значение культурного наследия всего Поволжья!</h3>
                        <h4>В интернете есть много статей по поводу привлечения внимания на состояния этих памятников, приводится не мало фактов о том, чем же являлись давно забытые дома, конструкции и сооружения, мимо которых мы каждый день проходим мимо, не зная их прошлого.</h4>
                        <h4>Поэтому я постаралась собрать для Вас многие из них, информацию о них в интернете, фотографии. Надеюсь, такой интерактивный подход к изучению своего "Дома" будет полезным, а может быть и удивительным!</h4>
                        <div className='center'><Image src={baryshI}/></div>
                    </Card>
                </Col>
                <Col span={2}>
                </Col>
            </Row>
        </Content>
    )
}

export default Home;