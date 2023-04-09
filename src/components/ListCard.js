import React from "react";
import {
    Button,
    Card,
    CardContent,
    CardActions,
    Typography,
} from "@mui/material";

const ListCard = ({ jurnals, setJurnals }) => {
    const deleteJurnal = (id) => {
        setJurnals((item) => {
            return item.filter((e) => e.id !== id);
        });
    };

    return (
        <>
            {jurnals &&
                jurnals.map((data, i) => {
                    return (
                        <Card
                            sx={{ minWidth: 275, padding: "10px 15px" }}
                            key={i}
                        >
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
                                    onClick={() => deleteJurnal(data.id)}
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
