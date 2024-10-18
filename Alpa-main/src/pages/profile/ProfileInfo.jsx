import React, { useRef, useState } from 'react'
import { FaCamera, FaUser } from 'react-icons/fa';
import EditorQuill from '../../components/ui/EditorQuill';

const ProfileInfo = () => {
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className='bg-white md:px-14 px-6 py-4 profileInfo'>
            <div className='flex justify-between'>
                <h4 className='font-bold text-lg'>My Profile</h4>
                <div className='flex space-x-3'>
                    <button className='border border-orange-400 text-orange-400 px-3 py-1 rounded-full'>Cancel</button>
                    <button className='bg-orange-400 text-white px-3 py-1 rounded-full'>Update</button>
                </div>
            </div>
            <div className='flex items-center py-4'>
                <div className="relative">
                    <div className="w-32 h-32">
                        {image ? (
                            <img
                                src={image}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full border-2 border-gray-300"
                            />
                        ) : (
                            <FaUser className="w-full h-full object-cover rounded-full border-2 border-gray-300 text-gray-400" />
                        )}
                    </div>

                    <button
                        type="button"
                        className="text-white cameraBtn"
                        onClick={() => fileInputRef.current.click()}
                    >
                        <FaCamera className="mr-2" />
                    </button>

                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </div>
                <div className='ml-4'>
                    <p className='font-semibold'>Alexa Rawls</p>
                    <p className='text-gray-400 text-sm'>alexa324123@gmail.com</p>
                </div>
            </div>
            <div>
                <h6 className='font-semibold pb-1 border-b my-3'>Personal Information</h6>
                <div className='p-2 grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="name">First Name</label>
                        <input type="text" id='name' placeholder='Your First Name' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id='lastname' placeholder='Your Last Name' />
                    </div>
                </div>
                <div className='p-2 grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="jobtitle">Job Title</label>
                        <input type="text" id='jobtitle' placeholder='Job Title' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="businessphone">Business Phone</label>
                        <input type="text" id='businessphone' placeholder='+1 (123) 456-7890' />
                    </div>
                </div>
                <div className='p-2 grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="initials">Initials</label>
                        <input type="text" id='initials' placeholder='SW' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="cellphone">Cell Phone</label>
                        <input type="text" id='cellphone' placeholder='+1 (123) 456-7890' />
                    </div>
                </div>
                <div className='p-2 grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id='email' placeholder='soshi@eonweavelabs.com' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="fax">Fax</label>
                        <input type="text" id='fax' />
                    </div>
                </div>
            </div>
            <div>
                <h6 className='font-semibold pb-1 border-b my-3'>Address Information</h6>
                <div>
                    <label htmlFor="address">Address</label>
                    <textarea id="address" placeholder='Enter Your Address' className='w-full' rows='4'></textarea>
                </div>
                <div className='flex md:space-x-6 space-x-4 flex-wrap'>
                    <div className='flex flex-col flex-1'>
                        <label htmlFor="city">City</label>
                        <input type="text" id='city' placeholder='Enter your city name' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="country">Country</label>
                        <input type="text" id='country' placeholder='Enter your country' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="state">State</label>
                        <input type="text" id='state' placeholder='Enter your state' />
                    </div>
                </div>
                <div className='p-2 grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="zip">Zip</label>
                        <input type="text" id='zip' placeholder='Enter your zip code' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="language">Country Language</label>
                        <input type="text" id='language' placeholder='Enter your country language' />
                    </div>
                </div>
            </div>
            <div>
                <h6 className='font-semibold pb-1 border-b my-3'>Additional Information</h6>
                <div className='flex flex-col'>
                    <label htmlFor="signature">Email Signature</label>
                    <EditorQuill placeholder='Enter your signature' />
                </div>
                <div className='flex flex-col mt-4'>
                    <label>Link DocuSign Account:</label>
                    <button className='bg-[#1C2852] text-white px-6 py-2 w-fit rounded-md'>Login with DocuSign</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo