import "./App.css";
import { Box, Button } from "@mui/material";
import FormInput from "./components/FormInput";
import { useEffect, useState } from "react";
import ListCard from "./components/ListCard";

function App() {
    const [showInput, setShowInput] = useState(false);
    const [search, setSearch] = useState("");
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
            <Box
                sx={{
                    marginTop: "30px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "50%",
                }}
            >
                <input
                    className="search"
                    placeholder="cari..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="contained" onClick={() => setShowInput(true)}>
                    Tambah
                </Button>
            </Box>
            <Box
                sx={{
                    mt: 3,
                    gap: 4,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                <ListCard
                    jurnals={jurnals}
                    setJurnals={setJurnals}
                    search={search}
                />
            </Box>
        </Box>
    );
}

export default App;
