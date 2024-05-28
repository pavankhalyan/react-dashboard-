import { Box, Typography,useTheme } from '@mui/material'
import Header from '../../components/Header'
import { DataGrid } from '@mui/x-data-grid'
import { mockDataTeam} from '../../data/mockdata'
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { tokens } from '../../theme';


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "RANK" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "age",
          headerName: "Calmer Ratio",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "phone",
          headerName: "overall profit",
          flex: 1,
        },
        {
            field: "averageDailyProfit",
            headerName:"Average Daily Profit",
            flex:1,
        },
        {
          field: "email",
          headerName: "Win %(day)",
          flex: 1,
        },
        {
            field:"prices",
            headerName:"prices",
            flex:1,
        },
        {
          field: "accessLevel",
          headerName: "Action",
          flex: 1,
          renderCell: ({ row: { access } }) => {
            return (
              <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                  access === "admin"
                    ? colors.greenAccent[600]
                    : access === "manager"
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
              >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "manager" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  {access}
                </Typography>
              </Box>
            );
          },
        },
      ];

  return (
    <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
        < Header title = "DASHBOARD" subtitle = "welcome to your dashboard" />
    </Box>
    <Box> 
    <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        < DataGrid rows = { mockDataTeam } columns = { columns } />
    </Box>
    </Box>    
    </Box>   
  )
}

export default Dashboard