import React from 'react';
import { View, Image } from 'react-native';
import { List, ListItem, Badge } from 'react-native-elements';
import { TASK } from './../../../model';
import { APP_COLORS } from './../../../styles/color';
import { style } from './style';
import { SERVER_IP} from './../../../ServerConfig';

const TaskList = ({ taskList, onPressCallBack, onLongPressCallBack }) => (
  <List containerStyle={style.list}>
    {taskList.map(task => (
      <View key={task._id + 'view'} >
        <Image
          key={task._id + 'image'}
          style={{
            backgroundColor: '#999',
            flex: 1,
            resizeMode: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}
          source={{ uri:'http://'+ SERVER_IP+':3001/'+task.image }}
        />
        <ListItem
          key={task._id}
          title={task.title}
          titleStyle={style.title}
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
      </View>
    ))}
</List>
);

export default TaskList;
