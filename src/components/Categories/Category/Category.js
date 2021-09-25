import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        /*    maxWidth: '100%', */
        width: '200px',
        borderRadius: '15px'

    },
    media: {
        /* display: 'flex', */
        /*    objectFit: 'cover', */
        /*    paddingTop: '100%', */
        width: '200px',
        height: '142px',



    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '70px',
        height: '65px'

    },

}));


const Category = ({ category }) => {
    const classes = useStyles();
    return (

        <Card id={"CategoryCard"} className={classes.root}>
            <CardMedia className={classes.media} image={category.image} title={category.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom>
                        {category.name}
                    </Typography>
                </div>
            </CardContent>
        </Card>

    )
}

export default Category
