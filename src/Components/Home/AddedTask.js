import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Login/Loading';

const AddedTask = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: addedTask, isLoading } = useQuery('addedTask', () => fetch('http://localhost:5000/addedTask').then(res => res.json()))

    const onSubmit = async data => {
        const addTask = {
            taskName: data.taskName,
            description: data.description
        }
        fetch('http://localhost:5000/addedTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addTask)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Task Added Successfully');
                    reset();
                }
                else {
                    toast.error('Failed to add Task');
                }
            })
        }

        if (isLoading) {
            return <Loading />
        }

    return (
        <div className='grid items-center justify-center'>
            <h2 className='text-xl text-secondary text-center'>Add a Task</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-2'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Task Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Write task name"
                            className="input input-bordered w-full max-w-xs" maxlength="20"
                            {...register("taskName", {
                                required: {
                                    value: true,
                                    message: 'Name of task is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.taskName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.taskName.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Task Description</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Description could be long or short"
                            className="input input-bordered w-full max-w-xs h-24"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>
                    <input className='btn w-full max-w-xs btn-primary text-white' type="submit" value="Add" />
                </form>
        </div>
    );
};

export default AddedTask;