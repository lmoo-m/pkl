import "./App.css";
import { Box } from "@mui/material";
import FormInput from "./components/FormInput";
import { useEffect, useState } from "react";
import ListCard from "./components/ListCard";
import AddIcon from "@mui/icons-material/Add";

function App() {
    const [showInput, setShowInput] = useState(-250);
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
            <FormInput
                setShowInput={setShowInput}
                setJurnals={setJurnals}
                showInput={showInput}
            />
            <Box
                sx={{
                    marginTop: "30px",
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "90%",
                    }}
                >
                    <input
                        className="search"
                        placeholder="cari..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className="btn-icon"
                        onClick={() => setShowInput(20)}
                    >
                        <AddIcon sx={{ color: "white" }} />
                    </button>
                </Box>
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
