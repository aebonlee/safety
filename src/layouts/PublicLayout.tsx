import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AdminGuard from '../components/AdminGuard';
import type { ReactElement } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));

// Learning path pages
const SafetyLaw = lazy(() => import('../pages/safety-law/SafetyLaw'));
const SafetyManagement = lazy(() => import('../pages/safety-management/SafetyManagement'));
const HealthManagement = lazy(() => import('../pages/health-management/HealthManagement'));
const RiskAssessment = lazy(() => import('../pages/risk-assessment/RiskAssessment'));
const AccidentPrevention = lazy(() => import('../pages/accident-prevention/AccidentPrevention'));
const SafetyEducation = lazy(() => import('../pages/safety-education/SafetyEducation'));
const WorkEnvironment = lazy(() => import('../pages/work-environment/WorkEnvironment'));
const EmergencyResponse = lazy(() => import('../pages/emergency-response/EmergencyResponse'));

const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback(): ReactElement {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout(): ReactElement {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Learning Paths */}
            <Route path="/safety-law" element={<SafetyLaw />} />
            <Route path="/safety-management" element={<SafetyManagement />} />
            <Route path="/health-management" element={<HealthManagement />} />
            <Route path="/risk-assessment" element={<RiskAssessment />} />
            <Route path="/accident-prevention" element={<AccidentPrevention />} />
            <Route path="/safety-education" element={<SafetyEducation />} />
            <Route path="/work-environment" element={<WorkEnvironment />} />
            <Route path="/emergency-response" element={<EmergencyResponse />} />

            <Route path="/admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
