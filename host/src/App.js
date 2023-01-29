// host/src/App.js
import React from "react";
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));
const RemoteSearch = React.lazy(() => import("Remote/SearchContainer"));
import {ErrorBoundary} from 'react-error-boundary'
import ErrorHandler from './ErrorHandler'

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      padding: "5px"
    }}
  >
    <ErrorBoundary FallbackComponent={ErrorHandler}>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
    <h1>This is the Host!</h1>
    <h2>Remote App:</h2>
    <RemoteWrapper>
      <RemoteApp />
    </RemoteWrapper>
    <h2>Remote Button:</h2>
    <RemoteWrapper>
      <RemoteButton />
    </RemoteWrapper>
    <br />
    <h2>Remote Search:</h2>
    <RemoteWrapper>
      <RemoteSearch />
    </RemoteWrapper>
    <br />
    <a href="http://localhost:4000">Link to Remote App</a>
  </div>
);
export default App;