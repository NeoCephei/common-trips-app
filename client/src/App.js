import './App.css';

import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import routes from './routes'

// elements
import { AccomodationPage } from './pages/accomodations/accomodations_page'
import { BudgetPage } from './pages/budget/budget_page'
import { GeneralPage } from './pages/general/general_page'
import { LandingPage } from './pages/landing/landing_page'
import { LoadingPage } from './pages/loading/loading_page'
import { PlanesPage } from './pages/planes/planes_page'
import { SettingsPage } from './pages/settings/settings_page'

function App() {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <Router>
        <Routes >
          <Route
            path={routes.landing()}
            element={<LandingPage />}
          />
          <Route
            path={routes.general()}
            element={<GeneralPage />}
          />
          <Route
            path={routes.planes()}
            element={<PlanesPage />}
          />
          <Route
            path={routes.accomodations()}
            element={<AccomodationPage />}
          />
          <Route
            path={routes.budget()}
            element={<BudgetPage />}
          />
          <Route
            path={routes.settings()}
            element={<SettingsPage />}
          />
        </Routes >
      </Router>
    </React.Suspense>
  );
}

export default App;
