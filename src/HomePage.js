import {Container} from "@mui/material";

function HomePage() {
    return (
        <Container>
            <h1>Collaborative Color Processing Application</h1>

            <h2>Project Synopsis</h2>

            <p>
                We are developing a tool to be used by digital imaging technicians and cinematographers to allow them to update older LogC3 lookup tables to LogC4 on the spot, visualizing the differences and allowing changes. The program will take in a lookup table using LogC3 along with 1-8 images, the program will run a standard conversion to LogC4, which the user will be able to tweak. The original LogC3 LUT and the produced LogC4 LUT will be displayed by applying them to the input images side-by-side. After review, the user can export the final LogC4 LUT.
            </p>
        </Container>
    );
}
export default HomePage