import React, { useState } from "react";
import { TextField, CardActions, Button, Card, Alert } from "@mui/material";
import { generateDate } from "./dateFunction";
import { nanoid } from "nanoid";

const FormInput = ({ setShowInput, setJurnals, showInput }) => {
    const [kegiatan, setKegiatan] = useState("");
    const [waktu, setWaktu] = useState("");
    const [textAlert, setTextAlert] = useState("");

    const tambah = () => {
        if (kegiatan === "" || waktu === "")
            return setTextAlert("isi dulu bang!");
        const data = {
            id: nanoid(),
            kegiatan: kegiatan,
            waktu: waktu,
            tanggal: generateDate(),
        };

        setJurnals((prev) => {
            return [...prev, data];
        });
        setShowInput(-250);
        setKegiatan("");
        setWaktu("");
    };

    const cancel = () => {
        setTextAlert("");
        setShowInput(-250);
        setKegiatan("");
        setWaktu("");
    };

    return (
        <Card
            sx={{
                position: "absolute",
                top: showInput,
                zIndex: 99,
                minWidth: 275,
                transition: ".3s ease-in-out ",
                display: "flex",
                flexDirection: "column",
                padding: "10px 20px",
            }}
        >
            {textAlert ? <Alert severity="error">{textAlert}</Alert> : ""}
            <TextField
                variant="standard"
                label="Kegiatan"
                onChange={(e) => setKegiatan(e.target.value)}
                value={kegiatan || ""}
                sx={{ margin: "10px 0" }}
            />
            <TextField
                variant="standard"
                label="Waktu"
                fullWidth={false}
                onChange={(e) => setWaktu(e.target.value)}
                value={waktu || ""}
                sx={{ margin: "10px 0" }}
                placeholder="00:00 - 00:00"
            />
            <CardActions>
                <Button
                    size="small"
                    sx={{ margin: "10px 0" }}
                    variant="contained"
                    color="warning"
                    onClick={() => cancel()}
                >
                    batal
                </Button>

                <Button
                    size="small"
                    sx={{ margin: "10px 0" }}
                    variant="contained"
                    onClick={() => tambah()}
                >
                    submit
                </Button>
            </CardActions>
        </Card>
    );
};

export default FormInput;
