import {Formik, Form, Field, FormikHelpers} from "formik";
import React, {useCallback} from "react";
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {loginUser} from "../store/user.store";
import {useRouter} from "next/router";
import {routes} from "../constants/routes";

export interface FormValues {
  email: string;
  password: string;
}

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(1),
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const formInitialStage: FormValues = {
    email: '',
    password: ''
  };

  const onSubmit = useCallback( async (values, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
    console.log(values);
    await dispatch(loginUser(values));
    router.push(routes.todos());

  }, [dispatch, router]);

  return (
    <Formik
      initialValues={formInitialStage}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
        {({ isSubmitting, isValid, dirty}) => (
          <Form className={classes.form}>
            <Field as={TextField} name="email" type="string" label="Email"/>
            <Field as={TextField} name="password" type="password" label="Password"/>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!isValid || isSubmitting || !dirty}
            >
              Submit
            </Button>
          </Form>
        )}
    </Formik>
  )
};

export default LoginPage;
