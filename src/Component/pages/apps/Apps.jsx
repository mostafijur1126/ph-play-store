import React from 'react';
import useApps from '../../hooks/useApps';
import AppCard from '../../Ui/AppCard';

const Apps = () => {
    const {apps, loding} = useApps();
    return (
        <div className='w-full py-20'>
            <div className='max-w-7xl mx-auto text-center'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, doloribus.</p>
                <div className='flex justify-between'>
                    <p>({apps.length})Aps Found</p>
                    <input type="text" placeholder='Search Apps' />
                </div>
                <div>
                    {loding ?
                    <div className="text-center py-20">
                        <div className="inline-flex items-center gap-3 bg-purple-100 px-6 py-3 rounded-full">
                            <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-purple-600 font-semibold">Loading amazing apps...</span>
                        </div>
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {apps.map((app, index) => (
                            <AppCard key={app.id} index={index} app={app}></AppCard>
                        ))}
                    </div>
                }
                </div>
            </div>
        </div>
    );
};

export default Apps;