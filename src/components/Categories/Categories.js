import React from 'react';
import Category from './Category/Category';
import Carousel from "react-elastic-carousel";
import Item from "./Category/Item";
import { makeStyles } from '@material-ui/core/styles';


const categories = [
    {
        id: 1,
        name: 'Electronic',
        image: 'https://media.istockphoto.com/vectors/household-appliances-and-electronic-devices-icons-vector-id498671359'
    },
    {
        id: 2,
        name: 'Sports, Entertainment and Games',
        image: 'https://assets-global.website-files.com/600faaecb03ce57f6fa98050/6037d22eb60b9e2aedbdbc97_DDM-Mar-20-SEM%20Career%20Preview-p-1080.jpeg'
    },
    {
        id: 3,
        name: 'Car',
        image: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg'
    },
    {
        id: 4,
        name: 'Motorcycles and Other Vehicles',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1586817825-20ex400g-242wt1drf3cg-a-19104142414.png'
    },
    {
        id: 6,
        name: 'Home and Garden',
        image: 'https://ca-times.brightspotcdn.com/dims4/default/7735ef8/2147483647/strip/true/crop/3981x2654+0+166/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd5%2F66%2F9242dd0f4c6cb0cccd7cdeecb70c%2F2019-8-24-store-81.jpg'
    },
    {
        id: 7,
        name: 'Fashion & Accessory',
        image: 'https://cache.careers360.mobi/media/presets/860X430/article_images/2020/6/27/Know_all_about_accessory_designing.jpg'
    },
    {
        id: 8,
        name: 'Baby and Child',
        image: 'https://cdn.thewirecutter.com/wp-content/media/2020/11/giftsfor2yearolds-2048px-legoduplo.jpg?auto=webp&quality=75&width=1024'
    },
    {
        id: 9,
        name: 'Movies, Books and Music',
        image: 'https://thumbs.dreamstime.com/z/books-movies-music-games-entertainment-concept-collage-isolated-words-vintage-letterpress-wood-type-printing-blocks-30506569.jpg'
    },
    {
        id: 10,
        name: 'Other ',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNVfbSeSMcX2IqTZndstPFWzdKYLUnztivLk-NojhjgF58nlpCgpyHosdgs3LfV1VmIE&usqp=CAU'
    },


];

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const useStyles = makeStyles(() => ({
    app: {
        fontFamily: 'sans-serif',
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '30px'
    },

}));


const Categories = () => {
    const classes = useStyles();
    return (
        < div className={classes.app} >
            <Carousel breakPoints={breakPoints}>
                {categories.map((category) => (
                    <Item item key={category.id}>
                        <Category category={category} />
                    </Item>
                ))}
            </Carousel>
        </div >
    )

}

export default Categories;