import { useCallback, useEffect, useState } from 'react';
import { client } from '../../client/contentful';


export const contenFulLogo = () => {
    const [logo, setLogo] = useState({});
    const [isLogoLoadig, setIsLogoLoading] = useState(false);

    const cleanLogo = useCallback((rawData) => {
        const { sys, fields } = rawData;
        const { id } = sys;
        const { logoImage } = fields;
        const description = logoImage.fields.description;
        const title = logoImage.fields.title;
        const url = logoImage.fields.file.url;
        let cleanLogo = { id, description, title, url };
        setLogo(cleanLogo);
    }, [])
    const getLogo = useCallback(async () => {
        setIsLogoLoading(true);
        try {
            const response = await client.getEntry('2twCKLgZb6vvbXEE79qvCq');
            if (response) {
                cleanLogo(response);
            } else {
                setLogo({});
            }
            setIsLogoLoading(false);
        } catch (error) {
            console.log(error);
            setIsLogoLoading(false);
        }
    }, [cleanLogo])

    useEffect(() => {
        getLogo();

    }, [getLogo])

    const { url } = logo;
    
    return { logo };
}

