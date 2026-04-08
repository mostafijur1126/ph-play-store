import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import { InstallAppsContext } from '../../../Context/InstallAppsContext';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loding } = useApps();


    const {installApps, setInstallApps} = useContext(InstallAppsContext);
    if (loding) {
        return <p>Loading...</p>
    }
    const exptedApps = apps.find(app => String(app.id) === id);
    const handelInstallApp = () =>{
        const isExist = installApps.find(app => app.id === exptedApps.id);
        if(isExist){
            toast.warn(`${exptedApps.title} Already inntaled`);
            return;
        }
        setInstallApps([...installApps, exptedApps]);
        toast.success(`${exptedApps.title} is installed!`)
    }
    // console.log( installApps);
    return (
        <div>
            <div className='max-w-7xl mx-auto flex items-center gap-10'>
                <div className='w-80'>
                    <img className='h-40' src={exptedApps.image} alt="" />

                </div>
                <div>
                    <h1>{exptedApps.title}</h1>
                    <p>Devloped by: {exptedApps.companyName}</p>
                    <div>
                        <span>{exptedApps.downloads}</span>
                        <span>{exptedApps.ratingAvg}</span>
                        <span>{exptedApps.reviews}</span>
                    </div>
                    <button onClick={handelInstallApp} className='btn'>Install Apps ({exptedApps.size})MB</button>
                    <p>{exptedApps.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;