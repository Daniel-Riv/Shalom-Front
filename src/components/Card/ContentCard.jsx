import { useCallback, useEffect, useState } from 'react';
import { client } from '../../client/contentful';

export const ContentCard = () => {

    const [isCard, setIsCard] = useState(false);//isloading,setLoagi
    const [categories, setCard] = useState([]);//carouselSlice,setCarouselSlice

    const cleanCard = useCallback((rawData) => {
        const cleanSlice = rawData.map((slide) => {
            const { sys, fields } = slide;
            const { id } = sys;
            const {categoria, descripcion,imagen,precio} = fields;
            const {url}= imagen.fields.file;
           /*  const imgOne = fields.imgOne.fields.file.url;
            const imgTwo = fields.imgTwo.fields.file.url;
            const imgThree = fields.imgTree.fields.file.url;
            let updateSlce = { id, imgOne, imgTwo, imgThree }; */
            return {id,categoria,descripcion,url,precio};
        })
        setCard(cleanSlice);
    }, [])

    const getCarousel = useCallback(async () => {
        setIsCard(true);
        try {
            const response = await client.getEntries({ content_type: 'cardsCategory' });
            const responseData = response.items;
            if (responseData) {
                cleanCard(responseData);
            } else {
                setCard([]);
            }
            setIsCard(false);
        } catch (error) {
            console.log(error);
            setIsCard(false);
        }
    }, [cleanCard])

    useEffect(() => {
        getCarousel();

    }, [getCarousel])


    return{
        categories
    }  
}
