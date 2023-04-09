import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    CardContent,
    CardActions,
    Typography,
} from "@mui/material";

export const getJurnal = (jurnal) => {
    const data = localStorage.getItem("jurnal");
    jurnal(JSON.parse(data));
};

const ListCard = () => {
    const [jurnal, setJurnal] = useState([]);

    useEffect(() => {
        getJurnal(setJurnal);
    }, []);

    const deleteJurnal = (id) => {
        jurnal.splice(id, 1);
        console.log(jurnal);
        localStorage.setItem("jurnal", JSON.stringify(jurnal));
        getJurnal(setJurnal);
    };

    return (
        <>
            {jurnal.map((data, i) => {
                return (
                    <Card sx={{ minWidth: 275, padding: "10px 15px" }} key={i}>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                {data.tanggal}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {data.kegiatan}
                            </Typography>
                            <Typography color="text.secondary">
                                {data.waktu}
                            </Typography>
                        </CardContent>
                        <CardActions
                            sx={{ display: "flex", justifyContent: "end" }}
                        >
                            <Button
                                size="small"
                                variant="contained"
                                color="error"
                                onClick={() => deleteJurnal(i)}
                            >
                                hapus
                            </Button>
                        </CardActions>
                    </Card>
                );
            })}
        </>
    );
};

export default ListCard;
