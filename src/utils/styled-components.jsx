import { Tab, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledTab = styled(Tab) (
  {
    margin: "2%",
    color: "white",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: 24,
    "& .Mui-selected": {
      color: "white"
    }
  }
);

export const TitleBox = styled(Box) (
  {
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: 44, // when this value is greater than 44, the position of indicator of tab in desktop will detach from the selected tab
    textOverflow: "ellipsis",
    overflow: "hidden"
  }
);

export const TooltipTag = styled(Typography) (
  {
    m: 0,
    p: 0,
    fontSize: "inherit",
    textAlign: "center"
  }
);
