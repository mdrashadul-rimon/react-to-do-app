import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Login/Loading';
import AddedTask from './AddedTask';
import AddTask from './AddTask';

const Home = () => {
    const [addedTask, setAddedTask] = useState(null);

    const { data: tasks, isLoading, refetch } = useQuery('addedTask', () => fetch('http://localhost:5000/addedTask', {

    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <h1>All Tasks</h1>
            <AddedTask />
            {
                tasks.map(task => <AddTask
                    key={task._id}
                    task={task}
                    refetch={refetch}
                    setAddedTask={setAddedTask}
                    >
                </AddTask>)
            }
        </div>
    );
};

export default Home;