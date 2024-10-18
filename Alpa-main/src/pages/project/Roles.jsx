import React from 'react'

const Roles = () => {
    return (
        <div className='md:px-12 px-6'>
            <h3 className='font-semibold text-lg border-b pb-1'>Roles</h3>
            <div className='flex justify-end my-4'>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full'>Create New</button>
            </div>
            <div className='border rounded-md mt-3 lg:overflow-hidden overflow-auto'>
                <table className='w-full project_dates_table'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Group</th>
                            <th>Add to Project Dashboard</th>
                            <th>Portfolio Filter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>java</td>
                            <td>Person</td>
                            <td>
                                <select className='outline-none border border-gray-300 p-2 rounded-md' name="group" id="group">
                                    <option disabled selected>select group</option>
                                    <option value="Construction Manager">Construction Manager</option>
                                    <option value="Design Team">Design Team</option>
                                    <option value="General Contractors">General Contractors</option>
                                    <option value="Miscellaneous">Miscellaneous</option>
                                    <option value="Owner">Owner</option>
                                    <option value="Speciality Contractors">Speciality Contractors</option>
                                    <option value="Sub Contractor">Sub Contractor</option>
                                    <option value="Other">Other</option>
                                </select>
                            </td>
                            <td><input type="checkbox" /></td>
                            <td><input type="checkbox" /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jordan</td>
                            <td>Person</td>
                            <td>
                                <select className='outline-none border border-gray-300 p-2 rounded-md' name="group" id="group">
                                    <option disabled selected>select group</option>
                                    <option value="Construction Manager">Construction Manager</option>
                                    <option value="Design Team">Design Team</option>
                                    <option value="General Contractors">General Contractors</option>
                                    <option value="Miscellaneous">Miscellaneous</option>
                                    <option value="Owner">Owner</option>
                                    <option value="Speciality Contractors">Speciality Contractors</option>
                                    <option value="Sub Contractor">Sub Contractor</option>
                                    <option value="Other">Other</option>
                                </select>
                            </td>
                            <td><input type="checkbox" /></td>
                            <td><input type="checkbox" /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Alex</td>
                            <td>Person</td>
                            <td>
                                <select className='outline-none border border-gray-300 p-2 rounded-md' name="group" id="group">
                                    <option disabled selected>select group</option>
                                    <option value="Construction Manager">Construction Manager</option>
                                    <option value="Design Team">Design Team</option>
                                    <option value="General Contractors">General Contractors</option>
                                    <option value="Miscellaneous">Miscellaneous</option>
                                    <option value="Owner">Owner</option>
                                    <option value="Speciality Contractors">Speciality Contractors</option>
                                    <option value="Sub Contractor">Sub Contractor</option>
                                    <option value="Other">Other</option>
                                </select>
                            </td>
                            <td><input type="checkbox" /></td>
                            <td><input type="checkbox" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Roles