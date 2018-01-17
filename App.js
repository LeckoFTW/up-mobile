import React from 'react';
import apolloClient from "./src/config/apolloClient";
import StudentTutorials from "./src/modules/students/navigations/student-tutorials.navigation";
import { withFonts } from "./src/hoc/fontsHOC";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { rootReducer } from "./src/reducers";
import { ApolloProvider } from 'react-apollo';
import { initStyleSheet } from "./src/config/eStyleSheet";


const store = createStore(rootReducer);
initStyleSheet();

@withFonts()
export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <ApolloProvider client={ apolloClient }>
          <StudentTutorials/>
        </ApolloProvider>
      </Provider>
    );
  }
}
