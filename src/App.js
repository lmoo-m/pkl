import "./App.css";
import { Box, Button } from "@mui/material";
import FormInput from "./components/FormInput";
import { useState } from "react";
import ListCard from "./components/ListCard";

function App() {
    const [showInput, setShowInput] = useState(false);
    return (
        <Box
            component={"div"}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
            }}
        >
            {showInput ? <FormInput setShowInput={setShowInput} /> : ""}
            <Button
                variant="contained"
                sx={{ marginTop: "30px" }}
                onClick={() => setShowInput(true)}
            >
                Tambah
            </Button>
            <Box
                sx={{
                    mt: 3,
                    gap: 4,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                <ListCard />
            </Box>
        </Box>
    );
}

export default App;
