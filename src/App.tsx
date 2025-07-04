import Sidebar from './components/Sidebar';
import SettingsHeader from './components/SettingsHeader';
import SettingsForm from './components/SettingsForm';

const App = () => (
  <div className="min-h-screen bg-white flex flex-col sm:flex-row">
    <Sidebar className="w-full sm:w-64 sm:flex-shrink-0" />
    <main className="flex-1 flex flex-col w-full">
      <SettingsHeader />
      <section className="flex-1 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
        <SettingsForm />
      </section>
    </main>
  </div>
);

export default App;