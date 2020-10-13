import React, { useState, Fragment } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { actions } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import look from '../../js/look';
import * as validationSchemas from '../../validationSchemas';
import fetcher, { serviceTypes } from '../../services';
import { Formik } from 'formik';

function LoginScreen() {
  const dispatch = useDispatch();
  const authState = useSelector((store) => store.authState);

  function onSubmit(values) {
    if (values.password === "1234") {
      dispatch(actions.login(values.email));
    }
  }

  function getList() {
    fetcher(serviceTypes.sampleData)
      .then(response => console.log("Response is " + JSON.stringify(response)))
      .catch(error => console.log("Error is " + JSON.stringify(error)))
  }

  return (
    <View style={look.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchemas.loginForm}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <Fragment>
            <Text>Login</Text>
            <View style={look.formContainer}>
              <Text>Email</Text>
              <TextInput style={look.textInput} value={values.email} onChangeText={handleChange('email')} onBlur={() => setFieldTouched('email')} />
              {touched.email && errors.email && <Text style={look.textInputError}>{errors.email}</Text>}
              <Text>Password</Text>
              <TextInput style={look.textInput} value={values.password} onChangeText={handleChange('password')} onBlur={() => setFieldTouched('password')} secureTextEntry={true} />
              {touched.password && errors.password && <Text style={look.textInputError}>{errors.password}</Text>}
            </View>
            <TouchableOpacity onPress={handleSubmit} style={look.button}>
              <Text style={look.buttonText}>Submit</Text>
            </TouchableOpacity>
          </Fragment>
        )}
      </Formik>
      <TouchableOpacity onPress={getList} style={[look.button, { backgroundColor: "red", marginTop: 20 }]}>
        <Text style={look.buttonText}>Fetch</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;