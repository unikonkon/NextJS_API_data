import React from 'react';
import { Card, Col, Row } from 'antd';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

const ScrollOverPack = ScrollAnim.OverPack;

export default function CardComponent() {
  return (
    <div>
      <div className="" style={{paddingTop:100,paddingBottom:50,textAlign: 'center',fontSize:40,color: '#FFFFFF'}}>Thai Text Summarization Features</div>
      <div className="">
        <Row gutter={[16, 16]} style={{paddingRight:30,paddingLeft:30}}>
          <Col xs={24} sm={12} md={12} lg={8} xl={8}>
            <ScrollOverPack playScale={0.5} style={{ overflow: 'hidden', height: 600, }} >
              <QueueAnim
                leaveReverse
                key="queue"
                style={{ float: 'left', position: 'relative', left: '50%', marginLeft: -165 }}
              >
                <div key="a" className="code-box-shape queue-anim-demo">
                  <Card title="Card title" bordered={false} hoverable 
                    style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)', height:500,margin:40,width:300}}>
                    Card content
                  </Card>
                </div>
              </QueueAnim>
            </ScrollOverPack>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={8}>
            <ScrollOverPack playScale={0.5} style={{ overflow: 'hidden', height: 600 }}>
              <QueueAnim
                leaveReverse
                key="queue"
                style={{ float: 'left', position: 'relative', left: '50%', marginLeft: -165 }}
              >
                <div key="a" className="code-box-shape queue-anim-demo">
                  <Card title="Card title" bordered={false} hoverable
                    style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)', height:500,margin:40,width:300}}>
                    Card content
                  </Card>
                </div>
              </QueueAnim>
            </ScrollOverPack>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={8}>
            <ScrollOverPack playScale={0.5} style={{ overflow: 'hidden', height: 600 }}>
              <QueueAnim
                leaveReverse
                key="queue"
                style={{ float: 'left', position: 'relative', left: '50%', marginLeft: -165 }}
              >
                <div key="a" className="code-box-shape queue-anim-demo">
                  <Card title="Card title" bordered={false} hoverable
                    style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)', height:500,margin:40,width:300}}>
                    Card content
                  </Card>
                </div>
              </QueueAnim>
            </ScrollOverPack>
          </Col>
        </Row>
      </div>

      
    </div>
  );
}
