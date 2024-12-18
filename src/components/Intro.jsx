import { Typography, Container, Box } from "@mui/material";

const Intro = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Box className="pt-20 text-center flex-shrink-0">
      <Container sx={{ padding: 0 }}>
        <Typography variant="h6" className="text-gray-700 mb-4 tracking-wide">
          {currentDate}
        </Typography>
      </Container>
      <Container sx={{ padding: 0 }}>
        <Typography
          variant="h1"
          className="text-gray-900 font-extrabold leading-tight text-center"
          sx={{
            fontSize: {
              xs: "10vw", // Extra small devices
              sm: "8vw", // Small devices
              md: "6vw", // Medium devices
              lg: "5vw", // Large devices
            },
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          FEEL DELICIOUSNESS
        </Typography>
      </Container>
    </Box>
  );
};

export default Intro;
