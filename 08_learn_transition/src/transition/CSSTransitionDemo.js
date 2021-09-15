import React, { PureComponent } from 'react'
import { CSSTransition } from "react-transition-group"
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true
    }
  }

  render() {
    const { isShow } = this.state;

    return (
      <div>
        <button onClick={ e => this.setState({ isShow: !isShow }) }>显示/隐藏</button>
        <CSSTransition in={isShow} 
                       classNames="card" 
                      //  timeout用来控制类添加替换的时间
                       timeout={300} 
                       unmountOnExit={false} 
                       appear
                       onEnter={ element => console.log("初始进入状态")}
                       onEntering={ element => console.log("正在进入状态")}
                       onEntered={ element => console.log("进入状态完成")}
                       onExit={ element => console.log("初始结束状态")}
                       onExiting={ element => console.log("正在结束状态")}
                       onExited={ element => console.log("结束状态完成")}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    )
  }
}
