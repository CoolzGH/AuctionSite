import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Head from "./Head";
import Avatar from "./Avatar";
import Lots from "../components/MyCards";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 220,
      width: "100%",
      height: "100%",
    },
    head: {
      width: "100%",
    },
    avatar: {
      paddingTop: "50px",
      paddingBottom: "10px",
    },
    lots: {
      paddingTop: "5px",
      paddingLeft: "5px",
    },
    button: {
      paddingRight: "25px",
      paddingBottom: "10px",
    },
    textArea: {
      minHeight: "260px",
      maxHeight: "260px",
      paddingTop: "50px",
    },
    someText: {
      paddingBottom: "10px",
    },
    follow: {
      maxWidth: "280px",
    },
  })
);

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.head}>
          <Head />
        </div>
        <div>
          <Paper>
            <Typography>Личный кабинет</Typography>
          </Paper>
        </div>

        <Container fixed>
          <Grid container>
            <Grid item md={3}>
              <div className={classes.avatar}>
                <Avatar />
              </div>
              <div className={classes.button}>
                <Button variant="contained">Редактировать профиль</Button>
              </div>
              <div className={classes.button}>
                <Button variant="contained">Создать лот</Button>
              </div>
              <div className={classes.follow}>
                <Paper>
                  <div className={classes.someText}>
                    <Typography variant="h6">Отслеживаемое</Typography>
                  </div>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia atque quam hic officiis reprehenderit ducimus sapiente
                    quasi architecto vitae odit reiciendis, doloribus
                    repellendus quos doloremque exercitationem dignissimos, nam,
                    repellat beatae dignissimos quod quidem cumque, hic accusantium.
                  </Typography>
                </Paper>
              </div>
            </Grid>

            <Grid item md={9}>
              <div className={classes.textArea}>
                <Paper>
                  <div className={classes.someText}>
                    <Typography variant="h6">
                      Общая информация о пользователе
                    </Typography>
                  </div>
                  <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus quasi in facilis rerum explicabo labore quae
                    doloremque fugit, nesciunt autem! Molestiae temporibus
                    accusantium tempora fuga suscipit, eius exercitationem
                    tempore quis corporis dolore numquam repellat ab magnam,
                    eaque alias velit cumque quos veniam dicta ut. Omnis
                    repellat beatae dignissimos quod quidem cumque, hic
                    accusantium tempora fuga suscipit, eius exercitationem
                    repellat beatae dignissimos quod quidem cumque, hic
                    accusantium tempora fuga suscipit, eius exercitationem
                    perspiciatis! Eaque!
                  </Typography>
                </Paper>
              </div>
              <Paper>
                <div className={classes.lots}>
                  <div className={classes.someText}>
                    <Typography variant="h6">
                      Активные лоты пользователя
                    </Typography>
                  </div>
                  <Lots />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
