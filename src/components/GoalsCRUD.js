import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import {API_ENDPOINT} from '@env';
import {fontPixel, pixelSizeHorizontal} from '../styles/consts/ratio';

const GoalsCRUD = ({mainGoalList, setMainGoalList, user_id, setLoading}) => {
  const [newMainGoal, setNewMainGoal] = useState('');
  const [subGoalInputs, setSubGoalInputs] = useState({});
  const [showInput, setShowInput] = useState(false);

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
        const response = await fetch(`${API_ENDPOINT}/main-goal`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            isChecked,
            currentUserId: user_id,
          }),
        });

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
      alert('Please add title');
    }
  };

  const handleAddSubgoal = async mainGoalId => {
    const inputText = subGoalInputs[mainGoalId]?.trim();
    if (inputText) {
      try {
        setLoading(true);
        const response = await fetch(`${API_ENDPOINT}/main-goal/sub-goal`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mainGoalId: mainGoalId,
            title: inputText,
            isChecked: false,
          }),
        });

        if (response) {
          const responseData = await response.json();
          const newSubgoalItem = responseData.newSubGoal;
          setMainGoalList(prevMainGoalList =>
            prevMainGoalList.map(goal =>
              goal.id === mainGoalId
                ? {
                    ...goal,
                    subgoals: [...(goal.subgoals || []), newSubgoalItem],
                  }
                : goal,
            ),
          );

          updateSubGoalInput(mainGoalId, '');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Update
  const handleCheckboxChangeMainGoal = async (mainGoalId, newValue) => {
    try {
      setLoading(true);
      const updatedMainGoalList = mainGoalList.map(goal =>
        goal.id === mainGoalId ? {...goal, isChecked: newValue} : goal,
      );
      setMainGoalList(updatedMainGoalList);
      const response = await fetch(`${API_ENDPOINT}/main-goal`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: mainGoalId,
          isChecked: newValue,
        }),
      });

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

      const response = await fetch(`${API_ENDPOINT}/subgoals`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: subgoalId,
          isChecked: newValue,
        }),
      });

      if (!response.ok) {
        console.log('Error updating subgoal isChecked status');
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
        <View style={styles.addCheckboxInput}>
          <TextInput
            style={styles.input}
            placeholder="Enter a new main goal"
            value={newMainGoal}
            onChangeText={text => setNewMainGoal(text)}
            onKeyPress={handleInputKeyPress}
            required={true}
          />
          <TouchableOpacity onPress={handleAddMainGoal}>
            <View style={styles.addCheckboxBtn}>
              <Text style={styles.addcheck}>+ Add Checkbox</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {!showInput && (
        <TouchableOpacity onPress={() => setShowInput(true)}>
          <View style={styles.addCheckboxBtn}>
            <Text style={styles.addcheck}>+ Add New MainGoal</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default GoalsCRUD;

const styles = StyleSheet.create({
  addCheckboxBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeHorizontal(8),
    borderRadius: 5,
    marginLeft: pixelSizeHorizontal(10),
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
