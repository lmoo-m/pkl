import { useState } from "react";
import { TextField, CardActions, Button, Card, Alert } from "@mui/material";
import Swal from "sweetalert2";

const FormEdit = ({ setShowEdit, setJurnal, showEdit, jurnal, jurnals }) => {
    const [textAlert, setTextAlert] = useState("");

    const edit = () => {
        if (jurnal.kegiatan === "" || jurnal.waktu === "")
            return setTextAlert("isi dulu bang!");

        Swal.fire({
            title: "Edit? yakin deck?",
            text: `Kegiatan: ${jurnal.kegiatan} || Waktu: ${jurnal.waktu}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yoi",
            cancelButtonText: "ngga jadi",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Update", "", "success");
                const data = jurnals.filter((e) => e.id == jurnal.id);
                data[0].kegiatan = jurnal.kegiatan;
                data[0].waktu = jurnal.waktu;
                localStorage.setItem("jurnal", JSON.stringify(jurnals));
                setShowEdit(-250);
            }
        });
    };

    const cancel = () => {
        setTextAlert("");
        setJurnal([]);
        setShowEdit(-250);
    };

    return (
        <Card
            sx={{
                position: "absolute",
                top: showEdit,
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
                onChange={(e) =>
                    setJurnal((prev) => {
                        return {
                            ...prev,
                            kegiatan: e.target.value,
                        };
                    })
                }
                value={jurnal.kegiatan || ""}
                sx={{ margin: "10px 0" }}
            />
            <TextField
                variant="standard"
                label="Waktu"
                fullWidth={false}
                onChange={(e) =>
                    setJurnal((prev) => {
                        return {
                            ...prev,
                            waktu: e.target.value,
                        };
                    })
                }
                value={jurnal.waktu || ""}
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
                    onClick={() => edit()}
                >
                    edit
                </Button>
            </CardActions>
        </Card>
    );
};

export default FormEdit;
