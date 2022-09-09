import { useCallback, useEffect, useState } from 'react';
import { client } from '../../client/contentful';

export const CarouselConten = () => {

    const [isCarousel, setIsCarousel] = useState(false);//isloading,setLoagi
    const [carousel, setCarousel] = useState([]);//carouselSlice,setCarouselSlice

    const cleanCarousell = useCallback((rawData) => {
        const cleanSlice = rawData.map((slide) => {
            const { sys, fields } = slide;
            const { id } = sys;
            const imgOne = fields.imgOne.fields.file.url;
            const imgTwo = fields.imgTwo.fields.file.url;
            const imgThree = fields.imgTree.fields.file.url;
            let updateSlce = { id, imgOne, imgTwo, imgThree };
            return updateSlce;
        })
        setCarousel(cleanSlice);
    }, [])

    const getCarousel = useCallback(async () => {
        setIsCarousel(true);
        try {
            const response = await client.getEntries({ content_type: 'carrusel' });
            const responseData = response.items;
            if (responseData) {
                cleanCarousell(responseData);
            } else {
                setCarousel([]);
            }
            setIsCarousel(false);
        } catch (error) {
            console.log(error);
            setIsCarousel(false);
        }
    }, [cleanCarousell])

    useEffect(() => {
        getCarousel();

    }, [getCarousel])

    if (Object.keys(carousel).length === 0) {
        return <div>Loading</div>
    }
    
    
    
    const { imgOne, imgTwo, imgThree } = carousel[0];
    return{
        imgOne,
        imgTwo,
        imgThree
    }
}
