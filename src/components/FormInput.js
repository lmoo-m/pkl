import React, { useState } from "react";
import { TextField, CardActions, Button, Card } from "@mui/material";
import { generateDate } from "./dateFunction";

const FormInput = ({ setShowInput }) => {
    const [kegiatan, setKegiatan] = useState("");
    const [waktu, setWaktu] = useState("");
    const data = localStorage.getItem("jurnal") || [];
    const jurnal = JSON.parse(data);

    const tambah = () => {
        const data = {
            kegiatan: kegiatan,
            waktu: waktu,
            tanggal: generateDate(),
        };

        jurnal.push(data);
        localStorage.setItem("jurnal", JSON.stringify(jurnal));
        setShowInput(false);
    };

    return (
        <Card
            sx={{
                position: "absolute",
                top: 20,
                zIndex: 99,
                minWidth: 275,
                display: "flex",
                flexDirection: "column",
                padding: "10px 20px",
            }}
        >
            <TextField
                variant="standard"
                label="Kegiatan"
                onChange={(e) => setKegiatan(e.target.value)}
                sx={{ margin: "10px 0" }}
            />
            <TextField
                variant="standard"
                label="Waktu"
                fullWidth={false}
                onChange={(e) => setWaktu(e.target.value)}
                sx={{ margin: "10px 0" }}
                placeholder="00:00 - 00:00"
            />
            <CardActions>
                <Button
                    size="small"
                    sx={{ margin: "10px 0" }}
                    variant="contained"
                    color="warning"
                    onClick={() => setShowInput(false)}
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
