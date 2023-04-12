import React from "react";
import {
    Button,
    Card,
    CardContent,
    CardActions,
    Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import Swal from "sweetalert2";
import { getJurnalById } from "../services/jurnalServices";

const ListCard = ({ jurnals, setJurnals, search, setShowEdit, setJurnal }) => {
    const showJurnal = (id) => {
        setJurnal(getJurnalById(id));
        setShowEdit(20);
    };

    const deleteJurnal = (id) => {
        const data = jurnals.filter((e) => e.id === id);
        Swal.fire({
            title: "Hapus? yakin deck?",
            text: `Kegiatan: ${data[0].kegiatan}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yoi",
            cancelButtonText: "ngga jadi",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Terhapus", "", "success");
                setJurnals((item) => {
                    return item.filter((e) => e.id !== id);
                });
            }
        });
    };
    return (
        <>
            {jurnals.length > 0 ? (
                jurnals
                    .filter((jurnal) => {
                        if (search === "") {
                            return jurnal;
                        } else if (
                            jurnal.kegiatan
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            jurnal.tanggal
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        ) {
                            return jurnal;
                        } else {
                            return;
                        }
                    })
                    .map((data, i) => {
                        return (
                            <Card
                                sx={{
                                    minWidth: 275,
                                    maxWidth: 275,
                                    padding: "10px 15px",
                                    overflowWrap: "break-word",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
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
                                    sx={{
                                        display: "flex",
                                        justifyContent: "end",
                                    }}
                                >
                                    <Button
                                        startIcon={<Edit />}
                                        size="small"
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => showJurnal(data.id)}
                                    >
                                        edit
                                    </Button>
                                    <Button
                                        startIcon={<Delete />}
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
                    })
            ) : (
                <Card
                    sx={{
                        minWidth: 275,
                        maxWidth: 275,
                        padding: "10px 15px",
                        overflowWrap: "break-word",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            pesan
                        </Typography>
                        <Typography variant="h5" component="div">
                            Jurnal belum ada
                        </Typography>
                        <Typography color="text.secondary">
                            untuk mencatat jurnal, klik icon plus(+)
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                        }}
                    ></CardActions>
                </Card>
            )}
        </>
    );
};

export default ListCard;
