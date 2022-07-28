import {useState} from 'react';
import Tasks from './components/Tasks';
import Header from './components/Header';
import AddTask from './components/AddTask';
import { v4 } from 'uuid';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: 'Go work for a colleague',
      day: '16th Aug 2pm',
      reminder: 'true'
    },
    {
      id: 2, 
      text: 'Dentist Appointment',
      day: '2nd Aug 2pm',
      reminder: 'true'
    },
    {
      id: 3, 
      text: 'Skateboarding',
      day: '20th Aug 2pm',
      reminder: 'false'
    }
  ]);

  //Add Task
  const addTask = (task) => {
    const newTask = {id:v4(), ...task}
    setTasks([...tasks, newTask])
  }
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  return (
    <div className="container">
      <Header title= 'Task Tracker' 
      onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      <Tasks tasks= {tasks} onDelete= {deleteTask} onToggle = {toggleReminder}/> : 'No tasks to show!'
      }
    </div>
  );
}

export default App;
