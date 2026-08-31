import { useState } from "react";

import {
  Box,
  Button,
  Stack,
  Typography,
  Card,
  CardContent,
  
} from "@mui/material";
import toast from "react-hot-toast";
import { SpinnerLoading } from "./SpinnerLoading";
import api from "./axios";

export default function MenuCount() {
  const [isLoading, setIsLoading] = useState(false);

  const [view, setView] = useState("0");
  const [click, setClick] = useState("0");

  const [totalView, setTotalView] = useState("0");
  const [totalClick, setTotalClick] = useState("0");

  const [siteVisit, setSiteVisit] = useState("0");
  const [siteClick, setSiteClick] = useState("0");

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      const response = await api.post("/count", {
        profileId: data,
      });

      const { success, message } = response.data;

      if (!success) {
        toast.error(message || "Please try again.");
        return;
      }

      setView(response.data.views);
      setClick(response.data.textMeClicks);
      setTotalView(response.data.totalViews);
      setTotalClick(response.data.totalClicks);
      setSiteVisit(response.data.siteVisits);
      setSiteClick(response.data.siteClicks);

    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction="row" spacing={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Views</Typography>
            <Typography>{view}</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Clicks</Typography>
            <Typography>{click}</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Total Views</Typography>
            <Typography>{totalView}</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Total Clicks</Typography>
            <Typography>{totalClick}</Typography>
          </CardContent>
        </Card>
      </Stack>

      <Stack direction="row" spacing={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">S-Visits</Typography>
            <Typography>{siteVisit}</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">S-Clicks</Typography>
            <Typography>{siteClick}</Typography>
          </CardContent>
        </Card>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button
          onClick={() => onSubmit("emily")}
          variant="contained"
          color="primary"
        >
          Emily
        </Button>

        <Button
          onClick={() => onSubmit("roxie")}
          variant="contained"
          color="primary"
        >
          Roxie
        </Button>

        <Button
          onClick={() => onSubmit("lucy")}
          variant="contained"
          color="primary"
        >
          Lucy
        </Button>

        <Button
          onClick={() => onSubmit("leah")}
          variant="contained"
          color="primary"
        >
          Leah
        </Button>

        <Button
          onClick={() => onSubmit("amelia")}
          variant="contained"
          color="primary"
        >
          Amelia
        </Button>

        <Button
          onClick={() => onSubmit("hannah")}
          variant="contained"
          color="primary"
        >
          Hannah
        </Button>
      </Stack>
      {isLoading && <SpinnerLoading />}
    </Box>
  );
}
