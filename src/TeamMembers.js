import {Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import cronk from './images/cronk.jpg';
import teichman from './images/teichman.jpg';
import mcguire from './images/mcguire.jpg';
import falardeau from './images/falardeau.jpg';
import gauvin from './images/gauvin.png';
import logoNoBg from './images/logoNoBg.png';

function TeamMembers() {
    return (
        <Container>
            <h1>Meet the Team</h1>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
                    <Logo src={logoNoBg}/>
                </Grid>
                <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                    <ImageCard 
                        name="Ella Cronk"
                        image={cronk}
                        role="Current Roles: Project Manager"
                        area="Area: Frontend"/>
                </Grid>
                <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                    <ImageCard 
                        name="Seth Teichman"
                        image={teichman}
                        role="Current Roles: Communications Lead"
                        area="Area: Frontend"/>
                </Grid>
                <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                    <ImageCard 
                        name="Tyler McGuire"
                        image={mcguire}
                        role="Current Roles: Website Lead"
                        area="Area: Backend"/>
                </Grid>
                <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                    <ImageCard 
                        name="Dante Falardeau"
                        image={falardeau}
                        role="Current Roles: Systems Architect"
                        area="Area: Backend"/>
                </Grid>
                <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                    <ImageCard 
                        name="Eddie Gauvin"
                        image={gauvin}
                        role="Current Roles: CIT Lead"
                        area="Area: Test"/>
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
                width: 345,
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
                    {props.role}
                </Typography>
                <Typography variant="body2">
                    {props.area}
                </Typography>
            </CardContent>
        </Card>
    );
}

function Logo(props)
{
    return(
        <div>
            <img src={props.src} alt="Steamed Software Logo" className="centerLogo"></img>
        </div>
    );
}