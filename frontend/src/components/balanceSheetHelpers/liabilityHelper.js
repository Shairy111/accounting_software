import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function LiabilityHelper({ title, contents }) {
  const commonTypographyStyle = { color: "gray", padding: "0.5em" };
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start">
        <Grid item>
          <Typography
            sx={{ ...commonTypographyStyle, fontWeight: "bold" }}
            variant="h5">
            {title}
          </Typography>
        </Grid>
        <Grid item container>
          {contents &&
            contents.map((content, i) => {
              return (
                <>
                  <Grid
                    key={i}
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start">
                    <Grid item>
                      <Typography
                        sx={{ ...commonTypographyStyle }}
                        variant="p1">
                        {content.accountName}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{ ...commonTypographyStyle }}
                        variant="p1">
                        {content.amount}
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              );
            })}
        </Grid>

        {/* total */}
      </Grid>
    </>
  );
}

export default LiabilityHelper;
