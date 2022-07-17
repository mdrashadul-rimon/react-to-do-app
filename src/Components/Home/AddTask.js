import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddTask = ({ task, setAddedTask }) => {
    const { taskName, description } = task;

    const [user] = useAuthState(auth);

    setAddedTask(task);

    return (
        <div>
            {taskName}
            {description}
        </div>
    );
};

export default AddTask;