import React from 'react';
import { List, ListItem, Badge } from 'react-native-elements';
import { TASK } from './../../../model';
import { APP_COLORS } from './../../../styles/color';
import { style } from './style';

const TaskList = ({ taskList, onPressCallBack, onLongPressCallBack }) => (
  <List containerStyle={style.list}>
    {taskList.map(task => (
      <ListItem
        key={task._id}
        title={task.title}
        onPress={() => onPressCallBack(task)}
        onLongPress={() => onLongPressCallBack(task)}
        hideChevron={true}
        badge={{
          element: (
            <Badge
              value={
                task.priority === 1
                ? TASK.todoStatus
                : TASK.doneStatus
              }
              containerStyle={
                task.priority === 1
                  ? { backgroundColor: APP_COLORS.accent }
                  : { backgroundColor: APP_COLORS.lightPrimaryColor }
              }
            />
          )
        }}
      />
    ))}
</List>
);

export default TaskList;
