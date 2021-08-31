import React, { PureComponent } from 'react'
import { Comment, Tooltip, Avatar } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

export default class CommentItem extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const {nickName, content, datetime, avatar} = this.props.comment;

    return (
      <Comment
      author={<a href="/#">{nickName}</a>}
      avatar={
        <Avatar src={avatar} alt={nickName} />
      }
      content={<p>{content}</p>}
      datetime={
        <Tooltip title={datetime.format('YYYY-MM-DD HH:mm:ss')}>
          <span>{datetime.fromNow()}</span>
        </Tooltip>
      }
      actions={[
        <span onClick={e => this.deleteCommentItem()}><DeleteOutlined/>删除</span>
      ]}
    />
    )
  }

  deleteCommentItem() {
    this.props.removeItem()
  }
}
