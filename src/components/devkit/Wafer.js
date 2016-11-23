import React from 'react';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import MailIcon from 'material-ui/svg-icons/content/mail';
import FlagIcon from 'material-ui/svg-icons/content/flag';
import {Wafer} from 'fabric-ui';

const WaferDemo = () => {
    return (
        <section>
            <h2 className='font-light'>Wafers <small>Comes in many colors</small></h2>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='row '>
                        <div className='col-xs-6'>
                            <Wafer title={23}
                                icon={<NotificationsIcon className='text-muted' style={{ height: '80px', width: '80px' }}/>}
                                white subtitle='Notifications'/>
                        </div>
                        <div className='col-xs-6'>
                            <Wafer title={10} subtitle='File Uploads'
                                icon={<FileCloudDownload className='text-white-base' style={{ height: '80px', width: '80px' }}/>}
                                info />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-xs-6'>
                            <Wafer title={10}
                                icon={<MailIcon className='text-white-base' style={{ height: '80px', width: '80px' }}/>}
                                primary subtitle='New Mails'/>
                        </div>
                        <div className='col-xs-6'>
                            <Wafer
                                icon={<FlagIcon className='text-white-base' style={{ height: '80px', width: '80px' }}/>}
                                title={10} warning subtitle='Flagged Items'/>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                </div>
            </div>
        </section>
    )
}

export default WaferDemo;