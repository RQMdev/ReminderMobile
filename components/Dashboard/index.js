import React from 'react';
import lodash from 'lodash';
import { View, ScrollView, Text, AsyncStorage, Image } from 'react-native';
import ButtonAddTask from './button-add-task';
import Header from './Header';
import TaskList from './task-list';
import MenuTask from './menu-task';
import { TASK } from './../../model';
import TextPrompt from './text-prompt';
import { style } from './../../style.js';

const storageKey = 'taskList';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      isMenuTaskVisible: false,
      currentTask: {},
      isAddPromptVisible: false,
      isRenamePromptVisible: false,
      idGenerator: 0
    };
  }

  componentDidMount() {
    this.props.screenProps.handleGetStickys();

    // AsyncStorage.getItem(storageKey).then(storedTaskList => {
    //   if (storedTaskList) {
    //     this.setState({ taskList: JSON.parse(storedTaskList) }, () => {
    //       this.setState({
    //         idGenerator: this.state.taskList[this.state.taskList.length - 1]
    //           .id + 1
    //       });
    //     });
    //   }
    // });
  }

  toggleMenuTaskVisibility = task => {
    let currentTask = task;
    if (this.state.isMenuTaskVisible) {
      currentTask = {};
    }
    this.setState({
      isMenuTaskVisible: !this.state.isMenuTaskVisible,
      currentTask
    });
  };

  deleteCurrentTask = () => {
    const index = lodash.findIndex(this.state.taskList, {
      id: this.state.currentTask.id
    });
    const list = this.state.taskList;
    list.splice(index, 1);
    this.setState({ taskList: list, currentTask: {} }, () => {
      this.toggleMenuTaskVisibility();
      this.saveTaskList();
    });
  }

  toggleTaskStatus = () => {
    const updatedTask = this.state.currentTask;
    updatedTask.status = this.state.currentTask.status === TASK.doneStatus
      ? TASK.todoStatus
      : TASK.doneStatus;
    const index = lodash.findIndex(this.state.taskList, {
      id: this.state.currentTask.id
    });
    const updatedTaskList = this.state.taskList;
    updatedTaskList[index] = updatedTask;
    this.setState(
      {
        taskList: updatedTaskList,
        isMenuTaskVisible: false,
        currentTask: {}
      },
      () => {
        this.saveTaskList();
      }
    );
  }

  hideAddPrompt = () => {
    this.setState({ isAddPromptVisible: false });
  }

  onAddTask = async value => {
    const newSticky = {
      title: value,
      content: value,
      priority: 1
    };

    // Pull data to App.js
    await this.props.screenProps.handleAddStickys(newSticky)
    await this.setState({
        ...this.state,
        isAddPromptVisible: false
      });

    // this.setState(
    //   {
    //     taskList: [...this.state.taskList, newTask],
    //     isAddPromptVisible: false,
    //     idGenerator: this.state.idGenerator + 1
    //   },
    //   () => {
    //     this.saveTaskList();
    //   }
    // );
  }

  displayAddPrompt = () => {
    this.setState({ isAddPromptVisible: true });
  };

  displayRenameTask = task => {
    this.setState({ currentTask: task, isRenamePromptVisible: true });
  };

  hideRenamePrompt = () => {
    this.setState({ isRenamePromptVisible: false, currentTask: {} });
  };

  renameTask = value => {
    const updatedTask = this.state.currentTask;
    updatedTask.content = value;

    const index = lodash.findIndex(this.state.taskList, {
      id: this.state.currentTask.id
    });
    const updatedTaskList = this.state.taskList;
    updatedTaskList[index] = updatedTask;

    this.setState({ taskList: updatedTaskList }, () => {
      this.hideRenamePrompt();
      this.saveTaskList();
    });
  };

  saveTaskList = () => {
    AsyncStorage.setItem(storageKey, JSON.stringify(this.state.taskList));
  };

  renderTaskList = () => {
    if (this.props.screenProps.stickys.length > 0) {
      return (
        <TaskList
          onPressCallBack={this.toggleMenuTaskVisibility}
          onLongPressCallBack={this.displayRenameTask}
          taskList={this.props.screenProps.stickys}
        />
      );
    }
    return (
      <View style={style.noTask}>
        <Text>Cliquer sur le bouton ajouter pour créer une tâche</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView>
          {this.renderTaskList()}
        </ScrollView>
        <MenuTask
          isVisible={this.state.isMenuTaskVisible}
          onDisapearCallBack={this.toggleMenuTaskVisibility}
          onDeleteCallBack={this.deleteCurrentTask}
          onChangeStatusCallBack={this.toggleTaskStatus}
        />
        <TextPrompt
          isVisible={this.state.isAddPromptVisible}
          onCancelCallBack={this.hideAddPrompt}
          onSubmitCallBack={this.onAddTask}
          title={'Ajouter une nouvelle tâche'}
          placeHolder={'ex : Acheter du lait'}
          defaultValue={''}
        />

        <TextPrompt
          isVisible={this.state.isRenamePromptVisible}
          onCancelCallBack={this.hideRenamePrompt}
          onSubmitCallBack={this.renameTask}
          title={'Renommer la tâche'}
          defaultValue={this.state.currentTask.content}
        />
        <ButtonAddTask onPressCallBack={this.displayAddPrompt} />
      </View>
    );
  }
}
