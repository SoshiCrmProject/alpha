import React from 'react'

const Defaults = () => {
    return (
        <div className='md:px-12 px-6'>
            <div className='border-b pb-1 flex justify-between items-center'>
                <h3 className='font-semibold text-lg'>Defaults</h3>
                <button className='text-orange-400 border border-orange-400 px-2.5 py-2 rounded-full text-sm'>Save Changes</button>
            </div>
            <div className='my-3 flex justify-between'>
                <h5 className='font-semibold'>Project Stages</h5>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm'>Create Stage</button>
            </div>
            <div className='my-3 border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_default_table'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>Name</th>
                            <th>Bidding Stage</th>
                            <th>Projects</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bidding</td>
                            <td>Yes</td>
                            <td>72</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Course of Construction</td>
                            <td>No</td>
                            <td>435</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Pre Construction</td>
                            <td><input type="checkbox" /></td>
                            <td>14</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Design Services</td>
                            <td><input type="checkbox" /></td>
                            <td>85</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-5 flex justify-between'>
                <h5 className='font-semibold text-lg'>ALPA Construction, Inc. Project Types</h5>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm'>Add Types</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_types_table'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>Project Types</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Building Addition</td>
                            <td>Cannot be deleted because 26 projects are using it</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Design</td>
                            <td>Cannot be deleted because 26 projects are using it</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-5 flex justify-between'>
                <h5 className='font-semibold text-lg'>ALPA Construction, Inc. Departments</h5>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm'>Add Program</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_types_table'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>Departments</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Construction Operations</td>
                            <td>Cannot be deleted because 26 projects are using it</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Architecture</td>
                            <td>Cannot be deleted because 26 projects are using it</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-5 flex justify-between'>
                <h5 className='font-semibold text-lg'>Bid Types</h5>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm'>Add Bid Type</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_types_table'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>Bid Types</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Construction Operations</td>
                            <td>Cannot be deleted because 26 projects are using it</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Architecture</td>
                            <td>Cannot be deleted because 26 projects are using it</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-5 flex justify-between'>
                <h5 className='font-semibold text-lg'>Owner Types</h5>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm'>Add Owner Type</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_types_table'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>Owner</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Construction Operations</td>
                            <td>Cannot be deleted because 26 projects are using it</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Architecture</td>
                            <td>Cannot be deleted because 26 projects are using it</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-5 flex justify-between'>
                <h5 className='font-semibold text-lg'>Regions</h5>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm'>Add Region</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_types_table'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>Region</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>East</td>
                            <td>Cannot be deleted because 26 projects are using it</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>West</td>
                            <td>Cannot be deleted because 26 projects are using it</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-5 md:w-1/2'>
                <h5 className='font-semibold text-lg'>Advanced Settings</h5>
                <div className='flex mb-2 mt-3'>
                    <label htmlFor="include_storenumber">Include Store Number and Designated Market Area:</label>
                    <input type="checkbox" name="include_storenumber" id="include_storenumber" className='ms-auto w-4 h-4' checked />
                </div>
                <div className='flex my-4'>
                    <label htmlFor="enable_docusign">Enable DocuSign:</label>
                    <input type="checkbox" name="enable_docusign" className='ms-auto w-4 h-4' id="enable_docusign" />
                </div>
                <div className='flex my-2'>
                    <label htmlFor="prevent_overbill">Prevent Overbilling on all Projects:</label>
                    <input type="checkbox" name="prevent_overbill" className='ms-auto w-4 h-4' id="prevent_overbill" checked />
                </div>
            </div>
        </div>
    )
}

export default Defaults