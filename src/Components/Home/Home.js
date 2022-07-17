import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Login/Loading';
import AddedTask from './AddedTask';
import AddTask from './AddTask';

const Home = () => {
    const [addedTask, setAddedTask] = useState(null);
    const [user] = useAuthState(auth);
    const { data: tasks, isLoading, refetch } = useQuery('addedTask', () => fetch('http://localhost:5000/addedTask', {

    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }


    return (

        <div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

                <div>
                    {user &&
                        <AddedTask />
                    }
                </div>
                <div className="grid px-8 max-h-96 overflow-auto">
                    <h1 className='text-xl text-secondary flex justify-center items-center'>All Tasks</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>S/L No</th>
                                <th>Task Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((task, index) => <AddTask
                                    key={task._id}
                                    index={index}
                                    task={task}
                                    refetch={refetch}
                                    setAddedTask={setAddedTask}
                                >
                                </AddTask>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;