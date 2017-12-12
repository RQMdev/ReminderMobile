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
      currentSticky: {},
      isStickyMenuVisible: false,
      isAddPromptVisible: false,
      isRenamePromptVisible: false
    };
    this.setImage = this.setImage.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
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

  setImage = async (image) => {
    await this.setState({
      ...this.state,
      currentSticky: {
        ...this.state.currentSticky,
        image
      }
    });
    console.log('currentSticky after adding Image : ', this.state.currentSticky);
    const updatedSticky = this.state.currentSticky;
    this.props.screenProps.handleEditSticky(updatedSticky);
    this.toggleStickyMenuVisibility();
  }

  handleImageUpload (formData) {
    this.props.screenProps.handleImageUpload(formData, this.state.currentSticky);
  }

  handleDateChange (datePicked){
    this.setState({
      ...this.state,
      currentSticky: { 
        ...this.state.currentSticky,
        datePicked
      }
    }, () => this.props.screenProps.handleEditSticky(this.state.currentSticky));
  }

  toggleStickyMenuVisibility = sticky => {
    let currentSticky = sticky;
    if (this.state.isStickyMenuVisible) {
      currentSticky = {};
    }
    this.setState({
      isStickyMenuVisible: !this.state.isStickyMenuVisible,
      currentSticky
    });
  }

  deleteCurrentSticky = () => {
    this.props.screenProps.handleDeleteSticky(this.state.currentSticky);
    //   const index = lodash.findIndex(this.state.taskList, {
    //     id: this.state.currentTask.id
    //   });
    //   const list = this.state.taskList;
    //   list.splice(index, 1);
    //   this.setState({ taskList: list, currentTask: {} }, () => {
        this.toggleStickyMenuVisibility();
    //     this.saveTaskList();
    //   });
  }

  toggleStickyPriority = () => {
    const updatedSticky = this.state.currentSticky;
    updatedSticky.priority = this.state.currentSticky.priority === 1
      ? 2
      : 1;
      this.props.screenProps.handleEditSticky(updatedSticky);
      this.toggleStickyMenuVisibility();
    // const index = lodash.findIndex(this.state.taskList, {
    //   id: this.state.currentTask.id
    // });
    // const updatedTaskList = this.state.taskList;
    // updatedTaskList[index] = updatedTask;
    // this.setState(
    //   {
    //     taskList: updatedTaskList,
    //     isMenuTaskVisible: false,
    //     currentTask: {}
    //   },
    //   () => {
    //     this.saveTaskList();
    //   }
    // );
  }

  hideAddPrompt = () => {
    this.setState({ isAddPromptVisible: false });
  }

  onAddSticky = async value => {
    const newSticky = {
      title: value,
      content: value,
      priority: 1
    };

    // Pull data to App.js
    await this.props.screenProps.handleAddSticky(newSticky);
    this.hideAddPrompt();

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

  displayRenameSticky = sticky => {
    this.setState({ currentSticky: sticky, isRenamePromptVisible: true });
  }

  hideRenamePrompt = () => {
    this.setState({ isRenamePromptVisible: false, currentSticky: {} });
  }

  renameSticky = value => {
    const updatedSticky = this.state.currentSticky;
    updatedSticky.title = value;
    updatedSticky.content = value;
    this.props.screenProps.handleEditSticky(updatedSticky);
    // const index = lodash.findIndex(this.state.taskList, {
    //   id: this.state.currentTask.id
    // });
    // const updatedTaskList = this.state.taskList;
    // updatedTaskList[index] = updatedTask;
    //
    // this.setState({ taskList: updatedTaskList }, () => {
    this.hideRenamePrompt();
    //   this.saveTaskList();
    // });
  }

  saveTaskList = () => {
    AsyncStorage.setItem(storageKey, JSON.stringify(this.state.taskList));
  }

  renderStickyList = () => {
    if (this.props.screenProps.stickys.length > 0) {
      return (
        <TaskList
          onPressCallBack={this.toggleStickyMenuVisibility}
          onLongPressCallBack={this.displayRenameSticky}
          taskList={this.props.screenProps.stickys}
        />
      );
    }
    return (
      <View style={style.noTask}>
        <Text>Cliquer sur le bouton ajouter pour créer une tâche</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView>
          {this.renderStickyList()}
        </ScrollView>
        <MenuTask
          isVisible={this.state.isStickyMenuVisible}
          onDisapearCallBack={this.toggleStickyMenuVisibility}
          onDeleteCallBack={this.deleteCurrentSticky}
          onChangeStatusCallBack={this.toggleStickyPriority}
          setImage={this.setImage}
          handleImageUpload={this.handleImageUpload}
          handleDateChange={this.handleDateChange}
        />
        <TextPrompt
          isVisible={this.state.isAddPromptVisible}
          onCancelCallBack={this.hideAddPrompt}
          onSubmitCallBack={this.onAddSticky}
          title={'Ajouter une nouvelle tâche'}
          placeHolder={'ex : Acheter du lait'}
          defaultValue={''}
        />

        <TextPrompt
          isVisible={this.state.isRenamePromptVisible}
          onCancelCallBack={this.hideRenamePrompt}
          onSubmitCallBack={this.renameSticky}
          title={'Renommer la tâche'}
          defaultValue={
            this.state.currentSticky !== {} ? this.state.currentSticky.content : ''
          }
        />
        <ButtonAddTask onPressCallBack={this.displayAddPrompt} />
      </View>
    );
  }
}
