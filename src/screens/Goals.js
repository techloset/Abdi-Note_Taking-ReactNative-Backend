import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import BottomMenuBar from '../navigation/BottomMenuBar';

const Goals = () => {
  const [newMainTask, setNewMainTask] = useState('');
  const [mainTaskList, setMainTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subTaskInputs, setSubTaskInputs] = useState({});
  

   useEffect(() => {
    fetchMainTasks();
  }, [""]);


  const updateSubTaskInput = (mainTaskId, value) => {
    setSubTaskInputs({...subTaskInputs, [mainTaskId]: value});
  };

  const handleAddMainTask = async () => {
    if (newMainTask.trim() !== '') {
      try {
        setLoading(true);
        const response = await fetch(
          'https://notesapp-backend-omega.vercel.app/api/maintasks',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              label: newMainTask,
              checked: false,
            }),
          },
        );

        if (response.ok) {
          const newMainTaskItem = await response.json();
          let array=mainTaskList
          array.push(newMainTaskItem.mainTask)
          // setMainTaskList([...mainTaskList, newMainTaskItem]);
          setMainTaskList(array)
          setNewMainTask('');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAddSubtask = async (mainTaskId) => {
    if (subTaskInputs[mainTaskId] && subTaskInputs[mainTaskId].trim() !== '') {
      try {
        setLoading(true);
        const response = await fetch(
          `https://notesapp-backend-omega.vercel.app/api/subtasks`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: mainTaskId,
              label: subTaskInputs[mainTaskId],
              checked: false,
            }),
          },
        );

        if (response.ok) {
          const newSubtaskItem = await response.json();
          const updatedMainTaskList = mainTaskList.map(task =>
            task.id === mainTaskId
              ? {...task, subtasks: [...(task.subtasks || []), newSubtaskItem.subtask]}
              : task,
          );
          setMainTaskList(updatedMainTaskList);
          // console.log(newSubtaskItem,"======================sub");
          updateSubTaskInput(mainTaskId, '');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchMainTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://notesapp-backend-omega.vercel.app/api/maintasks',
        
      );
      if (response.ok) {
        const data = await response.json();
        // Fetch subtasks for each main task
        const mainTasksWithSubtasks = await Promise.all(
          data.map(async mainTask => {
            const subtaskResponse = await fetch(
              `https://notesapp-backend-omega.vercel.app/api/subtasks?id=${mainTask.id}`,
            );
            if (subtaskResponse.ok) {
              const subtasks = await subtaskResponse.json();
              return {...mainTask, subtasks};
            } else {
              return mainTask;
            }
          }),
        );

        setMainTaskList(mainTasksWithSubtasks);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };




  const handleDeleteMainTask = async mainTaskId => {
    const updatedMainTaskList = mainTaskList.filter(
      task => task.id !== mainTaskId,
    );
    setMainTaskList(updatedMainTaskList);
    try {
      setLoading(true);
      const response = await fetch(
        `https://notesapp-backend-omega.vercel.app/api/maintasks`,
        {
          method: 'DELETE',
          body: JSON.stringify({id: mainTaskId}),
        },
      );

      if (response.ok) {
        Toast.success('Item deleted');
      } else {
        console.log('Error');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSubtask = async (subtaskId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://notesapp-backend-omega.vercel.app/api/subtasks`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: subtaskId }),
        },
      );
  
      if (response.ok) {
        // Remove the deleted subtask from the state
        const updatedMainTaskList = mainTaskList.map((task) => {
          if (task.subtasks) {
            task.subtasks = task.subtasks.filter((subtask) => subtask.id !== subtaskId);
          }
          return task;
        });
  
        setMainTaskList(updatedMainTaskList);
  
        Toast.success('Item deleted');
      } else {
        console.error('Error deleting subtask');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleCheckboxChangeMainTask = async (mainTaskId, newValue) => {
    try {
      setLoading(true);

      const updatedMainTaskList = mainTaskList.map(task =>
        task.id === mainTaskId ? {...task, checked: newValue} : task,
      );
      setMainTaskList(updatedMainTaskList);
      const response = await fetch(
        `https://notesapp-backend-omega.vercel.app/api/maintasks`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: mainTaskId,
            checked: newValue,
          }),
        },
      );

      if (!response.ok) {
        console.log('Error updating main task checked status');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };



  const handleCheckboxChangeSubtask = async (subtaskId, newValue) => {
    try {
      setLoading(true);
  
      const updatedMainTaskList = mainTaskList.map((task) => {
        if (task.subtasks) {
          task.subtasks = task.subtasks.map((subtask) =>
            subtask.id === subtaskId ? { ...subtask, checked: newValue } : subtask
          );
        }
        return task;
      });
  
      setMainTaskList(updatedMainTaskList);
  
      const response = await fetch(`https://notesapp-backend-omega.vercel.app/api/subtasks`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: subtaskId,
          checked: newValue,
        }),
      });
  
      if (!response.ok) {
        console.log('Error updating subtask checked status');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.main}>
      <HeaderBack title="Back" />
      <View style={styles.line}></View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.taskDiv}>
            <Text style={styles.taskHeader}>📋Goals</Text>
          </View>

          {loading ? (
            <ActivityIndicator
              size="large"
              color="#6A3EA1"
              style={styles.loadingIndicator}
            />
          ) : (
            <View style={{marginTop: 20}}>
              {/* Render Main Tasks */}
              {mainTaskList.map((mainTask, i) => (
                <View key={i}>
                  <View style={styles.taskItem} key={mainTask.id}>
                    <CheckBox
                      style={styles.checkbox}
                      tintColors={{true: '#6A3EA1', false: 'gray'}}
                      value={mainTask.checked}
                      onValueChange={newValue => {
                        handleCheckboxChangeMainTask(
                          mainTask.id,
                          newValue,
                          mainTask.label,
                        );
                      }}
                    />
                    <Text style={styles.taskLabel}>{mainTask.label}</Text>
                    <TouchableOpacity
                      onPress={() => handleDeleteMainTask(mainTask.id)}>
                      <Icon name="delete" size={24} color="red" />
                    </TouchableOpacity>
                  </View>

                  {/* Render Subtasks */}
                  {mainTask.subtasks &&
                    mainTask.subtasks.map((subtask, i) => (
                      <View style={styles.subtaskItem} key={i}>
                        <CheckBox
                          style={styles.checkbox}
                          tintColors={{true: '#6A3EA1', false: 'gray'}}
                          value={subtask.checked}
                          onValueChange={newValue => {
                            handleCheckboxChangeSubtask(
                              subtask.id,
                              newValue,
                              subtask.label,
                            );
                          }}
                        />
                        <Text style={styles.subtaskLabel}>{subtask.label}</Text>
                        <TouchableOpacity
                          onPress={() => handleDeleteSubtask(subtask.id)}>
                          <Icon name="delete" size={24} color="red" />
                        </TouchableOpacity>
                      </View>
                    ))}
                  {/* Add Subtask */}
                  <View style={styles.addSubTaskInput}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter a new subtask"
                      value={subTaskInputs[mainTask.id] || ''}
                      onChangeText={text =>
                        updateSubTaskInput(mainTask.id, text)
                      }
                    />
                    <TouchableOpacity
                      onPress={() => handleAddSubtask(mainTask.id)}>
                      <View style={styles.addButton}>
                        <Text style={styles.addButtonText}>+ Add Subtask</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}

              {/* Add Main Task */}
              <View style={styles.addTaskInput}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter a new main task"
                  value={newMainTask}
                  onChangeText={text => setNewMainTask(text)}
                />
                <TouchableOpacity onPress={handleAddMainTask}>
                  <View style={styles.addButton}>
                    <Text style={styles.addButtonText}>+ Add Main Task</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <BottomMenuBar />
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#EFEEF0',
    marginTop: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  taskDiv: {
    marginTop: 20,
  },
  taskHeader: {
    color: 'black',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.4,
  },
  taskItem: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  subtaskItem: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  checkbox: {
    marginTop: 6,
  },
  taskLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#180E25',
    lineHeight: 22.4,
    marginTop: 5,
    flex: 1,
  },
  subtaskLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#180E25',
    lineHeight: 19.6,
    marginTop: 3,
    flex: 1,
  },
  addTaskInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  addSubTaskInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#6A3EA1',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 12,
    fontSize: 12,
    color: 'black',
  },
  addButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    marginLeft: 10,
    // backgroundColor: '#6A3EA1',
  },
  addButtonText: {
    color: '#6A3EA1',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  loadingIndicator: {
    marginTop: 20,
  },
});









