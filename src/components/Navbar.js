import { useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = ({ setSearch }) => {
    const [showSearch, setShowSearch] = useState("1.5rem");
    return (
        <Box
            sx={{
                background: "#00ABB3",
                position: "fixed",
                top: 0,
                zIndex: 95,
                padding: "10px 0",
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
                <Typography variant="h5">Jurnal PKL</Typography>
                <Box
                    sx={{
                        transition: ".3s ease-in-out ",
                        display: "flex",
                        justifyContent: "end",
                        width: showSearch,
                        alignItems: "center",
                        background: "#7743DB",
                        borderRadius: "25px",
                        overflow: "hidden",
                        padding: "0 5px",
                    }}
                >
                    <input
                        className="search"
                        placeholder="cari..."
                        id="search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <label
                        htmlFor="search"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            showSearch === "1.5rem"
                                ? setShowSearch("9rem")
                                : setShowSearch("1.5rem");
                        }}
                    >
                        <SearchIcon />
                    </label>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
