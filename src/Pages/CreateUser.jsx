import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { tokens } from "../themeSettings";

const CreateUser = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const theme = useSelector((state) => state.colorMode.mode);
  const colors = tokens(theme);

  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    address1: "",
    address2: "",
  };

  const phoneRegExp = /^[0-9-]+$/;
  //   const textoValido = "123-46-546";
  //   console.log(phoneRegExp.test(textoValido));

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("Campo requerido"),
    lastName: yup.string().required("Campo requerido"),
    email: yup.string().email("email inválido").required("Campo requerido"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Número de contacto no válido.")
      .required("Campo requerido"),
    gender: yup.string().required("Campo requerido"),
    address1: yup.string().required("Campo requerido"),
  });

  return (
    <Box m="">
      <Header
        title="Crear Usuario"
        subtitle="Crear un nuevo perfil de usuario"
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          //   handleReset,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                "& .Mui-focused": {
                  color: `${colors.grey[200]} !important`,
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nombre"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Apellido"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contacto telefónico"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Género"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gender}
                name="gender"
                error={!!touched.gender && !!errors.gender}
                helperText={touched.gender && errors.gender}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Crear nuevo usuario
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateUser;
