import "./App.css";
import { Box } from "@mui/material";
import FormInput from "./components/FormInput";
import { useEffect, useState } from "react";
import ListCard from "./components/ListCard";
import AddIcon from "@mui/icons-material/Add";
import FormEdit from "./components/FormEdit";

export let JurnalsPublic = [];

function App() {
    const [showInput, setShowInput] = useState(-250);
    const [showEdit, setShowEdit] = useState(-250);
    const [search, setSearch] = useState("");
    const [jurnal, setJurnal] = useState([]);
    const [jurnals, setJurnals] = useState(() => {
        const localValue = localStorage.getItem("jurnal");
        if (localValue === null) return [];
        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("jurnal", JSON.stringify(jurnals));
        JurnalsPublic = jurnals;
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
                jurnals={jurnals}
                setShowInput={setShowInput}
                setJurnals={setJurnals}
                showInput={showInput}
            />
            <FormEdit
                jurnal={jurnal}
                setJurnal={setJurnal}
                setShowEdit={setShowEdit}
                showEdit={showEdit}
                jurnals={jurnals}
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
                        onClick={() => {
                            setShowInput(20);
                        }}
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
                    setShowEdit={setShowEdit}
                    setJurnals={setJurnals}
                    setJurnal={setJurnal}
                    search={search}
                />
            </Box>
        </Box>
    );
}

export default App;
