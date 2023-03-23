import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "./doctorsData";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DoctorDetails = () => {
  const { id } = useParams();
  const selectedDoctor = doctors.find((d) => d.id === Number(id));
  const onNameClick = (doctorId) => {
    const selectedDoctor = doctors.find((doctor) => doctor.id === doctorId);
    if (selectedDoctor) {
      return (
        <Link to={`/doctors/${selectedDoctor.name}`}>
          {selectedDoctor.name}
        </Link>
      );
    }
    return null;
  };
  const similarDoctors = doctors
    .filter((d) => d.id !== selectedDoctor.id)
    .filter((d) => d.location === selectedDoctor.location);

  //console.log("similarDoctors", similarDoctors);
  //console.log("doctors", doctors);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      flex: 1,
      renderCell: (params) => (
        <strong>
          <Link
            to={`/doctors/${params.row.id}`}
            onClick={() => onNameClick(params.row.id)}
          >
            {params.value}
          </Link>
        </strong>
      ),
    },
    {
      field: "specialty",
      headerName: "Specialty",
      width: 150,
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
      flex: 1,
    },
    {
      field: "reviewScore",
      headerName: "Review Score",
      width: 150,
      flex: 1,
    },
  ];

  return (
    <>
      <Button size="small" onClick={handleBack}>
        <ArrowBackIcon></ArrowBackIcon>
        Back
      </Button>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "50%" }}>
            <img
              src={selectedDoctor.img}
              style={{ maxWidth: "100%", height: "auto" }}
            ></img>
          </Box>
          <Box sx={{ width: "50%" }}>
            {" "}
            <Box>
              <Card sx={{ minWidth: 275 }} color={"FAF9F6"}>
                <CardContent>
                  <Typography variant="h4" component="div" display="flex">
                    {selectedDoctor.name}
                  </Typography>
                  <Typography variant="h5" component="div" display="flex">
                    Specialty:
                    <Typography variant="h6" component="div">
                      {selectedDoctor.specialty}
                    </Typography>
                  </Typography>
                  <Typography variant="h5" component="div" display="flex">
                    Location:
                    <Typography variant="h6" component="div">
                      {selectedDoctor.location}
                    </Typography>
                  </Typography>
                  <Typography variant="h5" component="div" display="flex">
                    Review Score:
                    <Typography variant="h6" component="div">
                      {selectedDoctor.reviewScore}
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Container>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, alignContent: "center" }}
      >
        Other Doctors based on location{" "}
      </Typography>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          autoHeight
          rows={similarDoctors}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick={true}
        />
      </Box>
    </>
  );
};

export default DoctorDetails;
