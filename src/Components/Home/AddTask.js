import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddTask = ({ task, setAddedTask, index, refetch }) => {
    const { taskName, description } = task;

    const [user] = useAuthState(auth);

    refetch();

    setAddedTask(task);

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{taskName}</td>
            <td>{description}</td>
        </tr>

    );
};

export default AddTask;