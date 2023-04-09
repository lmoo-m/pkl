import "./App.css";
import { Box, Button } from "@mui/material";
import FormInput from "./components/FormInput";
import { useEffect, useState } from "react";
import ListCard from "./components/ListCard";

function App() {
    const [showInput, setShowInput] = useState(false);
    const [jurnals, setJurnals] = useState(() => {
        const localValue = localStorage.getItem("jurnal");
        if (localValue === null) return [];
        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("jurnal", JSON.stringify(jurnals));
    }, [jurnals]);

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
            {showInput ? (
                <FormInput
                    setShowInput={setShowInput}
                    setJurnals={setJurnals}
                />
            ) : (
                ""
            )}
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
                <ListCard jurnals={jurnals} setJurnals={setJurnals} />
            </Box>
        </Box>
    );
}

export default App;
