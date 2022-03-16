import React, {useState} from 'react';
import { StyleSheet, Text, View , KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import Task from './components/Task';

import Icon from 'react-native-vector-icons/EvilIcons'

export default function App() {
  const [task,setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  function handleAddTask() {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  function completeTask(index) {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Tarefas do dia</Text>
      
      <View style={styles.items}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        {
          taskItems.map((item, index) => {
            return (
              <View style={styles.task} key={index} >
                <Task title={item} />
                <Icon name="trash" style={styles.trash} onPress={() => completeTask(index)} />
              </View>
              )
          }
            )
        }
      </ScrollView>
      </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Escreva a Tarefa'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal:20
  },
  sectionTitle: {
    fontSize:24,
    fontWeight: 'bold',
    color: '#000',
  },
  items: {
    marginTop:30,
    maxHeight: '75%',
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom:60,
    width: '90%',
    marginHorizontal: 20,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding:15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent:'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {

  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trash :{
    fontSize:40
  }
});
