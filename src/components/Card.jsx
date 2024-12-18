import { Typography, Container, Box } from "@mui/material";
import HoverCard from "../HoverCard";

const Card = () => {
  return (
    <Box className="flex-grow p-8" sx={{ backgroundColor: "inherit" }}>
      <Container
        maxWidth={false}
        sx={{
          padding: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {/* 4 Hover Cards */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <HoverCard key={index} />
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default Card;
