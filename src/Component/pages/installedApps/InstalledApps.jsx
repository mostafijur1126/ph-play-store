import React, { useContext } from 'react';
import { InstallAppsContext } from '../../../Context/InstallAppsContext';
import { DiBackbone } from 'react-icons/di';
import { toast } from 'react-toastify';

const InstalledApps = () => {
    const { installApps, setInstallApps } = useContext(InstallAppsContext);
    // console.log(installApps);
    const handelUninstallApp = (app) => {
        const restApps = installApps.filter(iapp => iapp.id != app.id);
        setInstallApps(restApps);
        toast.warn(`${app.title} is installed`)
    }
    return (
        <div>
            <div>
                {
                    installApps.map(app => {
                        return (
                            <div className='max-w-7xl mx-auto'>
                                <div className='flex items-center gap-4 bg-amber-200 mb-10 p-5 rounded-2xl'>
                                    <div>
                                        <img className='h-30' src={app.image} alt="" />
                                    </div>
                                    <div>
                                        <h1>{app.title}</h1>
                                    </div>
                                    <button onClick={()=>handelUninstallApp(app)} className='btn'>Uninstall</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default InstalledApps;