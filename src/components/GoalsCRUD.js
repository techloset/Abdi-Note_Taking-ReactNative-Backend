import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import {
  fontPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../styles/consts/ratio';
import {COLOR} from '../styles/consts/GlobalStyles';
import {useToast} from 'react-native-toast-notifications';

const GoalsCRUD = ({mainGoalList, setMainGoalList, user_id, setLoading}) => {
  const [newMainGoal, setNewMainGoal] = useState('');
  const [subGoalInputs, setSubGoalInputs] = useState({});
  const [showInput, setShowInput] = useState(false);
  const toast = useToast();

  const handleInputKeyPress = event => {
    if (event.key === 'Enter') {
      handleAddCheckbox();
    }
  };

  // Add
  const updateSubGoalInput = (mainGoalId, value) => {
    setSubGoalInputs(prevInputs => ({...prevInputs, [mainGoalId]: value}));
  };

  const handleAddMainGoal = async () => {
    if (newMainGoal.trim() !== '') {
      const title = newMainGoal;
      const isChecked = false;

      try {
        setLoading(true);
        const response = await fetch(
          `https://abdi-note-app-backend-prisma.vercel.app/api/main-goal`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title,
              isChecked,
              currentUserId: user_id,
            }),
          },
        );

        if (response) {
          const array = await response.json();
          const responseData = array.newMainGoal;
          setMainGoalList(prevList => [...prevList, responseData]);
          setNewMainGoal('');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    } else {
      toast.show('Please add title');
    }
  };

  const handleAddSubgoal = async mainGoalId => {
    const inputText = subGoalInputs[mainGoalId]?.trim();
    if (!inputText) {
      toast.show('Please enter a title');
    }
    if (inputText) {
      try {
        setLoading(true);
        const response = await fetch(
          `https://abdi-note-app-backend-prisma.vercel.app/api/main-goal/sub-goal`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              mainGoalId: mainGoalId,
              title: inputText,
              isChecked: false,
            }),
          },
        );

        if (response.ok) {
          const responseData = await response.json();
          const newSubgoalItem = responseData.newSubGoal;

          // Update the main goal's isChecked to false
          const updatedMainGoalList = mainGoalList.map(goal =>
            goal.id === mainGoalId
              ? {
                  ...goal,
                  isChecked: false,
                  subgoals: [...(goal.subgoals || []), newSubgoalItem],
                }
              : goal,
          );
          setMainGoalList(updatedMainGoalList);

          updateSubGoalInput(mainGoalId, '');
        } else {
          console.log('Error adding subgoal:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Update

  // Update
  const handleCheckboxChangeMainGoal = async (mainGoalId, newValue) => {
    try {
      setLoading(true);

      // Update the local state
      const updatedMainGoalList = mainGoalList.map(goal => {
        if (goal.id === mainGoalId) {
          // Update main goal isChecked
          goal.isChecked = newValue;

          // Update subgoals isChecked
          if (goal.subgoals) {
            goal.subgoals = goal.subgoals.map(subgoal => ({
              ...subgoal,
              isChecked: newValue,
            }));
          }
        }
        return goal;
      });

      setMainGoalList(updatedMainGoalList);

      // Update the database
      const response = await fetch(
        `https://abdi-note-app-backend-prisma.vercel.app/api/main-goal`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: mainGoalId,
            isChecked: newValue,
          }),
        },
      );

      if (!response.ok) {
        console.log('Error updating main goal isChecked status');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChangeSubgoal = async (subgoalId, newValue) => {
    try {
      setLoading(true);

      // Update the local state
      const updatedMainGoalList = mainGoalList.map(goal => {
        if (goal.subgoals) {
          goal.subgoals = goal.subgoals.map(subgoal =>
            subgoal.id === subgoalId
              ? {...subgoal, isChecked: newValue}
              : subgoal,
          );
        }
        return goal;
      });
      setMainGoalList(updatedMainGoalList);

      // Update the database
      const response = await fetch(
        `https://abdi-note-app-backend-prisma.vercel.app/api/main-goal/sub-goal`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: subgoalId,
            isChecked: newValue,
          }),
        },
      );

      if (!response.ok) {
        console.log(
          'Error updating subgoal isChecked status. Server response:',
          response,
        );
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {mainGoalList?.length > 0 ? (
        mainGoalList.map((mainGoal, i) => (
          <View key={i}>
            <View style={styles.goalItem} key={mainGoal.id}>
              <CheckBox
                style={styles.checkbox}
                tintColors={{true: '#6A3EA1', false: 'gray'}}
                value={mainGoal.isChecked}
                onValueChange={newValue => {
                  handleCheckboxChangeMainGoal(
                    mainGoal.id,
                    newValue,
                    mainGoal.title,
                  );
                }}
              />
              <Text style={styles.goalLabel}>{mainGoal.title}</Text>
            </View>

            {/* Render Subgoals */}
            {mainGoal?.subgoals?.length > 0 &&
              mainGoal.subgoals.map((subgoal, j) => (
                <View style={styles.subgoalItem} key={j}>
                  <CheckBox
                    style={styles.checkbox}
                    tintColors={{true: '#6A3EA1', false: 'gray'}}
                    value={subgoal?.isChecked}
                    onValueChange={newValue => {
                      handleCheckboxChangeSubgoal(
                        subgoal.id,
                        newValue,
                        subgoal.title,
                      );
                    }}
                  />
                  <Text style={styles.subgoalLabel}>{subgoal?.title}</Text>
                </View>
              ))}

            {/* Add Subgoal */}
            <View style={styles.addSubGoalInput}>
              <TextInput
                style={styles.input}
                placeholder="Enter a new subgoal"
                value={subGoalInputs[mainGoal.id] || ''}
                placeholderTextColor={COLOR.black}
                onChangeText={text => updateSubGoalInput(mainGoal.id, text)}
              />
              <TouchableOpacity onPress={() => handleAddSubgoal(mainGoal.id)}>
                <View style={styles.addButton}>
                  <Text style={styles.addButtonText}>+ Add Subgoal</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text>No Goal found</Text>
      )}
      {/* Add Main Goal */}
      {showInput && (
        <View style={styles.addMainGoal}>
          <TextInput
            style={styles.inputGoal}
            placeholder="Enter a new main goal"
            placeholderTextColor={COLOR.black}
            value={newMainGoal}
            onChangeText={text => setNewMainGoal(text)}
            onKeyPress={handleInputKeyPress}
            required={true}
          />
          <View style={styles.addMainGoalBtns}>
            <TouchableOpacity onPress={handleAddMainGoal}>
              <View style={styles.addCheckboxBtn}>
                <Text style={styles.addcheck}>+ Add Checkbox</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowInput(false)}>
              <View
                style={[
                  styles.addCheckboxBtn,
                  {backgroundColor: COLOR.carrot},
                ]}>
                <Text style={[styles.addcheck, {color: COLOR.white}]}>
                  Cancel
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {!showInput && (
        <TouchableOpacity onPress={() => setShowInput(true)}>
          <View
            style={[
              styles.addCheckboxBtnMain,
              {marginTop: pixelSizeHorizontal(10)},
            ]}>
            <Text style={styles.addcheck}>+ Add New MainGoal</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default GoalsCRUD;

const styles = StyleSheet.create({
  addMainGoalBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: pixelSizeHorizontal(10),
  },
  addMainGoal: {
    marginTop: pixelSizeHorizontal(20),
  },
  addCheckboxBtnMain: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(8),
    paddingVertical: pixelSizeHorizontal(4),
    borderRadius: widthPixel(20),
    borderWidth: widthPixel(2),
    justifyContent: 'center',
    width: widthPixel(200),
    alignSelf: 'center',
    marginTop: pixelSizeHorizontal(15),
  },
  addCheckboxBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(8),
    paddingVertical: pixelSizeHorizontal(4),
    borderRadius: widthPixel(20),
    borderWidth: widthPixel(1),
  },
  addcheck: {
    color: '#6A3EA1',
    fontSize: fontPixel(16),
    textDecorationLine: 'underline',
  },
  goalItem: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  subgoalItem: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  checkbox: {
    marginTop: 6,
  },
  goalLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#180E25',
    lineHeight: 22.4,
    marginTop: 5,
    flex: 1,
  },
  subgoalLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#180E25',
    lineHeight: 19.6,
    marginTop: 3,
    flex: 1,
  },
  addGoalInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  addSubGoalInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 5,
  },
  inputGoal: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLOR.goal,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 12,
    fontSize: 12,
    color: 'black',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLOR.purple,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 12,
    fontSize: 12,
    color: 'black',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#6A3EA1',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
