import {Container} from "@mui/material";

function HomePage() {
    return (
        <Container>
            <h1>Collaborative Color Processing Application</h1>

            <h2>Project Synopsis</h2>

            <p>
            This project is a tool to be used by digital imaging technicians and cinematographers to allow them to update older LogC3 lookup tables (LUTs) to LogC4 on the spot, visualizing the differences and allowing changes. The program will take in a lookup table using LogC3 along with 1-8 images and run a standard conversion to LogC4, which the user will be able to tweak. This will give creatives the ability to expand the dynamic range and adapt to a new color gamut while preserving the original aesthetic of the lookup tables. The original LogC3 LUT and the produced LogC4 LUT will be displayed by applying them to the input images side-by-side. After review, the user can export the final LogC4 LUT.
            </p>
        </Container>
    );
}
export default HomePage