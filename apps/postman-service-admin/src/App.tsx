import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NotificationConfigList } from "./notificationConfig/NotificationConfigList";
import { NotificationConfigCreate } from "./notificationConfig/NotificationConfigCreate";
import { NotificationConfigEdit } from "./notificationConfig/NotificationConfigEdit";
import { NotificationConfigShow } from "./notificationConfig/NotificationConfigShow";
import { NotificationRequestList } from "./notificationRequest/NotificationRequestList";
import { NotificationRequestCreate } from "./notificationRequest/NotificationRequestCreate";
import { NotificationRequestEdit } from "./notificationRequest/NotificationRequestEdit";
import { NotificationRequestShow } from "./notificationRequest/NotificationRequestShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Postman Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="NotificationConfig"
          list={NotificationConfigList}
          edit={NotificationConfigEdit}
          create={NotificationConfigCreate}
          show={NotificationConfigShow}
        />
        <Resource
          name="NotificationRequest"
          list={NotificationRequestList}
          edit={NotificationRequestEdit}
          create={NotificationRequestCreate}
          show={NotificationRequestShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
