import React from "react";
import { Button, Form, Grid, Image, Header, Segment, Statistic } from "semantic-ui-react";
const LoginForm = () => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div, body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 400 }}>
        <Form size="large">
          <Segment
            padded="very"
            style={{
              boxShadow:
                " 0 2px 4px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
            }}
          >
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAYFBMVEX///8dofIAm/EAnfIAl/ESn/L7/f9WsPS43Pp+wvZsu/Xv9/7X6/wypvP0+v4AmfGq1vmIxvd3vvbO6PxmuPXf8P2j0vmWzPhbs/Q4qfPC4fvH5PtErPPn8/2Jyfey2fqPneLYAAAEd0lEQVRoge1a6dKiMBAkCQOEQxRBwWN5/7dcQF2BTC5EU7VF/9vaLzaTTDI9h+dt2LBhw4b/F8GAnzImx/2hKOuwQ10Wh/0x+QF/dYobmlPGoAcBYKz7Zxafqm+yHnmWUyAIgOYZP36H9X4mPqCsT27wyfm+Om0VU9zWqd00XnfLq1hl69TuFamTAzAz2h4MDsk6vFFmQTtQZ9EKtLuY2tH2oPHuU96UWJr7NJqkn/G2vqFTzQF++wkv95fR9vD5ct5ywfG+QcuFtEG96HjfYPWy4PEpb8+8hLf8mLdjXrDb/KPzfYFae1j7gT+PYXur0pV4O2arl2RHFr4bIoDYvJ7xCo71AovNeaNVHOsFahyrkmxNXkIy0/h8sNxo6LWmQqKwgxlvZedYQEnIOS+zEfXsF8BMDYmepdKWNLw83fb4kgyMxtPDMvOvVKTJpMxAL+OlDesVdlyl+QKT4zkL1EEjOXWWzS5pmZf7LiSF8702MPkuXKXuOiS4zSD66xAI9+Jv6JX+WTQu6W8YZjPgScsVGG1mxGctsehJYW9FchOZGR56LizjaTj7RKLjPQrRAR4xNYiZcPioy1T7dOed5pud6zI6LhgMr2B+muUTINcX4psLusAsetE/Yq+qJ78nP7eLeCyQqXmrXFhCbu8rE5HR/9Or5EdaLMbk6qssnE1PMF4SNfnrrCke4gOOfHz31yclsfB6iEtSTvIhJEhs2OHhQv2GBGhAbGbPU5Ceu5BAfTzOytRLoxLZCaoAGOJFyT2N8K1OUNpu41RR+YgdTxdubcoqd0lEUd5k8ZHtr1PBmIVURKLbw+K9YhGmPaDw7i03L2xcZZFMpUMKjNgyAdrLiAvFohLZJiB2tRSZNAZFHhXU2PlMRIYeMqEEiqQ1mCuHBXt9l0rU0JbYzuRWRgz2xCSzKFGip7XQ4u5jjROvHRohtBbLPpcZ24yFtyexqiKCXafHKv+PWSFFnnaprhP6gAyLmhthfwz2O5LudP8CyiFN125G5nreTcqrfjKxIDFAKnOmQEXP6ydUQQINi8M+NSa8ysRaGRZxITB8r0mOy1WJtVIIBI10Xa4Waz0iZUKvlD6o2Hsxc82FuqtodQmj/P53e5Wp3KPbLWUlQSNvMUH//mialydpCQfJ6sbQCHokhZlQ+zeZi4RqXl0KgyRtY4sbmb07XY1Zm7SJaepzIVAIW5l7VZp9JsTXKmRBudAeJKtPqdSrL9pWjT4x985Tv4bb5RJdrqni9idc33U0KEXMiy9Meq5PnEw6UwbFF+ENAeX9bYneXLNyE1ZRpAxvSh+5QW93IDZKRDBFDpQUUTpSAru0jYlQjpHAsGSNF1EBOppbXfAOcd0QRk1pjYuoch3yGEboAFatA9OysbtCubPWgLtmiLv2j7OGl7sWn7umprs2rrvGtbtWvbPhBM/dOIa7ARR3Izfuhow8Z2NVnrtBMs/Z6NyD2smwYA/9eGT+jfHIAW4GQh+YjsDCcwS2+fII7ANuhn5H/D8fc96wYcOGDT/GX89EOg0hUAHoAAAAAElFTkSuQmCC"
              centered
              style={{ marginBottom: "50px" }}
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Button color="blue" fluid size="large">
              Login
            </Button>
            <Header as="h5">
              New to us? <a href="#top">Sign Up</a>
            </Header>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginForm;
