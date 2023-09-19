import {Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import cronk from './images/cronk.jpg';
import teichman from './images/teichman.jpg';
import mcguire from './images/mcguire.jpg';
import falardeau from './images/falardeau.jpg';
import defaultImage from './images/defaultProfile.jpg';

function TeamMembers() {
    return (
        <Container>
            <h1>Meet the Team</h1>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                    <ImageCard 
                        name="Ella Cronk"
                        image={cronk}
                        description="Current Roles: Project Manager"/>
                </Grid>
                <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                    <ImageCard 
                        name="Seth Teichman"
                        image={teichman}
                        description="Current Roles: Communications Lead"/>
                </Grid>
                <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                    <ImageCard 
                        name="Tyler McGuire"
                        image={mcguire}
                        description="Current Roles: Website Lead"/>
                </Grid>
                <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                    <ImageCard 
                        name="Dante Falardeau"
                        image={falardeau}
                        description="Current Roles: Systems Architect"/>
                </Grid>
                <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                    <ImageCard 
                        name="Eddie Gauvin"
                        image={defaultImage}
                        description="Current Roles: CIT Lead"/>
                </Grid>
            </Grid>
        </Container>
    );
}
export default TeamMembers

function ImageCard(props)
{
    return(
        <Card
            sx={{
                maxWidth: 345,
                backgroundColor: '#1E1E1E',
                color: 'white',
                margin: '20px'
            }}>
            <CardMedia
                component="img"
                alt={props.name}
                height="440"
                image={props.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    );
}