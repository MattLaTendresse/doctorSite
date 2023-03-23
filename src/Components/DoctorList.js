import React from "react";
import { Link } from "react-router-dom";
import { doctors } from "./doctorsData";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const DoctorList = () => {
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

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name, click for more info",
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
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, alignContent: "center" }}
      >
        Similar Doctors
      </Typography>
      <Container maxWidth="xl">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={doctors}
            columns={columns}
            autoPageSize
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10]}
            disableRowSelectionOnClick={true}
          />
        </Box>
      </Container>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, alignContent: "center" }}
      >
        By Matt LaTendresse
      </Typography>
    </>
  );
};
export default DoctorList;
