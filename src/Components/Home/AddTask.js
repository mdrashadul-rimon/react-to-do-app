import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddTask = ({ task, setAddedTask, index, refetch }) => {
    const { taskName, description } = task;

    const [user] = useAuthState(auth);

    var str = description;
    if (str.length > 20)
        str = str.substring(0, 20);

    refetch();

    setAddedTask(task);

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{taskName}</td>
            <td>{str}</td>
            <td>
                <button className='btn btn-accent btn-xs'>Edit</button>
            </td>
            <td>
                <label for="my-modal-3" className='btn btn-primary btn-xs'>Delete</label>

                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="text-lg font-bold">Are you sure you want to delete?</h3>
                        <div class="modal-action">
                            <button class="btn btn-xs bg-rose-500 hover:bg-red-600 rounded border-0">Confirm</button>
                        </div>
                    </div>
                </div>
            </td>
        </tr >

    );
};

export default AddTask;