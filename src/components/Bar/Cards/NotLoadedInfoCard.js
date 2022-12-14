import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";

const NotLoadedInfoCard = () => {
  return (
    <Box>
      <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
      <Skeleton variant="text" sx={{ marginTop: '0em', fontSize: '5rem' }} />
    </Box>
  )
}

export default NotLoadedInfoCard;