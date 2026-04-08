import React, { useEffect, useState } from 'react';

const useApps = () => {
    const [apps, setApps] = useState([]);
        const [loding, setLoding] = useState(true);
    
        useEffect(() => {
            const faceData = async () => {
                const res = await fetch("/data.json");
                const data = await res.json();
                setTimeout(() => {
                    setApps(data);
                    setLoding(false);
                }, 1000);
            }
            faceData();
        }, []);
    return {apps, loding};
};

export default useApps;