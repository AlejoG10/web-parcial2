import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import * as Pages from "./pages";
import localeEs from "./locales/es.json";
import localeEn from "./locales/en.json";

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [localeMsgs, setLocaleMsgs] = useState({});

  useEffect(() => {
    if (locale === "en") setLocaleMsgs(localeEn);
    else setLocaleMsgs(localeEs);
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={localeMsgs}>
      <Router>
        <Routes>
          <Route exact index element={<Pages.Home />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;
