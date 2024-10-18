import React, { useState } from 'react'
import ToggleBtn from '../../components/ui/ToggleBtn'

const Notification = () => {

    const [appNoti, setAppNoti] = useState(false);
    const [directMsgs, setDirectMsgs] = useState(false);
    const [groupMsgs, setGroupMsgs] = useState(false);
    const [conversationMsgs, setConversationMsgs] = useState(false);
    const [groupMentionMsgs, setGroupMentionMsgs] = useState(false);

    const toggleAppNoti = () => {
        setAppNoti(!appNoti);
    }
    const toggleDirectMsgs = () => {
        setDirectMsgs(!directMsgs);
    }
    const toggleGroupMsgs = () => {
        setGroupMsgs(!groupMsgs);
    }
    const toggleConversationMsgs = () => {
        setConversationMsgs(!conversationMsgs);
    }
    const toggleGroupMentionMsgs = () => {
        setGroupMentionMsgs(!groupMentionMsgs);
    }

    return (
        <div className='bg-white xl:px-14 lg:px-12 px-6 py-5'>
            <div className='flex justify-between'>
                <h4 className='font-bold text-lg'>Notification</h4>
                <div className='flex space-x-3'>
                    <button className='border border-orange-400 text-orange-400 px-3 py-1 rounded-full'>Cancel</button>
                    <button className='bg-orange-400 text-white px-3 py-1 rounded-full'>Update</button>
                </div>
            </div>
            <div>
                <div className='flex justify-between items-center my-4 pt-3'>
                    <h6 className='border-b font-semibold pb-1 flex flex-1'>Your App Notifications</h6>
                    <div className='mb-3'>
                        <ToggleBtn state={appNoti} onChange={toggleAppNoti} />
                    </div>
                </div>
                <p className=''>When you are using the app, Procore will display notifications alerting you of status updates and incoming messages. You can select which tools send notifications.</p>
                <button className='bg-[#1C2852] text-white px-6 py-2 rounded-md my-5'>Show an example Notification</button>
            </div>
            <div>
                <h6 className='mb-2 border-b font-semibold pb-1'>Notification Preferences by Tool or Feature</h6>
                <p>Conversations</p>
                <p>Receive notifications for :</p>
                <div className='my-2'>
                    <input type="radio" id='conversations' />
                    <label htmlFor="conversations">All new Conversations messages</label>
                </div>
                <div className='my-2'>
                    <input type="radio" id='settings' />
                    <label htmlFor="settings">Custom Settings</label>
                </div>
                <div className='flex my-3 ms-6'>
                    <p>New Direct Messages</p>
                    <div className='ml-64'>
                        <ToggleBtn state={directMsgs} onChange={toggleDirectMsgs} />
                    </div>
                </div>
                <div className='flex my-5 ms-6'>
                    <p>New Group Messages</p>
                    <div className='ml-64'>
                        <ToggleBtn state={groupMsgs} onChange={toggleGroupMsgs} />
                    </div>
                </div>
                <div className='flex my-4 ms-6'>
                    <p>New item conversation messages</p>
                    <div className='ml-40'>
                        <ToggleBtn state={conversationMsgs} onChange={toggleConversationMsgs} />
                    </div>
                </div>
                <div className='flex my-4 ms-6'>
                    <p>Mentions in group and item conversations</p>
                    <div className='ml-24'>
                        <ToggleBtn state={groupMentionMsgs} onChange={toggleGroupMentionMsgs} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification