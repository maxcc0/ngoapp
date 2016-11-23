import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Divider from 'material-ui/Divider';
import {Card, CardText, CardTitle} from 'material-ui/Card';
export class AgileList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (

      <div>
        <div className='card ' style={{borderLeft: '4px solid #fd9c35'}}>
          <ListItem 
            leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor='#74ba00' />}
            rightIcon={<ActionInfo />}
            primaryText="Is the theme fully responsive?"
            secondaryText="Jan 20, 2014"
            />
        </div>
        <div className='card ' style={{borderLeft: '4px solid #74ba00'}}>
          <ListItem 
            leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor='#74ba00' />}
            rightIcon={<ActionInfo />}
            primaryText="Is the theme fully responsive?"
            secondaryText="Jan 20, 2014"
            />
        </div>
        <div className='card ' style={{borderLeft: '4px solid #fd9c35'}}>
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor='#74ba00' />}
            rightIcon={<ActionInfo />}
            primaryText="Is the theme fully responsive?"
            secondaryText="Jan 20, 2014"
            />
        </div>

        <div className='card ' style={{borderLeft: '4px solid #74ba00'}}>
          <ListItem 
            leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor='#74ba00' />}
            rightIcon={<ActionInfo />}
            primaryText="Is the theme fully responsive?"
            secondaryText="Jan 20, 2014"
            />
        </div>
      </div>

    )

  }

}

export class ToDoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

  }
}

export class AvatarList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='card '>
        <List>
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor='#74ba00' />}
            rightIcon={<ActionInfo />}
            primaryText="Is the theme fully responsive?"
            secondaryText="Jan 20, 2014"
            />
          <Divider inset/>
          <ListItem
            leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor='#fd9c35' />}
            rightIcon={<ActionInfo />}
            primaryText="Is it based on Metro styles?"
            secondaryText="Jan 10, 2014"
            />
          <Divider inset/>
          <ListItem
            leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor="#dd4343" />}
            rightIcon={<ActionInfo />}
            primaryText="Does it have resuable components?"
            secondaryText="Jan 10, 2014"
            />
          <Divider inset/>
          <ListItem
            leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor='#74ba00' />}
            rightIcon={<ActionInfo />}
            primaryText="Does it meet Metro Macro principles?"
            secondaryText="Jan 10, 2014"
            />
          <Divider inset/>
          <ListItem
            leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor="#dd4343" />}
            rightIcon={<ActionInfo />}
            primaryText="Does it have a stable build system?"
            secondaryText="Jan 10, 2014"
            />
        </List>
      </div>
    )
  }
}